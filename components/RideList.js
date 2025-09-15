import { useUser } from "@clerk/nextjs"
import { useEffect, useState } from "react"
import { getUserRides } from "@/lib/rides"

export default function RideList() {
  const { user } = useUser()
  const [rides, setRides] = useState([])

useEffect(() => {
  if (user) {
    getUserRides(user.id).then(setRides)
  }
}, [user])


  return (
    <div>
      <h2>My Rides</h2>
      <ul>
        {rides.map(ride => (
          <li key={ride.id}>
            Distance: {ride.distance} | Payment: {ride.payment}
          </li>
        ))}
      </ul>
    </div>
  )
}
