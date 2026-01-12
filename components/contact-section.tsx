"use client"

import type React from "react"
import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Loader2, CheckCircle2, AlertCircle } from "lucide-react"

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus("idle")

    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData)

    try {
      // Using Web3Forms for simple email submission
      // Replace 'YOUR_ACCESS_KEY_HERE' with your actual access key from web3forms.com
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "YOUR_ACCESS_KEY_HERE", // User needs to get this from web3forms.com
          ...data,
          subject: `New Contact Form Submission from ${data.firstName} ${data.lastName}`,
          from_name: "CTI Website",
        }),
      })

      const result = await response.json()
      if (result.success) {
        setStatus("success")
          ; (e.target as HTMLFormElement).reset()
      } else {
        setStatus("error")
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
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
            {status === "success" ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 space-y-4">
                <div className="size-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle2 className="size-10" />
                </div>
                <h3 className="text-2xl font-bold">Message Sent!</h3>
                <p className="text-muted-foreground max-w-sm">
                  Thank you for reaching out. We've received your message and will get back to you at info@edu-cti.com
                  within 24 hours.
                </p>
                <Button variant="outline" onClick={() => setStatus("idle")} className="mt-6">
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" name="firstName" placeholder="John" required disabled={isSubmitting} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" name="lastName" placeholder="Doe" required disabled={isSubmitting} />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john.doe@example.com"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" name="phone" type="tel" placeholder="+1 (555) 000-0000" disabled={isSubmitting} />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="course">Course of Interest</Label>
                  <Input
                    id="course"
                    name="course"
                    placeholder="e.g., Full Stack Development"
                    disabled={isSubmitting}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your goals and how we can help..."
                    rows={5}
                    disabled={isSubmitting}
                    required
                  />
                </div>

                {status === "error" && (
                  <div className="flex items-center gap-2 text-destructive text-sm bg-destructive/10 p-3 rounded-lg">
                    <AlertCircle className="size-4" />
                    <span>Something went wrong. Please try again or email us directly.</span>
                  </div>
                )}

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
                <p className="text-xs text-center text-muted-foreground">
                  By clicking "Send Message", you agree to our privacy policy.
                </p>
              </form>
            )}
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
                    href="mailto:info@edu-cti.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    info@edu-cti.com
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
                    +251 92 373 7373
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center size-12 rounded-lg bg-primary/10 text-primary shrink-0">
                  <MapPin className="size-6" />
                </div>
                <div>
                  <div className="font-semibold mb-1">Visit Us</div>
                  <div className="text-muted-foreground">
                    Bole Japon Embassy
                    <br />
                    Addis Ababa, Ethiopia
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
