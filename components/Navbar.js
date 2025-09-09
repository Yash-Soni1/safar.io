"use client"

import { useUser, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"

export default function Navbar() {
  const { user, isLoaded } = useUser()

  return (
    <header className="w-full flex items-center justify-between px-6 py-4 border-b border-gray-700 bg-[#1B1C1C] text-white">
     <div className="flex items-center gap-3">
       {/* Brand */}
      <Image src="/assets/logo.png" alt="Logo" width={40} height={40} />
      <Link href="/" className="text-2xl font-bold text-[#FCBE06]">
        Safar.io
      </Link>
     </div>

      {/* Right side */}
      {!isLoaded ? (
        <span className="text-gray-400">Loading...</span>
      ) : !user ? (
        <div className="flex items-center gap-4">
          <Link href="/sign-in">
            <button className="px-4 py-2 bg-amber-500 rounded-lg text-black font-semibold hover:bg-amber-400 transition">
              Sign In
            </button>
          </Link>
          <Link href="/sign-up">
            <button className="px-4 py-2 bg-gray-800 rounded-lg text-white hover:bg-gray-700 transition">
              Sign Up
            </button>
          </Link>
        </div>
      ) : (
        <div className="flex items-center gap-4">
          {/* User’s Name */}
          <span className="text-sm text-gray-300">
            {"Hello, "}
            <span className="font-semibold text-white">
              {user.fullName}
            </span>
          </span>
          {/* User Profile / Sign Out */}
          <UserButton afterSignOutUrl="/" />
        </div>
      )}
    </header>
  )
}
