import { SignIn } from "@clerk/nextjs"
import { BeamsBackground } from "@/components/ui/beams-background"

export default function Page() {
  return (
    <BeamsBackground intensity="medium">
      <div className="flex items-center justify-center w-full h-full">
        <SignIn
          afterSignInUrl="/dashboard"
          appearance={{
            elements: {
              rootBox: "flex justify-center",
              card: "shadow-2xl rounded-xl backdrop-blur-md bg-white/10",
              formButtonPrimary: "bg-amber-600 hover:bg-amber-700 text-white transition-colors",
            },
          }}
        />
      </div>
    </BeamsBackground>
  )
}
