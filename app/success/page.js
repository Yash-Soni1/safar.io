"use client"

import Link from "next/link"

export default function SuccessPage() {
  return (
    <div className="pt-12 text-center min-h-screen bg-gray-50">
      <h1 className="text-4xl font-extrabold text-green-600 mb-3">
        Payment Successful 
      </h1>

      {/* Car GIF */}
      <img
        src="https://blog.uber-cdn.com/cdn-cgi/image/width=2160,quality=80,onerror=redirect,format=auto/wp-content/uploads/2018/02/Cover-Pic-1.gif"
        alt="Car Driving"
        className="w-full h-[500px] object-contain mb-6"
      />

      {/* Go Home Button */}
      <Link
        href="/"
        className="px-6 py-3 bg-green-600 text-white rounded-2xl shadow-md hover:bg-green-700 transition"
      >
        Go Back Home
      </Link>
    </div>
  )
}
