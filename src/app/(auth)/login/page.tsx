"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"

function LoginPage() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)

    const payload = {
      email: form.get("email"),
      password: form.get("password"),
      remember: form.get("remember") === "on",
    }

    console.log("Login submit", payload)
  }

  return (
    <div className="min-h-[calc(100vh-80px)] bg-[#f0eef9] flex items-center">
      <div className="max-w-6xl w-full mx-auto grid md:grid-cols-2 gap-10 px-4 py-10">
        
        {/* Left: Login form */}
        <div>
          <Card className="bg-white/90 backdrop-blur border border-gray-200 shadow-lg">
            <CardContent className="p-8 md:p-10">
              <div className="mb-8">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Welcome back
                </h1>
                <p className="text-gray-600 mt-2">
                  Sign in to continue to CredJoy
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Email address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="••••••••"
                    required
                  />
                </div>

                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2 text-sm text-gray-600">
                    <input
                      name="remember"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    Remember me
                  </label>

                  <Link
                    href="/forgot-password"
                    className="text-sm text-primary hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>

                <Button type="submit" className="w-full h-11 text-base font-semibold">
                  Sign In
                </Button>

                <p className="text-sm text-gray-600 text-center">
                  New to CredJoy?{" "}
                  <Link
                    href="/signup"
                    className="text-primary font-semibold hover:underline"
                  >
                    Create an account
                  </Link>
                </p>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Right: Brand / Info panel */}
        <div className="relative hidden md:block">
          <div
            className="h-full w-full rounded-2xl overflow-hidden shadow-2xl border-8"
            style={{ borderColor: "rgba(102,126,234,0.25)" }}
          >
            <Image
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1000&auto=format&fit=crop&q=60"
              alt="CredJoy"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-secondary/20 rounded-2xl" />

          <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur rounded-xl p-5 shadow-lg border border-gray-200">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-primary text-white flex items-center justify-center font-bold">
                CJ
              </div>
              <span className="text-xl font-bold text-gray-900">CredJoy</span>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              Fast approvals, transparent processing, and flexible repayments.
              Join 10k+ happy customers.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage