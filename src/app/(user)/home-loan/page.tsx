import {
  HeroLoan,
  FeaturesLoan,
  EMICalculator,
  FAQ,
  CTAFooter,
} from "@/components/homeloan"

function HomeLoanPage() {
  return (
    <main className="bg-[#f0eef9]">
      <HeroLoan />
      <FeaturesLoan />
      <EMICalculator />
      <FAQ />
      <CTAFooter />
    </main>
  )
}

export default HomeLoanPage;