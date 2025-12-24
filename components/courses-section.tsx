import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Code, Database, Cloud, Smartphone, ArrowRight, Clock, Award } from "lucide-react"

const courses = [
  {
    icon: Code,
    title: "Basic Digital Marketing",
    description: "Detailed program of digital techniques that enable you to make the most of all available tools and develop the best strategies to meet your marketing goals.",
    duration: "16 Weeks",
    level: "Professional",
    color: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  },
  {
    icon: Database,
    title: "Advanced Digital Marketing",
    description: "The Advanced Digital Marketing Course will give you everything you need to succeed in the corporate world of marketing and advertising. On completion of this course, you will be able to develop and execute a solid digital marketing strategy.",
    duration: "20 Weeks",
    level: "Advanced",
    color: "bg-green-500/10 text-green-600 dark:text-green-400",
  },
  {
    icon: Cloud,
    title: "Search Engine Optimization",
    description: "Focuses on optimizing website content and structure to enhance visibility in search engine results, emphasizing keyword research, on-page optimization, and link building strategies.",
    duration: "12 Weeks",
    level: "Professional",
    color: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
  },
  {
    icon: Smartphone,
    title: "Digital Skills With 8 level",
    description: "Offers a comprehensive program covering various digital competencies, progressing from foundational concepts like computer literacy and internet basics to advanced skills such as coding, digital marketing, and data analytics.",
    duration: "14 Weeks",
    level: "Intermediate",
    color: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
  },
  {
    icon: Smartphone,
    title: "Digital Content Creation (DCC)",
    description: "Teaches skills and strategies for crafting compelling digital content, including writing, graphic design, video production, and multimedia storytelling, to engage and resonate with target audiences effectively.",
    duration: "14 Weeks",
    level: "Intermediate",
    color: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
  },
]

export function CoursesSection() {
  return (
    <section id="courses" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge className="mb-4">Comprehensive Programs</Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
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
              const Icon = course.icon
              const isEven = index % 2 === 0

              return (
                <div key={index} className="relative">
                  {/* Timeline Dot */}
                  <div className="hidden lg:block absolute left-1/2 top-8 size-4 rounded-full bg-primary border-4 border-background -translate-x-1/2 z-10" />

                  {/* Course Card - Alternating Layout */}
                  <div className={`lg:w-[calc(50%-2rem)] ${isEven ? "lg:mr-auto lg:pr-12" : "lg:ml-auto lg:pl-12"}`}>
                    <div className="group bg-card border rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      {/* Icon */}
                      <div
                        className={`inline-flex items-center justify-center size-16 rounded-xl ${course.color} mb-6`}
                      >
                        <Icon className="size-8" />
                      </div>

                      <h3 className="text-2xl font-bold mb-3">{course.title}</h3>
                      <p className="text-muted-foreground mb-6">{course.description}</p>

                      {/* Course Meta */}
                      <div className="flex items-center gap-6 mb-6 text-sm">
                        <div className="flex items-center gap-2">
                          <Clock className="size-4 text-muted-foreground" />
                          <span>{course.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Award className="size-4 text-muted-foreground" />
                          <span>{course.level}</span>
                        </div>
                      </div>

                      <Button className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        Learn More
                        <ArrowRight className="ml-2 size-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button size="lg" variant="outline">
            View Full Course Catalog
          </Button>
        </div>
      </div>
    </section>
  )
}
