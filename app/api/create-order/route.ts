import { NextRequest, NextResponse } from 'next/server'
import { createOrder } from '@/lib/razorpay'

export async function POST(request: NextRequest) {
  try {
    const { amount, currency, receipt, registrationData } = await request.json()

    const order = await createOrder(amount, currency, receipt)
    return NextResponse.json(order)
  } catch (error) {
    console.error('Order creation failed:', error)
    return NextResponse.json({ error: 'Failed to create order' }, { status: 500 })
  }
}