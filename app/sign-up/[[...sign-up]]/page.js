import { SignUp } from "@clerk/nextjs"
import { BeamsBackground } from "@/components/ui/beams-background"

export default function Page() {
  return (
    <BeamsBackground intensity="medium">
      <div className="flex items-center justify-center w-full h-full">
        <SignUp
          afterSignUpUrl="/dashboard"
          appearance={{
            elements: {
              rootBox: "flex justify-center",
              card: "shadow-2xl rounded-xl backdrop-blur-md bg-white/10",
              formButtonPrimary: "bg-blue-600 hover:bg-blue-700 text-white transition-colors",
            },
          }}
        />
      </div>
    </BeamsBackground>
  )
}
