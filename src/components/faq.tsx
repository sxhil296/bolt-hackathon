"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

// Sample FAQ data
const faqData = [
  {
    question: "How do I get started with your service?",
    answer:
      "Getting started is easy! Simply sign up for an account on our website, choose a plan that fits your needs, and follow the onboarding process. Our intuitive dashboard will guide you through the initial setup, and you'll be up and running in minutes.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards including Visa, Mastercard, American Express, and Discover. We also support payments through PayPal, Apple Pay, and Google Pay for your convenience. All payments are processed securely through our payment partners.",
  },
  {
    question: "Can I upgrade or downgrade my plan later?",
    answer:
      "You can upgrade or downgrade your plan at any time through your account settings. When upgrading, you'll immediately gain access to additional features, and we'll prorate the difference. When downgrading, changes will take effect at the start of your next billing cycle.",
  },
  {
    question: "What kind of support do you offer?",
    answer:
      "We offer comprehensive support through multiple channels. Our help center contains detailed documentation and tutorials. For direct assistance, you can reach our support team via live chat during business hours, email support 24/7, or schedule a call with a dedicated account manager for premium plans.",
  },
  {
    question: "Is there a free trial available?",
    answer:
      "Yes, we offer a 14-day free trial with full access to all features of our Professional plan. No credit card is required to start your trial. At the end of your trial period, you can choose to subscribe to one of our plans or downgrade to our free tier with limited features.",
  },
]

export default function FAQ() {
  const [openItem, setOpenItem] = useState<string>("item-0")

  return (
    <section >
      <div className="py-16 md:py-32">
      <div className="mx-auto max-w-6xl px-6 border-t">
        <span className="text-caption -ml-6 -mt-3.5 block w-max bg-gray-50 px-6 dark:bg-gray-950">
        FAQ
        </span>
      
        <div className="mt-12 md:mt-24 grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16">
        <div className="gap-2 sm:grid sm:grid-rows-2 h-fit">
          <div className="w-fit h-fit">
            <h2 className="text-3xl font-bold sm:text-4xl">
            Frequently Asked Questions
            </h2>
          </div>
          <div className="mt-2 md:mt-4 font-tektur">
            <p>
            Find answers to common questions about this hackathon and support. If you can&apos;t find what you&apos;re
            looking for, please contact our support team.
            </p>
          </div>
        </div>
        
          <div className="space-y-4">
            <Accordion type="single" collapsible className="w-full" value={openItem} onValueChange={setOpenItem} >
              {faqData.map((faq, index) => (
                <AccordionItem
                  key={`item-${index}`}
                  value={`item-${index}`}
                  className="group border border-border rounded-lg mb-4 overflow-hidden data-[state=open]:bg-accent/50 transition-all duration-200"
                >
                  <AccordionTrigger className="cursor-pointer px-4 py-4 hover:no-underline group-data-[state=open]:bg-accent/30 transition-all duration-200">
                    <div className="flex items-center justify-between w-full">
                      <span className="text-left font-medium">{faq.question}</span>
                     
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="font-tektur px-4 pb-4 pt-0 text-muted-foreground data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                    <div className="pt-2">{faq.answer}</div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <div className="flex items-center justify-center pt-4 font-tektur">
              <p className="text-sm text-muted-foreground">
                Still have questions?{" "}
                <a href="#" className="text-primary underline-offset-4 hover:underline">
                  Get in touch with our team
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}