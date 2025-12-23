"use client"

import type React from "react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"

export function ContactSection() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted")
  }

  return (
    <section id="contact" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge className="mb-4">Get Started Today</Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Ready to transform your career? Reach out to our admissions team and we'll help you get started.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-card border rounded-2xl p-8 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="John" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Doe" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="john.doe@example.com" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="course">Course of Interest</Label>
                <Input id="course" placeholder="e.g., Full Stack Development" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Tell us about your goals and how we can help..." rows={5} />
              </div>

              <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our team is here to answer your questions and guide you through the enrollment process. We typically
                respond within 24 hours.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center size-12 rounded-lg bg-primary/10 text-primary shrink-0">
                  <Mail className="size-6" />
                </div>
                <div>
                  <div className="font-semibold mb-1">Email Us</div>
                  <a
                    href="mailto:admissions@cti.edu"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    admissions@cti.edu
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center size-12 rounded-lg bg-secondary/20 text-secondary-foreground shrink-0">
                  <Phone className="size-6" />
                </div>
                <div>
                  <div className="font-semibold mb-1">Call Us</div>
                  <a href="tel:+15551234567" className="text-muted-foreground hover:text-primary transition-colors">
                    +1 (555) 123-4567
                  </a>
                  <div className="text-sm text-muted-foreground mt-1">Mon-Fri, 9am-6pm PST</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center size-12 rounded-lg bg-primary/10 text-primary shrink-0">
                  <MapPin className="size-6" />
                </div>
                <div>
                  <div className="font-semibold mb-1">Visit Us</div>
                  <div className="text-muted-foreground">
                    123 Tech Avenue, Suite 400
                    <br />
                    San Francisco, CA 94105
                    <br />
                    United States
                  </div>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-accent/50 border rounded-xl p-6">
              <h4 className="font-semibold mb-3">Office Hours</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span className="font-medium text-foreground">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span className="font-medium text-foreground">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span className="font-medium text-foreground">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
