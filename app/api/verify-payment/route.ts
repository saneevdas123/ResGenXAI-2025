import { NextRequest, NextResponse } from 'next/server'
import crypto from 'crypto'
import clientPromise from '@/lib/mongodb'
import { sendConfirmationEmail } from '@/lib/email'

interface RegistrationData {
  participantName: string
  email: string
  mobileNumber: string
  whatsappNumber: string
  country: string
  category: string
  ieeeStatus: string
  nationality: string
  paperId: string
  copyrightAgreement: string
  presentationMode: string
  calculatedFee: number
  currency: string
  paymentProofUrl?: string
  ieeeProofUrl?: string
}

const generateRegistrationId = (): string => {
  const timestamp = Date.now()
  const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0')
  return `REG${timestamp}${random}`
}

export async function POST(request: NextRequest) {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      registrationData,
    } = await request.json()

    // Validate required payment fields
    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return NextResponse.json({ 
        error: 'Missing payment verification data' 
      }, { status: 400 })
    }

    // Validate registration data
    if (!registrationData || !registrationData.participantName || !registrationData.email) {
      return NextResponse.json({ 
        error: 'Invalid registration data' 
      }, { status: 400 })
    }

    // Verify Razorpay signature
    const body = razorpay_order_id + '|' + razorpay_payment_id
    const expectedSignature = crypto
      .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET!)
      .update(body.toString())
      .digest('hex')

    if (expectedSignature !== razorpay_signature) {
      return NextResponse.json({ 
        error: 'Invalid payment signature' 
      }, { status: 400 })
    }

    // Connect to database
    const client = await clientPromise
    const db = client.db('conference')
    const registrations = db.collection('registrations')

    // Check for duplicate registration by email or payment ID
    const existingRegistration = await registrations.findOne({
      $or: [
        { email: registrationData.email },
        { paymentId: razorpay_payment_id }
      ]
    })

    if (existingRegistration) {
      return NextResponse.json({ 
        error: 'Registration already exists for this email or payment ID' 
      }, { status: 409 })
    }

    // Generate unique registration ID
    const registrationId = generateRegistrationId()

    // Prepare complete registration record with all real data
    const registrationRecord = {
      // Personal Information
      participantName: registrationData.participantName.trim(),
      email: registrationData.email.toLowerCase().trim(),
      mobileNumber: registrationData.mobileNumber.trim(),
      whatsappNumber: registrationData.whatsappNumber.trim(),
      country: registrationData.country.trim(),
      
      // Registration Details
      category: registrationData.category,
      ieeeStatus: registrationData.ieeeStatus,
      nationality: registrationData.nationality,
      
      // Paper Information
      paperId: registrationData.paperId.trim(),
      copyrightAgreement: registrationData.copyrightAgreement,
      presentationMode: registrationData.presentationMode,
      
      // Payment Information
      calculatedFee: registrationData.calculatedFee,
      currency: registrationData.currency,
      paymentId: razorpay_payment_id,
      orderId: razorpay_order_id,
      paymentStatus: 'completed',
      
      // File URLs (if any)
      paymentProofUrl: registrationData.paymentProofUrl || null,
      ieeeProofUrl: registrationData.ieeeProofUrl || null,
      
      // System Information
      registrationId,
      registrationDate: new Date(),
      
      // Metadata for tracking
      metadata: {
        userAgent: request.headers.get('user-agent') || 'unknown',
        ipAddress: request.headers.get('x-forwarded-for') || 
                  request.headers.get('x-real-ip') || 
                  'unknown',
        paymentTimestamp: new Date().toISOString(),
        source: 'web'
      }
    }

    // Insert registration record
    const insertResult = await registrations.insertOne(registrationRecord)
    
    if (!insertResult.acknowledged) {
      throw new Error('Failed to save registration to database')
    }

    console.log('Registration saved successfully:', {
      registrationId,
      participantName: registrationData.participantName,
      email: registrationData.email,
      paymentId: razorpay_payment_id
    })

    // Send confirmation email with real data
    try {
      await sendConfirmationEmail(registrationRecord)
      console.log('Confirmation email sent to:', registrationData.email)
    } catch (emailError) {
      console.error('Failed to send confirmation email:', emailError)
      // Don't fail the registration if email fails
    }

    // Return success response with registration details
    return NextResponse.json({ 
      success: true, 
      registrationId: registrationRecord.registrationId,
      message: 'Registration completed successfully',
      participantName: registrationData.participantName,
      email: registrationData.email,
      paymentId: razorpay_payment_id,
      amount: `${registrationData.calculatedFee} ${registrationData.currency}`
    })

  } catch (error) {
    console.error('Payment verification error:', error)
    
    // Log detailed error for debugging
    console.error('Error details:', {
      message: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : null,
      timestamp: new Date().toISOString()
    })

    return NextResponse.json({ 
      error: 'Payment verification failed',
      details: 'Please contact support if the problem persists.'
    }, { status: 500 })
  }
}