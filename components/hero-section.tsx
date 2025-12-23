import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle2 } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-accent/20 to-background py-20 lg:py-32">
      {/* Decorative Background Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <Badge className="w-fit">Internationally Recognized Certifications</Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
              Transform Your Future with <span className="text-primary">Digital Skills</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground text-pretty">
              Join California Training Institute and gain industry-leading certifications that open doors to global
              opportunities in technology and digital innovation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Explore Courses
                <ArrowRight className="ml-2 size-4" />
              </Button>
              <Button size="lg" variant="outline">
                Download Brochure
              </Button>
            </div>

            <div className="flex flex-col gap-3 pt-4">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-5 text-primary shrink-0" />
                <span className="text-sm">Industry-recognized certifications</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-5 text-primary shrink-0" />
                <span className="text-sm">Expert instructors with real-world experience</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-5 text-primary shrink-0" />
                <span className="text-sm">Flexible learning schedules</span>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="relative aspect-square rounded-2xl overflow-hidden border-8 border-primary/10 shadow-2xl">
              <img
                src="/professional-students-learning-digital-skills-in-m.jpg"
                alt="Students learning at CTI"
                className="object-cover w-full h-full"
              />
            </div>

            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -left-6 bg-card border shadow-lg rounded-xl p-6 backdrop-blur-sm">
              <div className="text-3xl font-bold text-primary">5,000+</div>
              <div className="text-sm text-muted-foreground">Certified Graduates</div>
            </div>

            <div className="absolute -top-6 -right-6 bg-card border shadow-lg rounded-xl p-6 backdrop-blur-sm">
              <div className="text-3xl font-bold text-secondary">98%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
