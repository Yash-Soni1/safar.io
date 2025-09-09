"use client"

import { useState, useEffect, useRef } from "react"
import {
  Car,
  Map,
  Clock,
  Shield,
  CreditCard,
  Headphones,
  List,
  Leaf,
  Award,
  Users,
  Calendar,
  TrendingUp,
  Zap,
  CheckCircle,
  Sparkles,
  Star,
} from "lucide-react"
import { motion, useScroll, useTransform, useInView, useSpring } from "framer-motion"
import Image from "next/image"

export default function AboutSection() {
  const sectionRef = useRef(null)
  const statsRef = useRef(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 })
  const isStatsInView = useInView(statsRef, { once: false, amount: 0.3 })

  // Parallax effect
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
  }
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  }

  // Replace "Interior/Exterior/Design" with ride-hailing services
  const services = [
    {
      icon: <Car className="w-6 h-6" />,
      secondaryIcon: <Sparkles className="w-4 h-4 absolute -top-1 -right-1 text-blue-500" />,
      title: "Fast Booking",
      description: "Book rides instantly with just a few taps, anytime and anywhere.",
      position: "left",
    },
    {
      icon: <Map className="w-6 h-6" />,
      secondaryIcon: <CheckCircle className="w-4 h-4 absolute -top-1 -right-1 text-green-500" />,
      title: "Live Tracking",
      description: "Track your driver in real-time with accurate GPS updates.",
      position: "left",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      secondaryIcon: <Star className="w-4 h-4 absolute -top-1 -right-1 text-amber-500" />,
      title: "On-Time Rides",
      description: "Reliable drivers ensure you never miss an important moment.",
      position: "left",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      secondaryIcon: <Sparkles className="w-4 h-4 absolute -top-1 -right-1 text-blue-500" />,
      title: "Safe & Secure",
      description: "Verified drivers and built-in safety features for peace of mind.",
      position: "right",
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      secondaryIcon: <CheckCircle className="w-4 h-4 absolute -top-1 -right-1 text-green-500" />,
      title: "Flexible Payments",
      description: "Pay with cards, wallets, UPI, or cash — hassle-free transactions.",
      position: "right",
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      secondaryIcon: <Star className="w-4 h-4 absolute -top-1 -right-1 text-amber-500" />,
      title: "24/7 Support",
      description: "Our support team is always available to assist you, day or night.",
      position: "right",
    },
  ]

  const stats = [
    { icon: <Award />, value: 50, label: "Cities Covered", suffix: "+" },
    { icon: <Users />, value: 5000, label: "Happy Riders", suffix: "+" },
    { icon: <Calendar />, value: 2, label: "Years in Service", suffix: "" },
    { icon: <TrendingUp />, value: 95, label: "Satisfaction Rate", suffix: "%" },
  ]

  return (
    <section
      id="about-section"
      ref={sectionRef}
      className="w-full py-24 px-4 bg-gradient-to-b from-amber-50 to-white text-gray-900 relative overflow-hidden"
    >
      {/* background accents */}
      <motion.div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-amber-200/20 blur-3xl" style={{ y: y1 }} />
      <motion.div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-amber-200/20 blur-3xl" style={{ y: y2 }} />

      <motion.div className="container mx-auto max-w-6xl relative z-10" initial="hidden" animate={isInView ? "visible" : "hidden"} variants={containerVariants}>
        {/* Header */}
        <motion.div className="flex flex-col items-center mb-6" variants={itemVariants}>
          <motion.span className="text-amber-600 font-medium mb-2 flex items-center gap-2">
            <Zap className="w-4 h-4" />
            SMART RIDES, MADE SIMPLE
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">About Safar.io</h2>
          <motion.div className="w-24 h-1 bg-amber-600" initial={{ width: 0 }} animate={{ width: 96 }} transition={{ duration: 1, delay: 0.5 }} />
        </motion.div>

        <motion.p className="text-center max-w-2xl mx-auto mb-16 text-gray-600" variants={itemVariants}>
          Safar.io is your trusted ride-hailing partner, built to make urban commuting effortless. Whether you’re heading to work, meeting
          friends, or catching a flight — our platform ensures safe, affordable, and reliable rides every single time.
        </motion.p>

        {/* Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div className="space-y-16">
            {services.filter(s => s.position === "left").map((s, i) => (
              <ServiceItem key={`left-${i}`} {...s} variants={itemVariants} delay={i * 0.2} />
            ))}
          </div>

          <div className="flex justify-center items-center order-first md:order-none mb-8 md:mb-0">
            <motion.div className="relative w-full max-w-xs" variants={itemVariants}>
              <motion.div
                className="rounded-md overflow-hidden hover:scale-105 transition-transform duration-400"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <Image
                  src="/assets/person.png"
                  alt="Safar.io Ride"
                  width={300}
                  height={600}
                  className="rounded-md hover:scale-105 transition-transform h-[450px] duration-400 object-cover"
                />
              </motion.div>
            </motion.div>
          </div>

          <div className="space-y-16">
            {services.filter(s => s.position === "right").map((s, i) => (
              <ServiceItem key={`right-${i}`} {...s} variants={itemVariants} delay={i * 0.2} />
            ))}
          </div>
        </div>

        {/* Stats */}
        <motion.div ref={statsRef} className="mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" initial="hidden" animate={isStatsInView ? "visible" : "hidden"} variants={containerVariants}>
          {stats.map((stat, i) => (
            <StatCounter key={i} {...stat} delay={i * 0.1} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

function ServiceItem({ icon, secondaryIcon, title, description, variants, delay }) {
  return (
    <motion.div className="flex flex-col group" variants={variants} transition={{ delay }}>
      <div className="flex items-center gap-3 mb-3">
        <div className="text-amber-600 bg-amber-100 p-3 rounded-lg relative">{icon}{secondaryIcon}</div>
        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-amber-600">{title}</h3>
      </div>
      <p className="text-sm text-gray-600 leading-relaxed pl-12">{description}</p>
    </motion.div>
  )
}

function StatCounter({ icon, value, label, suffix, delay }) {
  const countRef = useRef(null)
  const isInView = useInView(countRef, { once: false })
  const [hasAnimated, setHasAnimated] = useState(false)

  const springValue = useSpring(0, { stiffness: 50, damping: 10 })

  useEffect(() => {
    if (isInView && !hasAnimated) {
      springValue.set(value)
      setHasAnimated(true)
    } else if (!isInView && hasAnimated) {
      springValue.set(0)
      setHasAnimated(false)
    }
  }, [isInView, value, springValue, hasAnimated])

  const displayValue = useTransform(springValue, latest => Math.floor(latest))

  return (
    <motion.div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl flex flex-col items-center text-center group hover:bg-white transition-colors duration-300" variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay } } }}>
      <div className="w-14 h-14 rounded-full bg-amber-50 flex items-center justify-center mb-4 text-amber-600">{icon}</div>
      <motion.div ref={countRef} className="text-3xl font-bold text-gray-900 flex items-center">
        <motion.span>{displayValue}</motion.span>
        <span>{suffix}</span>
      </motion.div>
      <p className="text-gray-600 text-sm mt-1">{label}</p>
    </motion.div>
  )
}
