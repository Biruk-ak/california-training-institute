import { Badge } from "@/components/ui/badge"
import Image from "next/image"
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
              We Are incredibly honored to have teleco Excellence academy -texa present us with a certificate of recognition for our digital marketing training programs
            </p>
          </div>

          {/* Certificate Display */}
          <div className="relative">
            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 size-24 rounded-full bg-secondary/20 blur-2xl" />
            <div className="absolute -bottom-4 -right-4 size-32 rounded-full bg-primary/20 blur-2xl" />

            {/* Main Certificate Card */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl max-w-3xl mx-auto">
              <Image
                src="/certeficate/tele-certificate.webp"
                alt="Certificate of Recognition"
                width={700}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
