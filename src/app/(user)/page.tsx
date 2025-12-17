"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

/* ================= HERO ================= */
function Hero() {
  return (
    <section
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-4 py-20"
      style={{ background: "linear-gradient(135deg, #e8dff7 0%, #f0eef9 100%)" }}
    >
      {/* Floating Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[10%] left-[10%] w-48 h-48 bg-blue-400 opacity-5 rounded-full animate-float" />
        <div className="absolute top-1/2 right-[10%] w-72 h-72 bg-purple-400 opacity-5 rounded-full animate-float delay-2000" />
        <div className="absolute bottom-[20%] left-[5%] w-36 h-36 bg-purple-300 opacity-5 rounded-full animate-float delay-4000" />
      </div>

      <div className="relative z-10 text-center max-w-4xl animate-fadeInUp">
        <div className="inline-flex px-4 py-2 rounded-full bg-primary/15 text-primary font-bold mb-6">
          ✨ Earn Rewards on Every Loan
        </div>

        <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6">
          Smart Loans with
          <span className="block text-primary mt-2">Instant Rewards</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-2xl mx-auto">
          Get flexible loans with competitive rates and earn valuable reward points
          on every transaction.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/signup">
            <Button size="lg" className="rounded-full px-10 font-bold shadow-lg">
              Get Started
            </Button>
          </Link>
          <Link href="/login">
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-10 font-bold border-2"
            >
              Sign In
            </Button>
          </Link>
        </div>

        <div className="flex justify-center gap-12 mt-12 pt-8 border-t border-gray-300/50">
          <Stat value="10k+" label="Happy Customers" />
          <Stat value="₹500Cr+" label="Loans Disbursed" />
          <Stat value="4.9/5" label="User Rating" />
        </div>
      </div>
    </section>
  )
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="text-3xl font-black">{value}</p>
      <p className="text-xs text-gray-600 font-bold uppercase">{label}</p>
    </div>
  )
}

/* ================= REWARDS ================= */
function RewardsPoints() {
  const benefits = [
    { icon: "🎁", title: "Earn on Every Loan", desc: "More you borrow, more you earn." },
    { icon: "💰", title: "Redeem Anywhere", desc: "Use points as cashback or EMI reduction." },
    { icon: "⚡", title: "Instant Rewards", desc: "Credited immediately on approval." },
    { icon: "🎯", title: "Bonus Multipliers", desc: "Earn up to 3X rewards." },
  ]

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-black mb-6">
          CredJoy <span className="text-primary">Rewards</span>
        </h2>

        <div className="grid md:grid-cols-4 gap-6 mt-12">
          {benefits.map((b, i) => (
            <Card key={i} className="hover:shadow-xl transition">
              <CardContent className="p-6">
                <div className="text-5xl mb-4">{b.icon}</div>
                <h3 className="font-bold text-xl mb-2">{b.title}</h3>
                <p className="text-sm text-gray-600">{b.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ================= FEATURES ================= */
function Features() {
  const features = [
    "⚡ Quick Approval",
    "🔒 Secure & Safe",
    "📊 Transparent Pricing",
    "💰 Flexible Terms",
    "👥 24/7 Support",
    "✅ Instant Disbursal",
  ]

  return (
    <section className="py-20 px-4 bg-[#f0eef9]">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">Why Choose CredJoy?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-md">
              <p className="text-xl font-semibold">{f}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ================= CAROUSEL ================= */
function Carousel() {
  const [x, setX] = useState(0)
  const banks = ["🏦 HDFC", "🏛 ICICI", "📈 Axis", "🏢 SBI", "💳 Kotak"]

  useEffect(() => {
    const id = setInterval(() => {
      setX((prev) => (prev > 300 ? 0 : prev + 1))
    }, 30)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="py-20 bg-[#f0eef9] overflow-hidden">
      <h2 className="text-4xl font-bold text-center mb-10">Our Bank Partners</h2>
      <div className="flex gap-12 justify-center" style={{ transform: `translateX(-${x}px)` }}>
        {banks.concat(banks).map((b, i) => (
          <div key={i} className="bg-white px-8 py-6 rounded-xl shadow-md">
            {b}
          </div>
        ))}
      </div>
    </section>
  )
}

/* ================= CTA ================= */
function CTASection() {
  return (
    <section className="py-24 px-4 bg-[#f0eef9]">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl p-16 text-center shadow-2xl">
        <h2 className="text-4xl md:text-5xl font-black mb-6">
          Ready to Start Earning Rewards?
        </h2>
        <p className="text-gray-600 text-lg mb-10">
          Turn every loan into an opportunity to earn.
        </p>

        <div className="flex justify-center gap-4">
          <Link href="/signup">
            <Button size="lg" className="rounded-full px-10 font-bold">
              Create Free Account
            </Button>
          </Link>
          <Link href="/login">
            <Button variant="outline" size="lg" className="rounded-full px-10 font-bold">
              Sign In
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ================= MAIN HOME ================= */
function HomePage() {
  return (
    <main className="bg-[#f0eef9]">
      <Hero />
      <RewardsPoints />
      <Features />
      <Carousel />
      <CTASection />
    </main>
  )
}

export default HomePage;
