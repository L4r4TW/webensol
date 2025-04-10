export async function generateStaticParams() {
  return Object.keys(services).map((slug) => ({ slug }));
}

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle } from "lucide-react";
import { notFound } from "next/navigation";

import { Button } from "@/components/ui/button";

// Define the service data
const services = {
  "crm-erp": {
    title: "CRM/ERP Development",
    description:
      "Custom systems to manage your customer relationships and business operations efficiently.",
    image: "/placeholder.svg?height=400&width=800",
    features: [
      "Customer relationship management",
      "Enterprise resource planning",
      "Business process automation",
      "Data integration and analytics",
      "Reporting and dashboards",
      "Mobile access",
    ],
    benefits: [
      "Streamline your business processes",
      "Improve customer satisfaction",
      "Increase operational efficiency",
      "Make data-driven decisions",
      "Reduce manual work and errors",
    ],
  },
  saas: {
    title: "SaaS Platforms",
    description:
      "Scalable cloud-based software solutions that grow with your business.",
    image: "/placeholder.svg?height=400&width=800",
    features: [
      "Multi-tenant architecture",
      "Subscription management",
      "Cloud infrastructure",
      "API development and integration",
      "User management and authentication",
      "Billing and payment processing",
    ],
    benefits: [
      "Recurring revenue model",
      "Scalable infrastructure",
      "Reduced maintenance costs",
      "Faster time-to-market",
      "Global accessibility",
    ],
  },
  webshop: {
    title: "Webshop Systems",
    description:
      "Custom e-commerce solutions designed to enhance your online sales.",
    image: "/placeholder.svg?height=400&width=800",
    features: [
      "Custom shopping experiences",
      "Payment gateway integration",
      "Inventory management",
      "Order processing automation",
      "Customer account management",
      "Product catalog management",
    ],
    benefits: [
      "Increase online sales",
      "Improve customer experience",
      "Streamline order fulfillment",
      "Gain valuable customer insights",
      "Expand your market reach",
    ],
  },
  consulting: {
    title: "IT Consulting",
    description: "Expert advice on technology strategy and implementation.",
    image: "/placeholder.svg?height=400&width=800",
    features: [
      "Technology assessment",
      "Digital transformation",
      "IT strategy development",
      "System architecture design",
      "Vendor selection",
      "Project management",
    ],
    benefits: [
      "Make informed technology decisions",
      "Reduce implementation risks",
      "Optimize your IT investments",
      "Align technology with business goals",
      "Access to expert knowledge",
    ],
  },
};

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services[params.slug as keyof typeof services];

  if (!service) {
    notFound();
  }

  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                {service.title}
              </h1>
              <p className="mx-auto max-w-[700px] text-zinc-500 md:text-xl">
                {service.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Image */}
      <section className="w-full bg-zinc-50">
        <div className="container px-4 md:px-6">
          <div className="relative h-[300px] md:h-[400px] lg:h-[500px] w-full overflow-hidden rounded-lg">
            <Image
              src={service.image || "/placeholder.svg"}
              alt={service.title}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Features
              </h2>
              <p className="text-zinc-500 md:text-lg">
                Our {service.title.toLowerCase()} solutions include the
                following features:
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-zinc-900 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Benefits
              </h2>
              <p className="text-zinc-500 md:text-lg">
                By implementing our {service.title.toLowerCase()} solutions,
                you'll benefit from:
              </p>
              <ul className="space-y-2">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-zinc-900 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="w-full py-12 md:py-24 bg-zinc-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Our Approach
              </h2>
              <p className="mx-auto max-w-[700px] text-zinc-500 md:text-lg">
                We follow a structured approach to ensure successful project
                delivery.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-100 text-zinc-900 font-bold text-xl">
                1
              </div>
              <h3 className="text-xl font-bold">Discovery</h3>
              <p className="text-zinc-500">
                We start by understanding your business needs and project
                requirements.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-100 text-zinc-900 font-bold text-xl">
                2
              </div>
              <h3 className="text-xl font-bold">Planning</h3>
              <p className="text-zinc-500">
                We create a detailed project plan with timelines and
                deliverables.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-100 text-zinc-900 font-bold text-xl">
                3
              </div>
              <h3 className="text-xl font-bold">Development</h3>
              <p className="text-zinc-500">
                Our team builds your solution with regular updates and feedback.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-100 text-zinc-900 font-bold text-xl">
                4
              </div>
              <h3 className="text-xl font-bold">Delivery & Support</h3>
              <p className="text-zinc-500">
                We deploy your solution and provide ongoing maintenance and
                support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Ready to Get Started?
              </h2>
              <p className="mx-auto max-w-[700px] text-zinc-500 md:text-lg">
                Contact us today to discuss your {service.title.toLowerCase()}{" "}
                project requirements.
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
  );
}
