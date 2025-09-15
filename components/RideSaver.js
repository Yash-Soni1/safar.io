import { useUser } from "@clerk/nextjs"
import { saveRide } from "@/lib/rides"

export default function RideSaver({ distance, amount }) {
  const { user } = useUser()

  async function handlePaymentSuccess() {
    if (!user) return
    await saveRide(user.id, distance, amount)
    alert("Ride saved successfully!")
  }

  return (
    <button onClick={handlePaymentSuccess}>
      Simulate Payment Success
    </button>
  )
}
