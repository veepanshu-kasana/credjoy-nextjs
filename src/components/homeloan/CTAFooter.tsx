import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CTAFooter() {
  return (
    <section className="py-12 px-4 bg-gray-100">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl p-12 text-center">
        <h2 className="text-3xl font-black mb-4">
          Ready to move into your dream home?
        </h2>

        <Link href="/loans/home/apply">
          <Button size="lg" className="mt-6">
            Apply Now
          </Button>
        </Link>
      </div>
    </section>
  )
}
