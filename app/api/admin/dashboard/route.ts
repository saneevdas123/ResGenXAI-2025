import { NextRequest, NextResponse } from 'next/server'
import clientPromise from '@/lib/mongodb'

export async function POST(request: NextRequest) {
  try {
    const { pin } = await request.json()

    if (pin !== process.env.ADMIN_PIN) {
      return NextResponse.json({ error: 'Invalid PIN' }, { status: 401 })
    }

    const client = await clientPromise
    const db = client.db('conference')
    const registrations = db.collection('registrations')

    const allRegistrations = await registrations.find({}).toArray()

    const totalRegistrations = allRegistrations.length
    const completedPayments = allRegistrations.filter(reg => reg.paymentStatus === 'completed').length
    const totalAmount = allRegistrations
      .filter(reg => reg.paymentStatus === 'completed')
      .reduce((sum, reg) => sum + reg.calculatedFee, 0)

    const categoryBreakdown = allRegistrations.reduce((acc, reg) => {
      acc[reg.category] = (acc[reg.category] || 0) + 1
      return acc
    }, {} as Record<string, number>)

    const ieeeBreakdown = allRegistrations.reduce((acc, reg) => {
      const key = reg.ieeeStatus === 'yes' ? 'IEEE Members' : 'Non-IEEE Members'
      acc[key] = (acc[key] || 0) + 1
      return acc
    }, {} as Record<string, number>)

    const recentRegistrations = allRegistrations
      .sort((a, b) => new Date(b.registrationDate).getTime() - new Date(a.registrationDate).getTime())
      .slice(0, 10)

    return NextResponse.json({
      success: true,
      data: {
        totalRegistrations,
        completedPayments,
        totalAmount,
        categoryBreakdown,
        ieeeBreakdown,
        recentRegistrations,
        allRegistrations,
      }
    })

  } catch (error) {
    console.error('Dashboard error:', error)
    return NextResponse.json({ error: 'Failed to fetch dashboard data' }, { status: 500 })
  }
}