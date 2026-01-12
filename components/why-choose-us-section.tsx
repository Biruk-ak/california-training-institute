import { Badge } from "@/components/ui/badge"
import { GraduationCap, Users, Trophy, Briefcase, HeartHandshake, Zap } from "lucide-react"

const reasons = [
  {
    icon: GraduationCap,
    title: "Expert-Led Training",
    description: "Learn from industry professionals with 10+ years of real-world experience in leading tech companies.",
  },
  {
    icon: Trophy,
    title: "Proven Track Record",
    description: "98% of our graduates secure jobs within 6 months, with average salary increases of 45%.",
  },
  {
    icon: Users,
    title: "Hands-On Learning",
    description: "Build real-world projects and develop a professional portfolio that showcases your skills.",
  },
  {
    icon: Briefcase,
    title: "Career Support",
    description: "Get lifetime access to career counseling, interview prep, and job placement assistance.",
  },
  {
    icon: HeartHandshake,
    title: "Flexible Schedules",
    description: "Choose from full-time intensive programs or part-time evening and weekend classes.",
  },
  {
    icon: Zap,
    title: "Cutting-Edge Curriculum",
    description: "Stay ahead with continuously updated courses covering the latest technologies and industry trends.",
  },
]

export function WhyChooseUsSection() {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Why <span className="text-primary">Choose Us</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            We're not just a training institute—we're your partner in building a successful career in technology.
          </p>
        </div>

        {/* Reasons Grid - Story Blocks */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <div
                key={index}
                className="group relative bg-card border rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Decorative Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center size-14 rounded-xl bg-primary/10 text-primary mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="size-7" />
                  </div>

                  <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
                </div>

                {/* Number Badge */}
                <div className="absolute top-4 right-4 flex items-center justify-center size-8 rounded-full bg-secondary/20 text-secondary-foreground text-sm font-bold">
                  {index + 1}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
