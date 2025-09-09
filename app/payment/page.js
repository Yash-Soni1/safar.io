"use client"

import React, { useEffect, useState } from "react"
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import CheckoutForm from "@/components/checkoutForm"
import { useSearchParams } from "next/navigation"
import Navbar from "@/components/Navbar"

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)

export default function PaymentPage() {
    const searchParams = useSearchParams()
    const amount = searchParams.get("amount") || 100 // fallback ₹100
    const [clientSecret, setClientSecret] = useState("")

    useEffect(() => {
        fetch("/api/create-intent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ amount }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log("Stripe response:", data)
                if (data.client_secret) {
                    setClientSecret(data.client_secret)
                }
            })
    }, [amount])

    return (
        <>
            <Navbar />
            <div className="max-w-md mx-auto mt-10">
                <h1 className="text-2xl font-bold mb-4">Payment Page</h1>
                {clientSecret ? (
                    <Elements stripe={stripePromise} options={{ clientSecret }}>
                        <CheckoutForm amount={amount} />
                    </Elements>
                ) : (
                    <p>Loading payment form...</p>
                )}
            </div>
        </>
    )
}
