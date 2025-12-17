import Link from "next/link"
import Image from "next/image"
import { CheckCircle2, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroLoan() {
  return (
    <section className="py-6 md:py-16 px-4 bg-[#f0eef9]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-4">
          <div className="inline-flex items-center gap-2 px-2 py-1 rounded-full bg-primary/15 text-primary w-fit">
            <CheckCircle2 className="h-4 w-4" />
            <span className="text-xs font-bold uppercase">
              Best Rate Guarantee
            </span>
          </div>

          <h1 className="text-6xl md:text-7xl font-black text-gray-900">
            Own Your <br />
            <span className="text-primary">Dream Home</span>
          </h1>

          <p className="text-lg text-gray-700 max-w-lg">
            Affordable home financing with repayment options up to 30 years.
          </p>

          <div className="flex gap-4">
            <Link href="/loans/home/apply">
              <Button size="lg" className="rounded-full px-8 font-extrabold">
                Apply Now
              </Button>
            </Link>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-8 font-extrabold gap-2"
            >
              <Play className="h-4 w-4" />
              Watch Video
            </Button>
          </div>
        </div>

        <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-primary/30">
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=700"
            alt="Home"
            width={700}
            height={500}
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}
