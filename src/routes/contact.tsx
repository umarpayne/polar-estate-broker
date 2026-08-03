import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHero } from "@/components/page-hero";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Polar Estate Broker | Book a Consultation" },
      {
        name: "description",
        content:
          "Talk to Polar Estate Broker about a property sale, a portfolio review or handing over management of your building.",
      },
      { property: "og:title", content: "Contact Polar Estate Broker" },
      {
        property: "og:description",
        content: "Book a consultation for property sales, portfolio advisory or property management.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

const SERVICE_OPTIONS = [
  "Property Sales",
  "Property Portfolios",
  "Property Management",
  "Facility Management",
  "Land & Development Advisory",
];

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Contact"
          title="Ready to Put Your Property to Work?"
          copy="Tell us about the asset and what you need — a sale, a portfolio review or full management — and our team will respond within one business day."
        />

        <section className="bg-background">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] sm:p-8">
              <h2 className="text-2xl font-semibold text-card-foreground">Book a Consultation</h2>
              <form
                className="mt-6 grid gap-5"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="grid gap-2 text-sm font-medium">
                    Full name
                    <input
                      required
                      name="name"
                      className="rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm font-normal outline-none focus:border-brand"
                      placeholder="Your name"
                    />
                  </label>
                  <label className="grid gap-2 text-sm font-medium">
                    Email
                    <input
                      required
                      type="email"
                      name="email"
                      className="rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm font-normal outline-none focus:border-brand"
                      placeholder="you@email.com"
                    />
                  </label>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="grid gap-2 text-sm font-medium">
                    Phone
                    <input
                      name="phone"
                      className="rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm font-normal outline-none focus:border-brand"
                      placeholder="+234 800 000 0000"
                    />
                  </label>
                  <label className="grid gap-2 text-sm font-medium">
                    Service needed
                    <select
                      name="service"
                      className="rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm font-normal outline-none focus:border-brand"
                    >
                      {SERVICE_OPTIONS.map((option) => (
                        <option key={option}>{option}</option>
                      ))}
                    </select>
                  </label>
                </div>
                <label className="grid gap-2 text-sm font-medium">
                  Message
                  <textarea
                    required
                    name="message"
                    rows={5}
                    className="rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm font-normal outline-none focus:border-brand"
                    placeholder="Tell us about the property, location and what you need."
                  />
                </label>
                <button
                  type="submit"
                  className="justify-self-start rounded-lg bg-brand px-6 py-3.5 text-sm font-semibold text-brand-foreground transition-colors hover:bg-primary"
                >
                  Send Enquiry
                </button>
                {sent && (
                  <p className="text-sm font-medium text-brand">
                    Thank you — your enquiry has been noted. Our team will reach out shortly.
                  </p>
                )}
              </form>
            </div>

            <div className="space-y-6">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
                <h2 className="text-lg font-semibold text-card-foreground">Reach Us Directly</h2>
                <ul className="mt-5 space-y-4 text-sm text-muted-foreground">
                  <li className="flex gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                    Polar House, Central Business District
                  </li>
                  <li className="flex gap-3">
                    <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                    <a href="tel:+2348000000000" className="hover:text-brand">
                      +234 800 000 0000
                    </a>
                  </li>
                  <li className="flex gap-3">
                    <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                    <a href="mailto:hello@polarestatebroker.com" className="hover:text-brand">
                      hello@polarestatebroker.com
                    </a>
                  </li>
                  <li className="flex gap-3">
                    <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                    Monday – Friday, 8:30am – 5:30pm
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl bg-secondary/60 p-6">
                <h3 className="text-base font-semibold">What Happens Next</h3>
                <ol className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
                  <li>1. We review your enquiry and property details.</li>
                  <li>2. A consultant calls to confirm scope and objectives.</li>
                  <li>3. You receive a written proposal with fees and timelines.</li>
                </ol>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
