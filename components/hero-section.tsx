import { Button } from "@/components/ui/button"
import { ArrowRight, Instagram, Facebook, Linkedin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function HeroSection() {
  const socialLinks = [
    {
      Icon: Instagram,
      href: "https://www.instagram.com/california_training_institute/"
    },
    {
      Icon: Linkedin,
      href: "https://www.linkedin.com/company/california-training-institute-cti/about/"
    },
    {
      Icon: Facebook,
      href: "https://web.facebook.com/californiatraininginstitute?_rdc=1&_rdr#"
    },
  ]

  return (
    <section className="bg-background py-6 md:py-12 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main Hero Card - Matching the Reference Image Structure */}
        <div className="relative rounded-[3rem] md:rounded-[5rem] overflow-hidden aspect-[16/8] md:aspect-[3/1] shadow-2xl bg-muted group">
          <Image
            src="/check.jpg"
            alt="Students learning digital skills at CTI"
            fill
            className="object-cover object-top"
            priority
          />

          {/* Top Overlay Gradient for readability if needed, but keeping it clean as requested */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

          {/* Center Logo Circle - Refined "Notch" Layout */}
          <div className="absolute inset-x-0 bottom-0 flex justify-center z-30 pointer-events-none">
            <div className="relative flex items-center justify-center">
              {/* Fluid Notch SVG - Creates a smooth, organic cutout effect */}
              <div className="absolute bottom-0 w-[240px] md:w-[400px] h-[80px] md:h-[140px] translate-y-[1px]">
                <svg
                  viewBox="0 0 400 140"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full text-white" // Using white directly to match light mode background
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 140H400V130C400 130 350 130 320 130C280 130 270 0 200 0C130 0 120 130 80 130C50 130 0 130 0 130V140Z"
                    fill="currentColor"
                  />
                </svg>
              </div>

              {/* The Circular Logo Badge - Positioned to fit the Notch */}
              <div className="relative z-[31] bg-black rounded-full w-28 h-28 md:w-44 md:h-44 flex items-center justify-center -translate-y-4 md:-translate-y-12 shadow-[0_20px_50px_rgba(0,0,0,0.4)] border-4 border-background cursor-pointer pointer-events-auto">
                <div className="absolute inset-0 rounded-full border-2 border-white/5 border-dashed animate-[spin_40s_linear_infinite]" />
                <div className="relative w-20 h-20 md:w-32 md:h-32">
                  <Image
                    src="/cti-pattern/fav.webp"
                    alt="CTI Global"
                    fill
                    className="object-contain p-2"
                  />
                </div>
                {/* Rotating Text Ring */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-full h-full animate-[spin_25s_linear_infinite] opacity-40">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <path id="logoCurve" d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" fill="transparent" />
                      <text className="text-[7.5px] fill-white font-bold uppercase tracking-[0.25em]">
                        <textPath xlinkHref="#logoCurve">CTI • California • Training • Institute • </textPath>
                      </text>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Left - Contact Us Button */}
          <div className="absolute bottom-8 left-8 md:bottom-16 md:left-16 z-20">
            <Button size="lg" className="rounded-full bg-white/20 backdrop-blur-xl text-white border border-white/30 hover:bg-white/40 px-8 py-7 md:px-12 md:py-9 text-base md:text-xl font-semibold transition-all group shadow-xl">
              Contact Us
              <div className="ml-3 bg-white text-black rounded-full p-2 group-hover:translate-x-1 transition-transform">
                <ArrowRight className="size-5" />
              </div>
            </Button>
          </div>

          {/* Bottom Right - Social Icons Overlay */}
          <div className="absolute bottom-8 right-8 md:bottom-16 md:right-16 flex gap-3 z-20">
            {socialLinks.map(({ Icon, href }, i) => (
              <Link
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-md rounded-full p-3 md:p-4 text-white border border-white/20 hover:bg-white/40 cursor-pointer transition-all hover:-translate-y-1 shadow-lg"
              >
                <Icon className="size-5 md:size-6" />
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Content Section - Text and Side Cards */}
        <div className="mt-8 md:mt-16 grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-20 items-end">
          {/* Left Side: Hero Text */}
          <div className="space-y-8">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.8] text-foreground">
              Innovating <br />
              Your Digital <br />
              <span className="text-primary italic relative">
                World
                <svg className="absolute -bottom-2 md:-bottom-4 left-0 w-full h-4 md:h-8 text-primary/30 -z-10" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path d="M0,10 Q25,0 50,10 T100,10" fill="none" stroke="currentColor" strokeWidth="4" />
                </svg>
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed font-medium">
              Join California Training Institute and gain industry-leading certifications that open doors to global opportunities in technology and digital innovation.
            </p>
          </div>

          {/* Right Side: Replaced Cards with Images */}
          <div className="grid grid-cols-2 gap-4 md:gap-8">
            <div className="relative group rounded-[2.5rem] md:rounded-[4rem] overflow-hidden aspect-[4/5] shadow-2xl transform lg:rotate-2 hover:rotate-0 transition-all duration-500 cursor-pointer">
              <Image
                src="/gradution/1.webp"
                alt="Professional Training"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white font-bold text-sm text-center">CERTIFIED EXCELLENCE</p>
              </div>
            </div>

            <div className="relative group rounded-[2.5rem] md:rounded-[4rem] overflow-hidden aspect-[4/5] shadow-2xl transform lg:-rotate-2 translate-y-8 md:translate-y-12 hover:rotate-0 transition-all duration-500 cursor-pointer">
              <Image
                src="/gradution/3.webp"
                alt="Digital Innovation"
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4 bg-primary/90 text-primary-foreground px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest shadow-lg">
                Tech Skills
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
