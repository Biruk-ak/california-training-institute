import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Code, Database, Cloud, Smartphone, ArrowRight, Clock, Award } from "lucide-react"
import Image from "next/image"

const courses = [
  {
    icon: Code,
    title: "Basic Digital Marketing",
    description: "Detailed program of digital techniques that enable you to make the most of all available tools and develop the best strategies to meet your marketing goals.",
    duration: "4 Weeks",
    level: "Professional",
    color: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    image: "/courseimage/marketing.webp",
  },
  {
    icon: Database,
    title: "Advanced Digital Marketing",
    description: "The Advanced Digital Marketing Course will give you everything you need to succeed in the corporate world of marketing and advertising. On completion of this course, you will be able to develop and execute a solid digital marketing strategy.",
    duration: "4-6 Weeks",
    level: "Advanced",
    color: "bg-green-500/10 text-green-600 dark:text-green-400",
    image: "/courseimage/socailmed.webp",
  },
  {
    icon: Cloud,
    title: "Search Engine Optimization",
    description: "Focuses on optimizing website content and structure to enhance visibility in search engine results, emphasizing keyword research, on-page optimization, and link building strategies.",
    duration: "4 Weeks",
    level: "Professional",
    color: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
    image: "/courseimage/seo.webp",
  },
  {
    icon: Smartphone,
    title: "Digital Content Creation (DCC)",
    description: "Teaches skills and strategies for crafting compelling digital content, including writing, graphic design, video production, and multimedia storytelling, to engage and resonate with target audiences effectively.",
    duration: "4 Weeks",
    level: "Intermediate",
    color: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
    image: "/courseimage/dcc.webp",
  },
]

export function CoursesSection() {
  return (
    <section id="courses" className="py-20 lg:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* Decorative Brand Image - Aligned to the end (right) */}
        <div className="hidden lg:block absolute top-0 -right-20 w-64 h-64 pointer-events-none select-none z-0">
          <Image
            src="/cti-pattern/text.png"
            alt=""
            fill
            className="object-contain -rotate-[90deg] opacity-100"
          />
        </div>

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 relative">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance relative z-20">
            Our <span className="text-primary">Certification Courses</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Choose from industry-leading programs designed to accelerate your career in technology and digital
            innovation.
          </p>
        </div>

        {/* Course Timeline/Stacked Layout */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />

          <div className="space-y-12">
            {courses.map((course, index) => {
              // 1. Initial Alternating Card Side (0:Left, 1:Right, 2:Left, 3:Right)
              const isLeftCard = index % 2 === 0
              const cardSide = isLeftCard ? "left" : "right"

              // 2. Pattern configuration (Placed in white space opposite to card)
              const patternSide = isLeftCard ? "right" : "left"

              // Light mode patterns: Alternate p2 and 3
              const lightPattern = index % 2 === 0 ? "/cti-pattern/p2.png" : "/cti-pattern/3.png"
              // Dark mode patterns: Alternate p1 and p2 (replaces 3.png with p1.png)
              const darkPattern = index % 2 === 0 ? "/cti-pattern/p1.png" : "/cti-pattern/p2.png"

              return (
                <div key={index} className="relative">
                  {/* Background Patterns - Different for Light and Dark Modes */}
                  <div className={`hidden lg:flex absolute inset-y-0 w-1/2 items-center justify-center z-0 pointer-events-none transition-all duration-1000
                    ${patternSide === "left" ? "left-0" : "right-0"}`}>
                    <div className="relative w-full h-80 animate-pulse-slow">
                      {/* Light Mode Pattern */}
                      <Image
                        src={lightPattern}
                        alt=""
                        fill
                        className="object-contain opacity-100 dark:hidden"
                      />
                      {/* Dark Mode Pattern */}
                      <Image
                        src={darkPattern}
                        alt=""
                        fill
                        className="object-contain hidden dark:block opacity-100"
                      />
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="hidden lg:block absolute left-1/2 top-8 size-4 rounded-full bg-primary border-4 border-background -translate-x-1/2 z-10" />

                  {/* Course Card - Alternating Layout */}
                  <div className={`relative z-10 lg:w-[calc(50%-2rem)] ${isLeftCard ? "lg:mr-auto lg:pr-12" : "lg:ml-auto lg:pl-12"}`}>
                    <div className="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-2 border border-white/10">
                      {/* Background Image - Naturally Defines Card Size */}
                      <Image
                        src={course.image}
                        alt={course.title}
                        width={800}
                        height={600}
                        className="w-full h-auto block transition-transform duration-700 group-hover:scale-105"
                      />

                      {/* Dark Gradient Overlay for Text Readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />

                      {/* Content Overlay */}
                      <div className="absolute inset-0 p-6 lg:p-10 flex flex-col justify-end text-white">
                        <Badge className="w-fit mb-4 bg-primary/90 text-white border-none backdrop-blur-md px-4 py-1.5 text-xs font-semibold uppercase tracking-wider">
                          {course.level}
                        </Badge>
                        <h3 className="text-2xl lg:text-4xl font-black mb-4 tracking-tight drop-shadow-2xl leading-none">{course.title}</h3>

                        <div className="flex items-center justify-between mt-auto">
                          <div className="flex items-center gap-6">
                            <div className="flex items-center gap-2.5 text-sm lg:text-base font-bold text-white/90">
                              <Clock className="size-5" />
                              <span>{course.duration}</span>
                            </div>
                          </div>
                          <Button size="lg" className="rounded-full bg-white text-black hover:bg-primary hover:text-white transition-all font-bold px-8 shadow-xl hover:shadow-primary/50">
                            view More
                            <ArrowRight className="ml-2 size-5" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all">
            View Full Course Catalog
          </Button>
        </div>
      </div>
    </section>
  )
}
