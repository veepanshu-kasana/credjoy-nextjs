import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"

export function FAQ() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">
          FAQs
        </h2>
        <Accordion type="single" collapsible>
          <AccordionItem value="1">
            <AccordionTrigger>
              What is the minimum salary required?
            </AccordionTrigger>
            <AccordionContent>
              Usually starts from ₹25,000/month depending on city.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="2">
            <AccordionTrigger>
              Are there prepayment charges?
            </AccordionTrigger>
            <AccordionContent>
              No charges on floating rate loans.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}
