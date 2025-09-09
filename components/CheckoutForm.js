"use client"

import { PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js"
import React, { useState } from "react"

export default function CheckoutForm({ amount }) {
  const stripe = useStripe()
  const elements = useElements()
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!stripe || !elements) return

    setLoading(true)

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: "http://localhost:3000/success", // change in prod
      },
    })

    if (error) {
      setErrorMessage(error.message)
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded-lg shadow">
      <PaymentElement />
      <button
        disabled={!stripe || loading}
        className="w-full bg-[#ffcc00] text-white rounded-lg p-2 mt-4"
      >
        {loading ? "Processing..." : `Pay ₹${amount}`}
      </button>
      {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
    </form>
  )
}
