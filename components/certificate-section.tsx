import { Badge } from "@/components/ui/badge"
import { Medal as Seal, CheckCircle2, Globe, Award } from "lucide-react"

export function CertificateSection() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge className="mb-4">Official Recognition</Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
              Certificate of <span className="text-primary">Recognition</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Upon successful completion, you'll receive an internationally accredited certificate recognized by global
              employers.
            </p>
          </div>

          {/* Certificate Display */}
          <div className="relative">
            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 size-24 rounded-full bg-secondary/20 blur-2xl" />
            <div className="absolute -bottom-4 -right-4 size-32 rounded-full bg-primary/20 blur-2xl" />

            {/* Main Certificate Card */}
            <div className="relative bg-card border-4 border-primary/20 rounded-3xl p-8 md:p-12 shadow-2xl">
              {/* Seal */}
              <div className="absolute top-8 right-8">
                <div className="relative">
                  <Seal className="size-20 text-secondary fill-secondary/20" />
                  <Award className="absolute inset-0 size-20 text-primary/40" />
                </div>
              </div>

              {/* Content */}
              <div className="max-w-2xl">
                <div className="text-sm uppercase tracking-wider text-muted-foreground mb-4">
                  Certificate of Achievement
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
                  This certifies that the holder has successfully completed
                </h3>

                <div className="bg-muted/50 border-l-4 border-primary rounded-r-lg px-6 py-4 mb-8">
                  <div className="text-2xl font-bold text-primary">Professional Certification Program</div>
                  <div className="text-muted-foreground mt-1">California Training Institute</div>
                </div>

                {/* Features */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="size-5 text-primary shrink-0 mt-0.5" />
                    <div className="text-sm">
                      <div className="font-semibold">ISO-Certified</div>
                      <div className="text-muted-foreground">International standards compliance</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Globe className="size-5 text-primary shrink-0 mt-0.5" />
                    <div className="text-sm">
                      <div className="font-semibold">Globally Accepted</div>
                      <div className="text-muted-foreground">Recognized in 150+ countries</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Award className="size-5 text-primary shrink-0 mt-0.5" />
                    <div className="text-sm">
                      <div className="font-semibold">Verifiable</div>
                      <div className="text-muted-foreground">Digital blockchain verification</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="size-5 text-primary shrink-0 mt-0.5" />
                    <div className="text-sm">
                      <div className="font-semibold">Lifetime Valid</div>
                      <div className="text-muted-foreground">No expiration or renewal needed</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
