"use client";

import { Car, Map, Clock, Shield, CreditCard, Headphones, List, Leaf } from "lucide-react";

import AnimatedBackground from "@/components/ui/animated-background";

function FeaturesSection() {
  const FEATURES = [
  {
    id: 1,
    title: "Fast Booking",
    description: "Book rides instantly with just a few taps.",
    icon: <Car className="w-6 h-6 text-amber-600" />,
  },
  {
    id: 2,
    title: "Live Tracking",
    description: "Track your driver in real-time with GPS updates.",
    icon: <Map className="w-6 h-6 text-amber-600" />,
  },
  {
    id: 3,
    title: "On-Time Rides",
    description: "Reliable drivers ensure you’re never late.",
    icon: <Clock className="w-6 h-6 text-amber-600" />,
  },
  {
    id: 4,
    title: "Safe & Secure",
    description: "Verified drivers and safety features for peace of mind.",
    icon: <Shield className="w-6 h-6 text-amber-600" />,
  },
  {
    id: 6,
    title: "24/7 Support",
    description: "Our support team is available anytime you need help.",
    icon: <Headphones className="w-6 h-6 text-amber-600" />,
  },
  {
    id: 7,
    title: "Ride History",
    description: "Access past bookings and invoices easily from the app.",
    icon: <List className="w-6 h-6 text-amber-600" />,
  },
];


  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-10 gap-6">
      <AnimatedBackground
        className="rounded-lg bg-amber-200 dark:bg-zinc-800"
        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        enableHover
      >
        {FEATURES.map((feature, index) => (
          <div
            key={index}
            data-id={`card-${index}`}
            className="p-6 max-w-[300px] flex flex-col items-center space-y-2 cursor-pointer"
          >
            {feature.icon}
            <h3 className="text-lg font-semibold">{feature.title}</h3>
            <p className="text-sm text-muted-foreground text-center">
              {feature.description}
            </p>
          </div>
        ))}
      </AnimatedBackground>
    </div>
  );
}

export { FeaturesSection };
