"use client"

import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const partners = [
  "/partners/a.webp",
  "/partners/b.webp",
  "/partners/c.webp",
  "/partners/d.webp",
  "/partners/e.webp",
  "/partners/f.webp",
  "/partners/g.webp",
  "/partners/h.webp",
  "/partners/i.webp",
]

export function PartnersSection() {
  return (
    <section className="py-20 lg:py-32 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Trusted by <span className="text-primary">Industry Leaders</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Our certification programs are recognized and valued by top technology companies worldwide.
          </p>
        </div>

        {/* Marquee Container */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-muted/30 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-muted/30 to-transparent z-10" />

          {/* Marquee */}
          <div className="overflow-hidden">
            <div className="flex gap-12 whitespace-nowrap animate-scroll hover:[animation-play-state:paused] w-max">
              {/* Duplicate for seamless loop */}
              {[...partners, ...partners].map((partner, index) => (
                <div
                  key={index}
                  className="inline-flex items-center justify-center px-8 py-6 bg-card border rounded-xl shadow-sm hover:shadow-md transition-shadow min-w-[220px] h-[120px]"
                >
                  <Image
                    src={partner}
                    alt={`Partner ${index + 1}`}
                    width={180}
                    height={80}
                    className="w-[180px] h-[120px] object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">500+</div>
            <div className="text-sm text-muted-foreground">Partner Companies</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">95%</div>
            <div className="text-sm text-muted-foreground">Employment Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">150+</div>
            <div className="text-sm text-muted-foreground">Countries</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">5000+</div>
            <div className="text-sm text-muted-foreground">Graduates</div>
          </div>
        </div>
      </div>
    </section>
  )
}
