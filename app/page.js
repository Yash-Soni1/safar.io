"use client"

import { useUser } from "@clerk/nextjs"
import { useRouter } from "next/navigation"
import Navbar from "@/components/Navbar"
import { Car } from "lucide-react"

import { Hero } from "@/components/ui/animated-hero"
import AboutSection from "@/components/ui/about-section"


export default function DashboardOrHome() {

  const { user, isLoaded } = useUser()
  const router = useRouter()

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center min-h-screen text-white">
        Loading...
      </div>
    )
  }

  if (!user) {
    return (
      <main className="flex flex-col items-center justify-center">
        <Navbar />
        <Hero />
        <AboutSection />
      </main>
    )
  }

  return (

    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white flex flex-col">
      <Navbar />

      <main className="flex-1 flex flex-col items-center justify-center px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Welcome {user.firstName || "Rider"}
        </h2>
        <p className="text-lg text-gray-300 max-w-xl mb-8">
          You’re now signed in to <span className="text-amber-400">Safar.io</span>.
          Book rides instantly, track your drivers in real-time, and enjoy a seamless commuting experience.
        </p>

        <div className="gap-6 flex flex-col items-center mt-6">
          <div
            onClick={() => router.push("/book-ride")}
            className="cursor-pointer p-6 bg-gray-800/70 rounded-2xl shadow-lg hover:shadow-amber-500/30 transition"
          >
            <div className="flex flex-col items-center text-center space-y-2">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Car /> Book a Ride
              </h3>
              <p className="text-gray-400">
                Quickly request a ride and get matched with nearby drivers.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
