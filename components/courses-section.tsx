import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Code, Database, Cloud, Smartphone, ArrowRight, Clock, Award } from "lucide-react"

const courses = [
  {
    icon: Code,
    title: "Full Stack Development",
    description: "Master modern web development with React, Node.js, and advanced frameworks.",
    duration: "16 Weeks",
    level: "Professional",
    color: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  },
  {
    icon: Database,
    title: "Data Science & Analytics",
    description: "Learn Python, machine learning, and data visualization for business insights.",
    duration: "20 Weeks",
    level: "Advanced",
    color: "bg-green-500/10 text-green-600 dark:text-green-400",
  },
  {
    icon: Cloud,
    title: "Cloud Architecture (AWS/Azure)",
    description: "Design and deploy scalable cloud solutions with industry-leading platforms.",
    duration: "12 Weeks",
    level: "Professional",
    color: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Build cross-platform apps with React Native and Flutter for iOS & Android.",
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
