import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                About Webensol
              </h1>
              <p className="mx-auto max-w-[700px] text-zinc-500 md:text-xl">
                We're a team of passionate software developers dedicated to creating custom B2B solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="w-full py-12 md:py-24 bg-zinc-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Our Mission & Values</h2>
              <p className="text-zinc-500 md:text-lg">
                At Webensol, our mission is to empower businesses through innovative software solutions that solve real
                problems and drive growth.
              </p>
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Excellence</h3>
                  <p className="text-zinc-500">
                    We strive for excellence in everything we do, from code quality to client communication.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Innovation</h3>
                  <p className="text-zinc-500">
                    We embrace new technologies and approaches to deliver cutting-edge solutions.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Partnership</h3>
                  <p className="text-zinc-500">
                    We build long-term relationships with our clients based on trust and mutual success.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Integrity</h3>
                  <p className="text-zinc-500">
                    We operate with transparency and honesty in all our business dealings.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=400&width=600" alt="Webensol team" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Our Process</h2>
              <p className="mx-auto max-w-[700px] text-zinc-500 md:text-lg">
                We follow a structured approach to ensure successful project delivery.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-100 text-zinc-900 font-bold text-xl">
                1
              </div>
              <h3 className="text-xl font-bold">Discovery</h3>
              <p className="text-zinc-500">We start by understanding your business needs and project requirements.</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-100 text-zinc-900 font-bold text-xl">
                2
              </div>
              <h3 className="text-xl font-bold">Planning</h3>
              <p className="text-zinc-500">We create a detailed project plan with timelines and deliverables.</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-100 text-zinc-900 font-bold text-xl">
                3
              </div>
              <h3 className="text-xl font-bold">Development</h3>
              <p className="text-zinc-500">Our team builds your solution with regular updates and feedback.</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-100 text-zinc-900 font-bold text-xl">
                4
              </div>
              <h3 className="text-xl font-bold">Delivery & Support</h3>
              <p className="text-zinc-500">We deploy your solution and provide ongoing maintenance and support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Help */}
      <section className="w-full py-12 md:py-24 bg-zinc-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Who We Help</h2>
              <p className="mx-auto max-w-[700px] text-zinc-500 md:text-lg">
                We work with businesses of all sizes across various industries.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <Card className="border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Startups</h3>
                  <p className="text-zinc-500">
                    We help startups build scalable software solutions that support rapid growth and changing
                    requirements.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-zinc-900 mt-0.5" />
                      <span>MVP development</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-zinc-900 mt-0.5" />
                      <span>Scalable architecture</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-zinc-900 mt-0.5" />
                      <span>Flexible development approach</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">SMBs</h3>
                  <p className="text-zinc-500">
                    We provide small and medium businesses with custom software that streamlines operations and
                    increases efficiency.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-zinc-900 mt-0.5" />
                      <span>Process automation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-zinc-900 mt-0.5" />
                      <span>Integration with existing systems</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-zinc-900 mt-0.5" />
                      <span>Cost-effective solutions</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Enterprises</h3>
                  <p className="text-zinc-500">
                    We develop enterprise-grade solutions that handle complex business processes and large-scale
                    operations.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-zinc-900 mt-0.5" />
                      <span>Complex system integration</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-zinc-900 mt-0.5" />
                      <span>High-performance solutions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-zinc-900 mt-0.5" />
                      <span>Robust security measures</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Ready to Work With Us?</h2>
              <p className="mx-auto max-w-[700px] text-zinc-500 md:text-lg">
                Contact us today to discuss your project requirements and how we can help you achieve your business
                goals.
              </p>
            </div>
            <div className="space-x-4">
              <Link href="/contact">
                <Button className="bg-zinc-900 text-white hover:bg-zinc-800">
                  Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
