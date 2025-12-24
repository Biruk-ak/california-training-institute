import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Award, TrendingUp, Users, Globe } from "lucide-react"

export function GetCertifiedSection() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image with Offset Cards */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/certification-ceremony-professional-graduates.jpg"
                alt="CTI Certification Ceremony"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            </div>

            {/* Floating Credential Card */}
            <div className="absolute -right-6 top-1/2 -translate-y-1/2 bg-card border shadow-2xl rounded-xl p-6 max-w-[220px]">
              {/* <Award className="size-10 text-secondary mb-3" /> */}
              <div className="text-sm font-semibold mb-1">Globally Recognized</div>
              <div className="text-xs text-muted-foreground">ISO-certified programs accepted worldwide</div>
            </div>

            {/* Bottom Achievement Badge */}
            <div className="absolute -bottom-6 left-6 bg-secondary text-secondary-foreground rounded-xl px-6 py-4 shadow-lg">
              <div className="flex items-center gap-3">
                <TrendingUp className="size-8" />
                <div>
                  <div className="text-2xl font-bold">100%</div>
                  <div className="text-sm">Career Growth</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6 order-1 lg:order-2">
            <Badge className="w-fit">Career Transformation</Badge>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-balance">
              Get Certified &<br />
              <span className="text-primary">Boost Your Career</span>
            </h2>

            <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
              California Training Institute empowers professionals with industry-recognized certifications that open
              doors to global opportunities. Our comprehensive programs are designed by experts and trusted by leading
              employers worldwide.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 pt-4">
              <div className="flex gap-4">
                <div className="flex items-center justify-center size-12 rounded-lg bg-primary/10 text-primary shrink-0">
                  <Users className="size-6" />
                </div>
                <div>
                  <div className="font-semibold mb-1">Expert Instructors</div>
                  <div className="text-sm text-muted-foreground">Learn from industry veterans</div>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex items-center justify-center size-12 rounded-lg bg-secondary/20 text-secondary-foreground shrink-0">
                  <Globe className="size-6" />
                </div>
                <div>
                  <div className="font-semibold mb-1">Global Recognition</div>
                  <div className="text-sm text-muted-foreground">Certificates accepted worldwide</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                View All Programs
              </Button>
              <Button size="lg" variant="outline">
                Talk to Advisor
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
