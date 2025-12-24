import Link from "next/link"
import { GraduationCap, Facebook, Twitter, Linkedin, Instagram, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 font-semibold text-lg mb-4">
              <div className="flex items-center justify-center size-9 rounded-lg bg-primary text-primary-foreground">
                <GraduationCap className="size-5" />
              </div>
              <span>California Training Institute</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Empowering professionals with world-class digital skills certifications since 2010. Transform your career
              with internationally recognized programs.
            </p>

            {/* Newsletter */}
            {/* <div className="space-y-3">
              <div className="text-sm font-semibold">Subscribe to our newsletter</div>
              <div className="flex gap-2">
                <Input placeholder="Enter your email" type="email" className="flex-1" />
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Subscribe</Button>
              </div>
            </div> */}
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-semibold mb-4">Programs</h3>
            <ul className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <li>
                <p>Basic Digital Marketing</p>
              </li>
              <li>
                <p>Advanced Digital Marketing</p>
              </li>
              <li>
                <p>Digital Content Creation (DCC)</p>
              </li>
              <li>
                <p>Website Development</p>
              </li>
              <li>
                <p>Search Engine Optimization</p>
              </li>
              <li>
                <p>Social Media Management</p>
              </li>
              <li>
                <p>Digital Skills With 8 level</p>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Address</h3>
            <ul className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <li>
                <p>Bole Japon Embassy  Addis Ababa, Ethiopia</p>
              </li>
              {/* <li>
                <p>Addis Ababa, Ethiopia</p>
              </li> */}
              <li>
                <p>Phone: +251 923737373</p>
              </li>
              <li>
                Email: info@edu-cti.com
              </li>

            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-muted-foreground">
            © 2025 California Training Institute. All rights reserved.
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <Link
              href="https://web.facebook.com/californiatraininginstitute?_rdc=1&_rdr#"
              className="size-9 flex items-center justify-center rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Facebook className="size-4" />
            </Link>
            <Link
              href="https://x.com/edu_cti?s=20"
              className="size-9 flex items-center justify-center rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Twitter className="size-4" />
            </Link>
            <Link
              href="https://www.linkedin.com/company/california-training-institute-cti/about/"
              className="size-9 flex items-center justify-center rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Linkedin className="size-4" />
            </Link>
            <Link
              href="https://www.instagram.com/california_training_institute/"
              className="size-9 flex items-center justify-center rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Instagram className="size-4" />
            </Link>
            <Link
              href="https://www.youtube.com/@cti_edu"
              className="size-9 flex items-center justify-center rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Youtube className="size-4" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
