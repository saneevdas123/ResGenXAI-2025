import { NextRequest, NextResponse } from 'next/server'
import clientPromise from '@/lib/mongodb'

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ registrationId: string }> }
) {
  try {
    const { registrationId } = await params

    if (!registrationId) {
      return NextResponse.json({ 
        error: 'Registration ID is required',
        success: false 
      }, { status: 400 })
    }

    const client = await clientPromise
    const db = client.db('conference')
    const registrations = db.collection('registrations')

    // Find registration by ID
    const registration = await registrations.findOne({ 
      registrationId: registrationId 
    })

    if (!registration) {
      return NextResponse.json({ 
        error: 'Registration not found',
        success: false 
      }, { status: 404 })
    }

    const {
      _id,
      metadata,
      ...safeRegistration
    } = registration

    return NextResponse.json({
      success: true,
      registration: safeRegistration
    })

  } catch (error) {
    console.error('Error fetching registration:', error)
    return NextResponse.json({ 
      error: 'Failed to fetch registration details',
      success: false 
    }, { status: 500 })
  }
}