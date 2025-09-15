import { supabase } from "./supabaseClient"

export async function saveRide(userId, distance, payment) {
  const { data, error } = await supabase.from("rides").insert([{
    user_id: userId,
    distance,
    payment
  }])

  if (error) {
    console.error("Error saving ride:", error)
  }
  return data
}

export async function getUserRides(userId) {
  const { data, error } = await supabase
    .from("rides")
    .select("*")
    .eq("user_id", userId)
    .order("created_at", { ascending: false })

  if (error) {
    console.error("Error fetching rides:", error)
    return []
  }
  return data
}
