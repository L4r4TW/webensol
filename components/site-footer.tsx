import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="w-full border-t border-zinc-200 bg-white">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold">Webensol</span>
            </Link>
            <p className="text-sm text-zinc-500">
              Professional software development company specializing in custom B2B solutions.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Services</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/services/crm-erp" className="text-sm text-zinc-500 hover:text-zinc-900">
                CRM/ERP Development
              </Link>
              <Link href="/services/saas" className="text-sm text-zinc-500 hover:text-zinc-900">
                SaaS Platforms
              </Link>
              <Link href="/services/webshop" className="text-sm text-zinc-500 hover:text-zinc-900">
                Webshop Systems
              </Link>
              <Link href="/services/consulting" className="text-sm text-zinc-500 hover:text-zinc-900">
                IT Consulting
              </Link>
            </nav>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Company</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/about" className="text-sm text-zinc-500 hover:text-zinc-900">
                About Us
              </Link>
              <Link href="/references" className="text-sm text-zinc-500 hover:text-zinc-900">
                References
              </Link>
              <Link href="/contact" className="text-sm text-zinc-500 hover:text-zinc-900">
                Contact
              </Link>
              <Link href="/privacy" className="text-sm text-zinc-500 hover:text-zinc-900">
                Privacy Policy
              </Link>
            </nav>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Contact</h3>
            <div className="flex flex-col space-y-2 text-sm text-zinc-500">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span>123 Business Street, 10000 City, Country</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@webensol.com</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-zinc-200 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-xs text-zinc-500">© {new Date().getFullYear()} Webensol. All rights reserved.</p>
          <div className="flex space-x-4">
            <Link href="/terms" className="text-xs text-zinc-500 hover:text-zinc-900">
              Terms of Service
            </Link>
            <Link href="/privacy" className="text-xs text-zinc-500 hover:text-zinc-900">
              Privacy Policy
            </Link>
            <Link href="/cookies" className="text-xs text-zinc-500 hover:text-zinc-900">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
