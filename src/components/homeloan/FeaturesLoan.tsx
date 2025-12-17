import { Card, CardContent } from "@/components/ui/card"

export function FeaturesLoan() {
  const features = [
    { icon: "💰", title: "Low EMI Options", desc: "Flexible payment plans" },
    { icon: "📅", title: "30 Year Tenure", desc: "Long repayment duration" },
    { icon: "🏠", title: "Doorstep Service", desc: "Hassle-free process" },
    { icon: "👁️", title: "Transparent Pricing", desc: "No hidden charges" },
  ]

  return (
    <section className="py-12 px-4 bg-[#f0eef9]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6">
        {features.map((f, i) => (
          <Card key={i}>
            <CardContent className="p-6">
              <div className="text-4xl mb-3">{f.icon}</div>
              <h3 className="font-bold mb-1">{f.title}</h3>
              <p className="text-sm text-gray-600">{f.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
