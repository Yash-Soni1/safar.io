"use client"

import { useUser } from "@clerk/nextjs"
import { useEffect, useState } from "react"
import { getUserRides } from "@/lib/rides"

export default function MyRides() {
  const { user } = useUser()
  const [rides, setRides] = useState([])

  useEffect(() => {
    if (user) {
      getUserRides(user.id).then(setRides)
    }
  }, [user])

  return (
    <div>
      <h1>My Rides</h1>
      {rides.length === 0 ? (
        <p>No rides yet</p>
      ) : (
        <ul>
          {rides.map((ride) => (
            <li key={ride.id}>
              Distance: {ride.distance} km | Payment: ₹{ride.payment}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
