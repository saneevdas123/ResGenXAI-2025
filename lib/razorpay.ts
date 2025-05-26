import Razorpay from 'razorpay'

export const razorpayInstance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
})

export const createOrder = async (amount: number, currency: string, receipt: string) => {
  const options = {
    amount: amount * 100, 
    currency,
    receipt,
  }

  return await razorpayInstance.orders.create(options)
}