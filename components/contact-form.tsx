"use client"

import type React from "react"

import { useState } from "react"
import { CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="rounded-lg border border-zinc-200 bg-white p-8 shadow-sm">
        <div className="flex flex-col items-center justify-center space-y-3 text-center">
          <div className="rounded-full bg-green-100 p-3">
            <CheckCircle className="h-6 w-6 text-green-600" />
          </div>
          <h3 className="text-xl font-bold">Thank You!</h3>
          <p className="text-zinc-500">Your message has been received. We'll get back to you within 24 hours.</p>
          <Button variant="outline" onClick={() => setIsSubmitted(false)} className="mt-4">
            Send Another Message
          </Button>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
      <div className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="Your name" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="Your email address" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="phone">Phone (optional)</Label>
          <Input id="phone" type="tel" placeholder="Your phone number" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="message">Message</Label>
          <Textarea id="message" placeholder="Tell us about your project" className="min-h-[120px]" required />
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="gdpr" required />
          <Label htmlFor="gdpr" className="text-sm text-zinc-500">
            I agree to the processing of my personal data in accordance with the GDPR.
          </Label>
        </div>
        <Button type="submit" className="w-full bg-zinc-900 text-white hover:bg-zinc-800" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </div>
    </form>
  )
}
