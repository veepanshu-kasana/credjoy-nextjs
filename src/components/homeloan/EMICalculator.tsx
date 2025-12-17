"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"

export function EMICalculator() {
  const [amount, setAmount] = useState(500000)
  const [tenure, setTenure] = useState(240)
  const [rate, setRate] = useState(8.5)

  const monthlyRate = rate / 100 / 12
  const emi =
    (amount *
      monthlyRate *
      Math.pow(1 + monthlyRate, tenure)) /
    (Math.pow(1 + monthlyRate, tenure) - 1)

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold mb-6">
            Calculate Your EMI
          </h2>

          <Slider
            value={[amount]}
            onValueChange={(v) => setAmount(v[0])}
            min={100000}
            max={20000000}
            step={50000}
          />

          <Slider
            value={[tenure]}
            onValueChange={(v) => setTenure(v[0])}
            min={12}
            max={360}
            step={12}
            className="mt-6"
          />

          <Slider
            value={[rate]}
            onValueChange={(v) => setRate(v[0])}
            min={6}
            max={12}
            step={0.1}
            className="mt-6"
          />
        </div>

        <Card className="flex items-center justify-center">
          <CardContent className="p-10 text-center">
            <p className="text-gray-600">Monthly EMI</p>
            <p className="text-4xl font-bold">
              ₹{Math.round(emi).toLocaleString("en-IN")}
            </p>

            <Link href="/loans/home/apply">
              <Button className="mt-8 w-full" size="lg">
                Apply Now
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
