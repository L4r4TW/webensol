import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ContactForm } from "@/components/contact-form"

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Custom Software Solutions for Your Business
              </h1>
              <p className="mx-auto max-w-[700px] text-zinc-500 md:text-xl">
                We build tailored B2B systems that transform how your business operates.
              </p>
            </div>
            <div className="space-x-4">
              <Link href="#contact">
                <Button className="bg-zinc-900 text-white hover:bg-zinc-800">
                  Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline">Explore Our Services</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Company Intro */}
      <section className="w-full py-12 md:py-24 bg-zinc-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">About Webensol</h2>
              <p className="text-zinc-500 md:text-lg">
                Webensol is a professional software development company specializing in creating custom B2B solutions.
                We focus on understanding your business challenges and delivering software that solves real problems.
              </p>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-zinc-900" />
                  <span>10+ years of industry experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-zinc-900" />
                  <span>Dedicated team of expert developers</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-zinc-900" />
                  <span>Transparent communication and process</span>
                </div>
              </div>
              <div>
                <Link href="/about">
                  <Button variant="link" className="p-0 text-zinc-900">
                    Learn more about us <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative h-[300px] lg:h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Webensol team working"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Our Services</h2>
              <p className="mx-auto max-w-[700px] text-zinc-500 md:text-lg">
                We offer a comprehensive range of software development services tailored to your business needs.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">CRM/ERP Development</h3>
                  <p className="text-zinc-500">
                    Custom systems to manage your customer relationships and business operations efficiently.
                  </p>
                  <Link href="/services/crm-erp">
                    <Button variant="link" className="p-0 text-zinc-900">
                      Learn more <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">SaaS Platforms</h3>
                  <p className="text-zinc-500">Scalable cloud-based software solutions that grow with your business.</p>
                  <Link href="/services/saas">
                    <Button variant="link" className="p-0 text-zinc-900">
                      Learn more <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Webshop Systems</h3>
                  <p className="text-zinc-500">Custom e-commerce solutions designed to enhance your online sales.</p>
                  <Link href="/services/webshop">
                    <Button variant="link" className="p-0 text-zinc-900">
                      Learn more <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">IT Consulting</h3>
                  <p className="text-zinc-500">Expert advice on technology strategy and implementation.</p>
                  <Link href="/services/consulting">
                    <Button variant="link" className="p-0 text-zinc-900">
                      Learn more <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="w-full py-12 md:py-24 bg-zinc-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Why Choose Us</h2>
              <p className="mx-auto max-w-[700px] text-zinc-500 md:text-lg">
                We're committed to delivering exceptional software solutions that drive real business value.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="p-3 rounded-full bg-zinc-100">
                <CheckCircle className="h-6 w-6 text-zinc-900" />
              </div>
              <h3 className="text-xl font-bold">Tailored Solutions</h3>
              <p className="text-zinc-500">We create custom software that perfectly fits your business requirements.</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="p-3 rounded-full bg-zinc-100">
                <CheckCircle className="h-6 w-6 text-zinc-900" />
              </div>
              <h3 className="text-xl font-bold">Expert Team</h3>
              <p className="text-zinc-500">
                Our developers bring years of experience and technical expertise to every project.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="p-3 rounded-full bg-zinc-100">
                <CheckCircle className="h-6 w-6 text-zinc-900" />
              </div>
              <h3 className="text-xl font-bold">Transparent Process</h3>
              <p className="text-zinc-500">
                We keep you informed at every stage of development with clear communication.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="p-3 rounded-full bg-zinc-100">
                <CheckCircle className="h-6 w-6 text-zinc-900" />
              </div>
              <h3 className="text-xl font-bold">Long-term Support</h3>
              <p className="text-zinc-500">
                We don't just build and leave – we provide ongoing maintenance and support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Get in Touch</h2>
              <p className="text-zinc-500 md:text-lg">
                Ready to discuss your project? Fill out the form and we'll get back to you within 24 hours.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-zinc-900" />
                  <span>Free initial consultation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-zinc-900" />
                  <span>No obligation quote</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-zinc-900" />
                  <span>Tailored approach to your needs</span>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
