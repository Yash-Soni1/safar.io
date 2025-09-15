import { NextResponse } from "next/server"
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  typescript:true,
  apiVersion: "2025-08-27.basil",
})

export async function POST(request: Request) {
  const { amount } = await request.json()

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(Number(amount) * 100), // convert to paise
      currency: "inr",
    })

    return NextResponse.json({ client_secret: paymentIntent.client_secret })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 })
  }
}
