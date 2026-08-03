import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Building2, ClipboardCheck, Handshake, LineChart, ShieldCheck, Users } from "lucide-react";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHero } from "@/components/page-hero";
import aboutHq from "@/assets/about-hq.jpg";
import leadership from "@/assets/leadership.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Polar Estate Broker | Our Story & Leadership" },
      {
        name: "description",
        content:
          "Learn how Polar Estate Broker manages the full property lifecycle — verified titles, structured portfolios, tenancy management and facility upkeep.",
      },
      { property: "og:title", content: "About Polar Estate Broker" },
      {
        property: "og:description",
        content:
          "A broker that stays after the sale: verified titles, structured portfolios and transparent monthly reporting.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const VALUES = [
  { icon: ShieldCheck, title: "Verified Titles", copy: "Documented due diligence before any listing reaches a client." },
  { icon: LineChart, title: "Yield-Led Strategy", copy: "Decisions anchored on rental yield, occupancy and resale data." },
  { icon: ClipboardCheck, title: "Transparent Reporting", copy: "Clear monthly statements on rent, expenses and maintenance." },
  { icon: Users, title: "Experienced Team", copy: "Brokers, facility engineers and property lawyers under one roof." },
  { icon: Building2, title: "Full Asset Coverage", copy: "Residential, commercial, mixed-use and raw land desks." },
  { icon: Handshake, title: "Long-Term Partnership", copy: "We manage for legacy and asset growth, not one-off commissions." },
];

const MILESTONES = [
  { year: "2014", copy: "Founded as a brokerage desk handling residential sales and title verification." },
  { year: "2017", copy: "Launched the property management division with our first 60-unit mandate." },
  { year: "2020", copy: "Added facility management, bringing maintenance and compliance in-house." },
  { year: "2024", copy: "Over 420 homes managed and ₦12B+ in transactions facilitated." },
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="About Polar Estate Broker"
          title="A Broker That Stays After the Sale"
          copy="We operate across the full property lifecycle — acquisition and sale, portfolio structuring, tenancy management and day-to-day facility upkeep."
        />

        <section className="bg-background">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2">
            <div className="overflow-hidden rounded-2xl shadow-[var(--shadow-card)]">
              <img
                src={aboutHq}
                alt="Polar Estate Broker corporate headquarters"
                width={1200}
                height={900}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold sm:text-4xl">One Accountable Partner</h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                Owners get a single accountable partner instead of five disconnected
                vendors. Every mandate runs on documented processes: verified titles,
                signed lease frameworks, scheduled maintenance and monthly financial
                reporting.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Our mandate is simple — protect the asset, hold occupancy high and
                grow net yield year after year.
              </p>
              <Link
                to="/services"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-primary"
              >
                See what we handle <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-secondary/40">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
            <span className="eyebrow">Our Values</span>
            <h2 className="mt-5 text-3xl font-bold sm:text-4xl">How We Work</h2>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {VALUES.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-background text-brand">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-base font-semibold">{item.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {item.copy}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-background">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
            <span className="eyebrow">Milestones</span>
            <h2 className="mt-5 text-3xl font-bold sm:text-4xl">Our Track Record</h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {MILESTONES.map((item) => (
                <div
                  key={item.year}
                  className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]"
                >
                  <div className="font-display text-2xl font-bold text-brand">{item.year}</div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-secondary/40">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2">
            <div>
              <span className="eyebrow">Leadership</span>
              <h2 className="mt-5 text-3xl font-bold sm:text-4xl">
                Led by Seasoned Property Professionals
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                Our leadership brings brokerage, facility engineering and property law
                experience together, setting the standards that govern every mandate we
                accept.
              </p>
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-lg bg-brand px-6 py-3.5 text-sm font-semibold text-brand-foreground transition-colors hover:bg-primary"
              >
                Talk to our team <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="overflow-hidden rounded-2xl shadow-[var(--shadow-card)]">
              <img
                src={leadership}
                alt="Polar Estate Broker leadership team"
                width={1000}
                height={800}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
