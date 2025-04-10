import { Mail, MapPin, Phone } from "lucide-react"

import { ContactForm } from "@/components/contact-form"

export default function ContactPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Contact Us
              </h1>
              <p className="mx-auto max-w-[700px] text-zinc-500 md:text-xl">
                Get in touch with our team to discuss your project requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information and Form */}
      <section className="w-full py-12 md:py-24 bg-zinc-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Get in Touch</h2>
                <p className="text-zinc-500 md:text-lg">
                  We'd love to hear from you. Fill out the form and we'll get back to you as soon as possible.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-zinc-900 mt-0.5" />
                  <div className="space-y-1">
                    <h3 className="font-medium">Address</h3>
                    <p className="text-zinc-500">123 Business Street, 10000 City, Country</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-zinc-900 mt-0.5" />
                  <div className="space-y-1">
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-zinc-500">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-zinc-900 mt-0.5" />
                  <div className="space-y-1">
                    <h3 className="font-medium">Email</h3>
                    <p className="text-zinc-500">info@webensol.com</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Company Information</h3>
                <div className="space-y-2">
                  <p className="text-zinc-500">
                    <span className="font-medium">Company Name:</span> Webensol
                  </p>
                  <p className="text-zinc-500">
                    <span className="font-medium">Tax ID:</span> 123456789
                  </p>
                  <p className="text-zinc-500">
                    <span className="font-medium">Registration Number:</span> 987654321
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Our Location</h2>
              <p className="mx-auto max-w-[700px] text-zinc-500 md:text-lg">
                Visit us at our office or get in touch online.
              </p>
            </div>
          </div>
          <div className="mt-8 h-[400px] w-full overflow-hidden rounded-lg bg-zinc-100">
            {/* This would be replaced with an actual map component */}
            <div className="flex h-full items-center justify-center">
              <p className="text-zinc-500">Map would be displayed here</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
