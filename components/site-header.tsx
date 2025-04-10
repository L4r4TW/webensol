"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold">Webensol</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-zinc-900/70">
            Home
          </Link>
          <Link href="/services" className="text-sm font-medium transition-colors hover:text-zinc-900/70">
            Services
          </Link>
          <Link href="/about" className="text-sm font-medium transition-colors hover:text-zinc-900/70">
            About Us
          </Link>
          <Link href="/references" className="text-sm font-medium transition-colors hover:text-zinc-900/70">
            References
          </Link>
          <Link href="/contact" className="text-sm font-medium transition-colors hover:text-zinc-900/70">
            Contact
          </Link>
        </nav>
        <div className="hidden md:block">
          <Link href="/contact">
            <Button className="bg-zinc-900 text-white hover:bg-zinc-800">Get in Touch</Button>
          </Link>
        </div>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-4 mt-8">
              <Link
                href="/"
                className="text-lg font-medium transition-colors hover:text-zinc-900/70"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/services"
                className="text-lg font-medium transition-colors hover:text-zinc-900/70"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/about"
                className="text-lg font-medium transition-colors hover:text-zinc-900/70"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/references"
                className="text-lg font-medium transition-colors hover:text-zinc-900/70"
                onClick={() => setIsOpen(false)}
              >
                References
              </Link>
              <Link
                href="/contact"
                className="text-lg font-medium transition-colors hover:text-zinc-900/70"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <div className="mt-4">
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  <Button className="w-full bg-zinc-900 text-white hover:bg-zinc-800">Get in Touch</Button>
                </Link>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
