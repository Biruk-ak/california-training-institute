"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Award, TrendingUp, Users, Globe } from "lucide-react"
import { useState, useEffect } from "react"

const images = [
  "/gradution/1.webp",
  "/gradution/2.webp",
  "/gradution/3.webp",
  "/gradution/4.webp",
  "/gradution/5.webp",
]

export function GetCertifiedSection() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 4000) // Change image every 4 seconds
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="about" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image with Offset Cards */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[500px]">
              {images.map((src, index) => (
                <img
                  key={src}
                  src={src}
                  alt={`CTI Certification Ceremony ${index + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentImage ? "opacity-100" : "opacity-0"
                    }`}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent z-10" />
            </div>

            {/* Floating Credential Card */}
            <div className="absolute -top-6 -right-6 bg-card border shadow-lg rounded-xl p-6 backdrop-blur-sm">
              {/* <Award className="size-10 text-secondary mb-3" /> */}
              <div className="text-sm font-semibold mb-1">Globally Recognized</div>
              <div className="text-xs text-muted-foreground">ISO-certified programs accepted worldwide</div>
            </div>

            {/* Bottom Achievement Badge */}
            <div className="absolute -bottom-10 -left-6 z-20 bg-card border shadow-lg bg-secondary text-secondary-foreground rounded-xl p-6 backdrop-blur-sm">
              {/* //absolute bottom-1 left-6 z-20 bg-secondary text-secondary-foreground rounded-xl px-6 py-4 shadow-lg*/}
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
