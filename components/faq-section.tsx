import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What are the prerequisites for enrolling in a certification program?",
    answer:
      "Prerequisites vary by program. Our beginner-friendly courses require no prior experience, while advanced programs may require foundational knowledge. Each course page lists specific requirements, and our advisors can help you choose the right program for your skill level.",
  },
  {
    question: "How long does it take to complete a certification?",
    answer:
      "Program durations range from 12 to 20 weeks depending on the course. We offer flexible scheduling with full-time intensive options (4-5 months) and part-time evening/weekend classes (6-8 months) to accommodate working professionals.",
  },
  {
    question: "Are the certifications internationally recognized?",
    answer:
      "Yes! All CTI certifications are ISO-certified and recognized globally. Our certificates are accepted by employers in over 150 countries and meet international industry standards. Each certificate includes blockchain verification for authenticity.",
  },
  {
    question: "What kind of career support do you provide?",
    answer:
      "We offer comprehensive lifetime career support including resume building, LinkedIn optimization, interview preparation, salary negotiation coaching, and job placement assistance. Our career services team has relationships with 500+ hiring partners.",
  },
  {
    question: "Can I learn remotely or do I need to attend in person?",
    answer:
      "We offer both options! You can choose from fully online live classes, hybrid programs with some in-person sessions, or fully on-campus immersive experiences. All formats provide the same high-quality instruction and certification.",
  },
  {
    question: "What is your refund policy?",
    answer:
      "We offer a 14-day money-back guarantee. If you're not satisfied with the program within the first two weeks, you can request a full refund. After that, refunds are prorated based on course completion percentage according to our terms and conditions.",
  },
  {
    question: "Do you offer payment plans or financial assistance?",
    answer:
      "Yes! We offer flexible payment plans, income share agreements (pay after you get a job), scholarships for underrepresented groups, and partnerships with financing companies. Our admissions team can discuss options that work for your budget.",
  },
  {
    question: "Will I receive job placement after completing the program?",
    answer:
      "While we cannot guarantee job placement, 95% of our graduates secure employment within 6 months. We provide dedicated career support, connect you with our employer network, and offer unlimited interview preparation until you land your ideal role.",
  },
]

export function FAQSection() {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge className="mb-4">Have Questions?</Badge>
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
