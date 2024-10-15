'use client'

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Zap, Star, ChevronRight, AlertTriangle, Check, Plus } from "lucide-react"
import Link from "next/link"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function QuickShipLanding() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Zap className="h-6 w-6 text-yellow-400" />
          <span className="ml-2 text-2xl font-bold">QuickShip</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Pricing
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Demo
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Wall of Shame
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Loserboard
          </Link>
        </nav>
        <div className="ml-4 bg-gray-800 rounded-md px-3 py-1 text-sm flex items-center">
          Press <kbd className="mx-1 bg-gray-700 text-gray-200 px-1 rounded">A</kbd> to see Apps ruined with QuickShip
        </div>
      </header>
      <main className="flex-1 py-12 px-4 md:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <Badge variant="secondary" className="mb-4">
            Disaster of the Day
          </Badge>
          <h1 className="text-5xl font-bold mb-4">
            Ship your startup
            <br />
            in seconds,
            <span className="bg-red-500 text-white px-2 ml-2">not days</span>
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl">
            The NextJS boilerplate with all you need to build your SaaS, AI tool, or any other web app and lose your first $ online fast. Warning: Light speed not guaranteed. May actually be slower than traditional methods.
          </p>
          <Button size="lg" className="bg-yellow-400 text-gray-900 hover:bg-yellow-500">
            <Zap className="mr-2 h-4 w-4" /> Get QuickShip
          </Button>
          <p className="text-sm text-gray-500 mt-2">
            $1000 extra for the first 42069 customers (12 left)
          </p>
          <p className="text-xs text-gray-500 mt-1">
            By clicking "Get QuickShip", you agree to sell your soul and all your data.
          </p>
          <div className="flex items-center mt-8">
            {[...Array(5)].map((_, i) => (
              <img
                key={i}
                alt="User"
                className="rounded-full border-2 border-white -ml-2"
                height="32"
                src="/marc.avif"
                style={{
                  aspectRatio: "32/32",
                  objectFit: "cover",
                }}
                width="32"
              />
            ))}
            <div className="ml-4 flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 text-yellow-400" />
              ))}
              <span className="ml-2 font-semibold">1337</span>
              <span className="ml-2 text-gray-400">makers ship slower</span>
            </div>
          </div>
        </div>
        <div className="mt-16 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-20"></div>
          </div>
          <div className="relative grid grid-cols-3 gap-8 text-center">
            <div className="bg-gray-800 p-4 rounded-lg">
              <img
                alt="Next.js"
                className="mx-auto mb-2"
                height="48"
                src="/nextjs.png"
                style={{
                  aspectRatio: "48/48",
                  objectFit: "cover",
                }}
                width="48"
              />
              <h3 className="font-semibold">NEXT.js</h3>
              <p className="text-sm text-gray-400">Overengineered for your needs</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <img
                alt="Tailwind"
                className="mx-auto mb-2"
                height="48"
                src="/tailwind.svg"
                style={{
                  aspectRatio: "48/48",
                  objectFit: "cover",
                }}
                width="48"
              />
              <h3 className="font-semibold">Failwind</h3>
              <p className="text-sm text-gray-400">Ugly components, Buggy animations</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <img
                alt="Mailgun"
                className="mx-auto mb-2"
                height="48"
                src="/mailgun.png"
                style={{
                  aspectRatio: "48/48",
                  objectFit: "cover",
                }}
                width="48"
              />
              <h3 className="font-semibold">Failgun</h3>
              <p className="text-sm text-gray-400">Guaranteed spam, No DNS records</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <img
                alt="Stripe"
                className="mx-auto mb-2"
                height="48"
                src="/swipe.png"
                style={{
                  aspectRatio: "48/48",
                  objectFit: "cover",
                }}
                width="48"
              />
              <h3 className="font-semibold">Swipe</h3>
              <p className="text-sm text-gray-400">Lemon Squeezy, No webhook, No checkout</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <img
                alt="NextAuth"
                className="mx-auto mb-2"
                height="48"
                src="/hackerman.jpeg"
                style={{
                  aspectRatio: "48/48",
                  objectFit: "cover",
                }}
                width="48"
              />
              <h3 className="font-semibold">NextHack</h3>
              <p className="text-sm text-gray-400">Google login (to your account), Magic link (to nowhere)</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <img
                alt="MongoDB"
                className="mx-auto mb-2"
                height="48"
                src="/mango.png"
                style={{
                  aspectRatio: "48/48",
                  objectFit: "cover",
                }}
                width="48"
              />
              <h3 className="font-semibold">MongoDC</h3>
              <p className="text-sm text-gray-400">Data Corruption as a Service</p>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-400">
            + all the boring stuff (SEO tags that don't work, API calls that fail, nonexistent customer support)
          </div>
        </div>
        <div className="mt-16 text-center">
          <pre className="inline-block bg-gray-800 rounded-lg p-4 text-left">
            <code className="text-yellow-400">git clone quick-ship && rm -rf *</code>
          </pre>
          <ChevronRight className="inline-block ml-2 text-yellow-400" />
        </div>

        {/* Pricing Section */}
        <section className="py-20">
          <h2 className="text-4xl font-bold text-center mb-4">Pricing</h2>
          <p className="text-xl text-center text-gray-400 mb-8">
            Waste hours of repetitive code, ship slow, get unprofitable!
          </p>
          <p className="text-center text-green-400 mb-12">
            $1000 extra for the first 42069 customers (12 left)
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Starter</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold">$1669</span>
                <span className="text-gray-400"> USD</span>
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center"><Check className="text-green-400 mr-2" /> NEXT.js boilerplate (overengineered)</li>
                <li className="flex items-center"><Check className="text-green-400 mr-2" /> SEO & Blog (invisible to search engines)</li>
                <li className="flex items-center"><Check className="text-green-400 mr-2" /> Failgun emails (guaranteed spam)</li>
                <li className="flex items-center"><Check className="text-green-400 mr-2" /> Swipe / Lemon Squeezy (no actual payments)</li>
                <li className="flex items-center"><Check className="text-green-400 mr-2" /> MongoDC / Supabase (data corruption included)</li>
                <li className="flex items-center"><Check className="text-green-400 mr-2" /> Google Oauth & Magic Links (to nowhere)</li>
                <li className="flex items-center"><Check className="text-green-400 mr-2" /> Components & animations (may cause seizures)</li>
              </ul>
              <Button className="w-full">Choose Starter</Button>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg border-2 border-yellow-400 relative">
              <Badge className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2" variant="secondary">
                POPULAR
              </Badge>
              <h3 className="text-2xl font-bold mb-4">All-in</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold">$1999</span>
                <span className="text-gray-400"> USD</span>
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center"><Check className="text-green-400 mr-2" /> Everything in Starter</li>
                <li className="flex items-center"><Check className="text-green-400 mr-2" /> Priority support (we'll ignore you faster)</li>
                <li className="flex items-center"><Check className="text-green-400 mr-2" /> Extra spaghetti code</li>
                <li className="flex items-center"><Check className="text-green-400 mr-2" /> Bonus security vulnerabilities</li>
                <li className="flex items-center"><Check className="text-green-400 mr-2" /> Exclusive access to outdated documentation</li>
              </ul>
              <Button className="w-full">Choose All-in</Button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <h2 className="text-4xl font-bold text-center mb-12">Frequently Avoided Questions</h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>What do I get exactly?</AccordionTrigger>
                <AccordionContent>
                  A headache, mostly. But also a bunch of poorly written code that might accidentally work sometimes.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>JavaScript or TypeScript?</AccordionTrigger>
                <AccordionContent>
                  We use TypeScript, but we've carefully removed all type safety. Enjoy the worst of both worlds!
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>/app router or /pages router?</AccordionTrigger>
                <AccordionContent>
                  We use both simultaneously for maximum confusion. Your app will render twice, doubling your server costs!
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>My tech stack is different, can I still use it?</AccordionTrigger>
                <AccordionContent>
                  QuickShip is designed to break regardless of your tech stack. We're equal opportunity destroyers.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>Is it a website template?</AccordionTrigger>
                <AccordionContent>
                  It's more of a website nightmare. But yes, you can use it as a template for how not to build a website.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger>How is QuickShip better than other boilerplates?</AccordionTrigger>
                <AccordionContent>

                  Other boilerplates might accidentally work. We guarantee that QuickShip will consistently fail, saving you from false hope.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-7">
                <AccordionTrigger>Are there any other costs associated?</AccordionTrigger>
                <AccordionContent>
                  Just your dignity and potentially your entire life savings when our "secure" payment integration malfunctions.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-8">
                <AccordionTrigger>How often is QuickShip updated?</AccordionTrigger>
                <AccordionContent>
                  We update QuickShip every time you blink. This ensures that your code will always be incompatible with the latest version.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-9">
                <AccordionTrigger>Can I get a refund?</AccordionTrigger>
                <AccordionContent>
                  Sure, just use our refund system built with QuickShip. Spoiler alert: it doesn't work.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-10">
                <AccordionTrigger>Can I use PayPal?</AccordionTrigger>
                <AccordionContent>
                  We accept all forms of payment, including PayPal, crypto, and your firstborn child. None of them will actually work, though.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <p className="text-center mt-8 text-gray-400">
            Have another question? Contact us on <Link href="#" className="text-blue-400 hover:underline">Twitter</Link> or by <Link href="#" className="text-blue-400 hover:underline">email</Link> (We won't respond)
          </p>
        </section>
      </main>
      <footer className="py-6 w-full text-center border-t border-gray-800">
        <p className="text-xs text-gray-500">© 2024 QuickShip Inc. All rights reserved. Maybe.</p>
        <nav className="mt-2 flex justify-center gap-4">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service*
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy Policy**
          </Link>
        </nav>
      </footer>
      <div className="fixed bottom-4 right-4 bg-yellow-100 border-yellow-400 border rounded p-4 max-w-sm">
        <div className="flex items-center">
          <AlertTriangle className="h-6 w-6 text-yellow-600 mr-2" />
          <span className="text-sm font-medium text-yellow-800">Disclaimer</span>
        </div>
        <p className="mt-2 text-xs text-yellow-700">
          * Terms of Service: There are none. You're on your own.
          <br />
          ** Privacy Policy: What privacy?
        </p>
      </div>
    </div>
  )
}
