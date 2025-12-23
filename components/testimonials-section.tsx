"use client"

import { Badge } from "@/components/ui/badge"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Quote, Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Senior Developer at Microsoft",
    course: "Full Stack Development",
    quote:
      "CTI transformed my career completely. The hands-on projects and expert guidance helped me land my dream job at Microsoft. The investment was absolutely worth it.",
    rating: 5,
    image: "/testimonial-sarah-professional-developer.jpg",
  },
  {
    name: "Michael Chen",
    role: "Data Scientist at Amazon",
    course: "Data Science & Analytics",
    quote:
      "The curriculum is incredibly comprehensive and up-to-date. My instructors had real industry experience and provided invaluable insights that I use every day.",
    rating: 5,
    image: "/testimonial-michael-data-scientist.jpg",
  },
  {
    name: "Emily Rodriguez",
    role: "Cloud Architect at IBM",
    course: "Cloud Architecture",
    quote:
      "Best decision I ever made for my career. The certification opened doors I didn't even know existed. Within 3 months of graduation, I had multiple job offers.",
    rating: 5,
    image: "/testimonial-emily-cloud-architect.jpg",
  },
  {
    name: "David Kim",
    role: "Mobile Developer at Google",
    course: "Mobile App Development",
    quote:
      "What sets CTI apart is the community and ongoing support. Even after graduation, I still reach out to my instructors and network with fellow alumni.",
    rating: 5,
    image: "/testimonial-david-mobile-developer.jpg",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge className="mb-4">Success Stories</Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            What Our <span className="text-primary">Graduates Say</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Join thousands of successful professionals who transformed their careers with CTI.
          </p>
        </div>

        {/* Carousel */}
        <div className="max-w-5xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                  <div className="h-full p-1">
                    <div className="relative bg-card border rounded-2xl p-8 shadow-sm h-full flex flex-col">
                      {/* Quote Icon */}
                      <Quote className="size-12 text-primary/20 mb-4" />

                      {/* Rating */}
                      <div className="flex gap-1 mb-4">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star key={i} className="size-5 fill-secondary text-secondary" />
                        ))}
                      </div>

                      {/* Quote */}
                      <p className="text-lg leading-relaxed mb-6 flex-1">{testimonial.quote}</p>

                      {/* Author */}
                      <div className="flex items-center gap-4 pt-4 border-t">
                        <div className="size-14 rounded-full bg-primary/10 overflow-hidden shrink-0">
                          <img
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <div className="font-semibold">{testimonial.name}</div>
                          <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                          <div className="text-xs text-primary mt-1">{testimonial.course}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-12" />
            <CarouselNext className="-right-12" />
          </Carousel>
        </div>
      </div>
    </section>
  )
}
