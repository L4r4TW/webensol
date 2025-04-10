import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function ServicesPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Our Services
              </h1>
              <p className="mx-auto max-w-[700px] text-zinc-500 md:text-xl">
                We offer a comprehensive range of software development services tailored to your business needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-12 md:py-24 bg-zinc-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="border-0 shadow-sm overflow-hidden">
              <div className="relative h-[200px]">
                <Image
                  src="/placeholder.svg?height=200&width=500"
                  alt="CRM/ERP Development"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold">CRM/ERP Development</h2>
                  <p className="text-zinc-500">
                    Custom systems to manage your customer relationships and business operations efficiently.
                  </p>
                  <ul className="space-y-1 text-zinc-500">
                    <li>• Customer relationship management</li>
                    <li>• Enterprise resource planning</li>
                    <li>• Business process automation</li>
                    <li>• Data integration and analytics</li>
                  </ul>
                  <div className="pt-4">
                    <Link href="/services/crm-erp">
                      <Button className="bg-zinc-900 text-white hover:bg-zinc-800">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm overflow-hidden">
              <div className="relative h-[200px]">
                <Image src="/placeholder.svg?height=200&width=500" alt="SaaS Platforms" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold">SaaS Platforms</h2>
                  <p className="text-zinc-500">Scalable cloud-based software solutions that grow with your business.</p>
                  <ul className="space-y-1 text-zinc-500">
                    <li>• Multi-tenant architecture</li>
                    <li>• Subscription management</li>
                    <li>• Cloud infrastructure</li>
                    <li>• API development and integration</li>
                  </ul>
                  <div className="pt-4">
                    <Link href="/services/saas">
                      <Button className="bg-zinc-900 text-white hover:bg-zinc-800">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm overflow-hidden">
              <div className="relative h-[200px]">
                <Image
                  src="/placeholder.svg?height=200&width=500"
                  alt="Webshop Systems"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold">Webshop Systems</h2>
                  <p className="text-zinc-500">Custom e-commerce solutions designed to enhance your online sales.</p>
                  <ul className="space-y-1 text-zinc-500">
                    <li>• Custom shopping experiences</li>
                    <li>• Payment gateway integration</li>
                    <li>• Inventory management</li>
                    <li>• Order processing automation</li>
                  </ul>
                  <div className="pt-4">
                    <Link href="/services/webshop">
                      <Button className="bg-zinc-900 text-white hover:bg-zinc-800">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm overflow-hidden">
              <div className="relative h-[200px]">
                <Image src="/placeholder.svg?height=200&width=500" alt="IT Consulting" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold">IT Consulting</h2>
                  <p className="text-zinc-500">Expert advice on technology strategy and implementation.</p>
                  <ul className="space-y-1 text-zinc-500">
                    <li>• Technology assessment</li>
                    <li>• Digital transformation</li>
                    <li>• IT strategy development</li>
                    <li>• System architecture design</li>
                  </ul>
                  <div className="pt-4">
                    <Link href="/services/consulting">
                      <Button className="bg-zinc-900 text-white hover:bg-zinc-800">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
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
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Ready to Get Started?</h2>
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
