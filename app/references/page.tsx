import Link from "next/link"
import { ArrowRight, CheckCircle, Code, Database, Globe, Server } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function ReferencesPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Our References
              </h1>
              <p className="mx-auto max-w-[700px] text-zinc-500 md:text-xl">
                Discover the industries we've worked with and the technologies we use to deliver exceptional software
                solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="w-full py-12 md:py-24 bg-zinc-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Industries We Serve</h2>
              <p className="mx-auto max-w-[700px] text-zinc-500 md:text-lg">
                We've helped businesses across various industries streamline their operations and achieve their goals.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <Card className="border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Manufacturing</h3>
                  <p className="text-zinc-500">
                    We've helped manufacturing companies optimize their production processes and supply chain
                    management.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-zinc-900 mt-0.5" />
                      <span>Inventory management systems</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-zinc-900 mt-0.5" />
                      <span>Production planning software</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-zinc-900 mt-0.5" />
                      <span>Quality control applications</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Retail & E-commerce</h3>
                  <p className="text-zinc-500">
                    We've developed custom e-commerce solutions and retail management systems.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-zinc-900 mt-0.5" />
                      <span>Custom webshop platforms</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-zinc-900 mt-0.5" />
                      <span>Inventory and order management</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-zinc-900 mt-0.5" />
                      <span>Customer loyalty systems</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Healthcare</h3>
                  <p className="text-zinc-500">We've created secure and compliant healthcare management solutions.</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-zinc-900 mt-0.5" />
                      <span>Patient management systems</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-zinc-900 mt-0.5" />
                      <span>Appointment scheduling</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-zinc-900 mt-0.5" />
                      <span>Medical record management</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Finance</h3>
                  <p className="text-zinc-500">We've built secure financial management and reporting systems.</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-zinc-900 mt-0.5" />
                      <span>Financial reporting tools</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-zinc-900 mt-0.5" />
                      <span>Expense management systems</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-zinc-900 mt-0.5" />
                      <span>Billing and invoicing solutions</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Logistics</h3>
                  <p className="text-zinc-500">We've developed logistics and supply chain management solutions.</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-zinc-900 mt-0.5" />
                      <span>Route optimization systems</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-zinc-900 mt-0.5" />
                      <span>Warehouse management</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-zinc-900 mt-0.5" />
                      <span>Shipment tracking applications</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Education</h3>
                  <p className="text-zinc-500">We've created learning management systems and educational platforms.</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-zinc-900 mt-0.5" />
                      <span>Learning management systems</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-zinc-900 mt-0.5" />
                      <span>Student information systems</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-zinc-900 mt-0.5" />
                      <span>Online assessment tools</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Technologies We Use</h2>
              <p className="mx-auto max-w-[700px] text-zinc-500 md:text-lg">
                We leverage modern technologies to build robust, scalable, and maintainable software solutions.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="p-3 rounded-full bg-zinc-100">
                <Code className="h-6 w-6 text-zinc-900" />
              </div>
              <h3 className="text-xl font-bold">Frontend</h3>
              <p className="text-zinc-500">React, Angular, Vue.js, Next.js, TypeScript, Tailwind CSS</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="p-3 rounded-full bg-zinc-100">
                <Server className="h-6 w-6 text-zinc-900" />
              </div>
              <h3 className="text-xl font-bold">Backend</h3>
              <p className="text-zinc-500">Node.js, .NET, Java, Python, PHP, Ruby on Rails</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="p-3 rounded-full bg-zinc-100">
                <Database className="h-6 w-6 text-zinc-900" />
              </div>
              <h3 className="text-xl font-bold">Databases</h3>
              <p className="text-zinc-500">PostgreSQL, MySQL, MongoDB, Redis, Microsoft SQL Server</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="p-3 rounded-full bg-zinc-100">
                <Globe className="h-6 w-6 text-zinc-900" />
              </div>
              <h3 className="text-xl font-bold">Cloud & DevOps</h3>
              <p className="text-zinc-500">AWS, Azure, Google Cloud, Docker, Kubernetes, CI/CD</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="w-full py-12 md:py-24 bg-zinc-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Ready to Start Your Project?</h2>
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
