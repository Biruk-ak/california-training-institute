import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "Why CTI for Digital Knowledges?",
    answer: "Prerequisites vary by program. Our beginner-friendly courses require no prior experience, while advanced programs may require foundational knowledge. Each course page lists specific requirements, and our advisors can help you choose the right program for your skill level.",
  },
  {
    question: "Who are going to be the Instructors at CTI?",
    answer: "Program durations range from 12 to 20 weeks depending on the course. We offer flexible scheduling with full-time intensive options (4-5 months) and part-time evening/weekend classes (6-8 months) to accommodate working professionals.",
  },
  {
    question: "What are the digital marketing course contents at CTI ?",
    answer: "Yes! All CTI certifications are ISO-certified and recognized globally. Our certificates are accepted by employers in over 150 countries and meet international industry standards. Each certificate includes blockchain verification for authenticity.",
  },
  {
    question: "Will there be other additional Courses?",
    answer: "We offer comprehensive lifetime career support including resume building, LinkedIn optimization, interview preparation, salary negotiation coaching, and job placement assistance. Our career services team has relationships with 500+ hiring partners.",
  },
  {
    question: "What are the available Class Schedules at CTI?",
    answer: "We offer both options! You can choose from fully online live classes, hybrid programs with some in-person sessions, or fully on-campus immersive experiences. All formats provide the same high-quality instruction and certification.",
  },
  {
    question: "How long does it take to complete the course at CTI?",
    answer: "We offer a 14-day money-back guarantee. If you're not satisfied with the program within the first two weeks, you can request a full refund. After that, refunds are prorated based on course completion percentage according to our terms and conditions.",
  },
]

export function FAQSection() {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Find answers to common questions about our programs, certifications, and enrollment process.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b last:border-b-0 py-2">
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
