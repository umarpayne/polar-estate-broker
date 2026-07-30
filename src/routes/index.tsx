import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Building2,
  ClipboardCheck,
  Handshake,
  LineChart,
  ShieldCheck,
  Users,
} from "lucide-react";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import heroTower from "@/assets/hero-tower.jpg";
import aboutHq from "@/assets/about-hq.jpg";
import svcSales from "@/assets/svc-sales.jpg";
import svcManagement from "@/assets/svc-management.jpg";
import svcPortfolio from "@/assets/svc-portfolio.jpg";
import svcFacility from "@/assets/svc-facility.jpg";
import svcLand from "@/assets/svc-land.jpg";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import caseStudy from "@/assets/case-study.jpg";
import leadership from "@/assets/leadership.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Polar Estate Broker | Property Sales & Property Management",
      },
      {
        name: "description",
        content:
          "Polar Estate Broker is a real estate and property management firm handling property sales, property portfolios, property management and facility management.",
      },
      {
        property: "og:title",
        content: "Polar Estate Broker | Property Sales & Management",
      },
      {
        property: "og:description",
        content:
          "Property sales, portfolios, management and facility oversight for owners and investors.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const STATS = [
  { value: "₦12B+", label: "Property Transactions" },
  { value: "420+", label: "Homes Managed" },
  { value: "8,500+", label: "Plots Facilitated" },
  { value: "60+", label: "Corporate Clients" },
  { value: "20+", label: "Assets Under Management" },
];

const SERVICES = [
  {
    title: "Property Sales",
    copy: "Sourcing, marketing and closing residential and commercial property at the right valuation.",
    image: svcSales,
  },
  {
    title: "Property Portfolios",
    copy: "Building and rebalancing multi-asset property portfolios for steady, long-term yield.",
    image: svcPortfolio,
  },
  {
    title: "Property Management",
    copy: "Occupancy, lease oversight, rent collection and tenant retention handled end to end.",
    image: svcManagement,
  },
  {
    title: "Facility Management",
    copy: "Preventive maintenance, safety compliance and full operational upkeep of your buildings.",
    image: svcFacility,
  },
  {
    title: "Land & Development Advisory",
    copy: "Title verification, feasibility studies and site positioning for new developments.",
    image: svcLand,
  },
];

const EDGE = [
  {
    icon: ShieldCheck,
    title: "Verified Titles",
    copy: "Every listing and plot passes documented due diligence before it reaches a client.",
  },
  {
    icon: LineChart,
    title: "Yield-Led Strategy",
    copy: "Decisions anchored on rental yield, occupancy data and resale performance.",
  },
  {
    icon: ClipboardCheck,
    title: "Transparent Reporting",
    copy: "Clear monthly statements on rent, expenses and maintenance across every asset.",
  },
  {
    icon: Users,
    title: "Experienced Team",
    copy: "Brokers, facility engineers and property lawyers working under one roof.",
  },
  {
    icon: Building2,
    title: "Full Asset Coverage",
    copy: "Residential, commercial, mixed-use and raw land handled by dedicated desks.",
  },
  {
    icon: Handshake,
    title: "Long-Term Partnership",
    copy: "We manage for legacy and asset growth, not one-off commissions.",
  },
];

const PORTFOLIO = [
  {
    title: "Polar Waterside Residences",
    meta: "Sales & Property Management • Waterfront District",
    image: portfolio1,
  },
  {
    title: "The Meridian Commercial Hub",
    meta: "Portfolio Advisory & Facility Management • City Centre",
    image: portfolio2,
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Polar Estate Broker took over a half-empty block and had it fully let within a quarter. The reporting alone is worth it.",
    name: "Mrs. T. Okonkwo",
    role: "Owner, Residential Portfolio",
  },
  {
    quote:
      "They handled the title checks, the sale and the handover. Clean, documented and without a single surprise.",
    name: "Mr. D. Ferguson",
    role: "Property Investor",
  },
];

function Home() {
  return (
    <div id="top" className="min-h-screen bg-background">
      <SiteHeader />

      <main>
        {/* Hero */}
        <section className="surface-ink">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
            <div>
              <span className="eyebrow">Real Estate &amp; Property Management</span>
              <h1 className="mt-6 text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
                Owning Property.
                <br />
                <span className="text-brand">Managed Properly.</span>
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-foreground/75">
                Polar Estate Broker sells, structures and manages residential and
                commercial property — protecting value, occupancy and long-term
                yield for owners and investors.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-lg bg-brand px-6 py-3.5 text-sm font-semibold text-brand-foreground shadow-[var(--shadow-elevated)] transition-colors hover:bg-primary"
                >
                  Book Consultation <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center rounded-lg border border-ink-foreground/25 px-6 py-3.5 text-sm font-semibold text-ink-foreground transition-colors hover:bg-ink-foreground/10"
                >
                  Explore Services
                </a>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl shadow-[var(--shadow-elevated)]">
              <img
                src={heroTower}
                alt="Modern residential tower managed by Polar Estate Broker"
                width={1200}
                height={1400}
                className="h-[320px] w-full object-cover sm:h-[440px] lg:h-[520px]"
              />
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="border-b border-border bg-background">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 py-12 sm:px-6 md:grid-cols-3 lg:grid-cols-5">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-3xl font-bold text-brand sm:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* About */}
        <section id="about" className="bg-secondary/40">
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
              <span className="eyebrow">About Polar Estate Broker</span>
              <h2 className="mt-5 text-3xl font-bold sm:text-4xl">
                A Broker That Stays After the Sale
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                We operate across the full property lifecycle — acquisition and
                sale, portfolio structuring, tenancy management and day-to-day
                facility upkeep. Owners get one accountable partner instead of
                five disconnected vendors.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Every mandate runs on documented processes: verified titles,
                signed lease frameworks, scheduled maintenance and monthly
                financial reporting.
              </p>
              <a
                href="#services"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-primary"
              >
                See what we handle <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="bg-background">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
            <span className="eyebrow">Core Services</span>
            <h2 className="mt-5 max-w-2xl text-3xl font-bold sm:text-4xl">
              Sales, Portfolios and Full Property Management
            </h2>
            <p className="mt-4 max-w-2xl text-base text-muted-foreground">
              Five service desks covering everything from first viewing to
              long-term facility operations.
            </p>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {SERVICES.map((service) => (
                <article
                  key={service.title}
                  className="group overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)] transition-transform hover:-translate-y-1"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    width={800}
                    height={600}
                    loading="lazy"
                    className="h-48 w-full object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-card-foreground">
                      {service.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                      {service.copy}
                    </p>
                    <a
                      href="#contact"
                      className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand"
                    >
                      Learn More <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio */}
        <section id="portfolio" className="bg-secondary/40">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
            <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
              <div>
                <span className="eyebrow">Portfolio</span>
                <h2 className="mt-5 text-3xl font-bold sm:text-4xl">
                  Assets Under Our Management
                </h2>
              </div>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand"
              >
                View Full Portfolio <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {PORTFOLIO.map((item) => (
                <article
                  key={item.title}
                  className="overflow-hidden rounded-2xl bg-card shadow-[var(--shadow-card)]"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    width={1000}
                    height={700}
                    loading="lazy"
                    className="h-64 w-full object-cover sm:h-80"
                  />
                  <div className="p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-brand">
                      {item.meta}
                    </p>
                    <h3 className="mt-2 text-xl font-semibold text-card-foreground">
                      {item.title}
                    </h3>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Why us */}
        <section className="bg-background">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
            <span className="eyebrow">Our Competitive Edge</span>
            <h2 className="mt-5 text-3xl font-bold sm:text-4xl">
              Why Owners Partner With Polar
            </h2>

            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {EDGE.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-secondary text-brand">
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

        {/* Case study */}
        <section id="case-study" className="bg-secondary/40">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
            <span className="eyebrow">Proven Results</span>
            <h2 className="mt-5 text-3xl font-bold sm:text-4xl">
              Featured Case Study
            </h2>

            <div className="mt-10 grid items-center gap-10 rounded-2xl bg-card p-6 shadow-[var(--shadow-card)] lg:grid-cols-2 lg:p-10">
              <div className="overflow-hidden rounded-xl">
                <img
                  src={caseStudy}
                  alt="Repositioned residential complex before and after"
                  width={1000}
                  height={700}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-brand">
                  Residential Turnaround
                </p>
                <h3 className="mt-3 text-2xl font-semibold">
                  Repositioning an 18-Unit Complex
                </h3>
                <dl className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground">
                  <div>
                    <dt className="font-semibold text-foreground">Challenge</dt>
                    <dd>
                      41% vacancy, arrears across six units and deferred building
                      maintenance.
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-foreground">Solution</dt>
                    <dd>
                      Full facility overhaul, restructured lease terms and a
                      digital rent-collection process.
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-foreground">Outcome</dt>
                    <dd>
                      100% occupancy in 90 days and a 29% lift in net rental
                      yield.
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-background">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
            <span className="eyebrow">Client Voices</span>
            <h2 className="mt-5 text-3xl font-bold sm:text-4xl">
              What Owners and Investors Say
            </h2>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {TESTIMONIALS.map((item) => (
                <figure
                  key={item.name}
                  className="rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-card)]"
                >
                  <blockquote className="text-lg leading-relaxed text-card-foreground">
                    “{item.quote}”
                  </blockquote>
                  <figcaption className="mt-6">
                    <div className="font-semibold">{item.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {item.role}
                    </div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section className="bg-secondary/40">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2">
            <div>
              <span className="eyebrow">Leadership</span>
              <h2 className="mt-5 text-3xl font-bold sm:text-4xl">
                Led by Seasoned Property Professionals
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                Our leadership brings brokerage, facility engineering and
                property law experience together, setting the standards that
                govern every mandate we accept.
              </p>
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

        {/* CTA */}
        <section id="contact" className="surface-ink">
          <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Ready to Put Your Property to Work?
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-foreground/75">
              Talk to Polar Estate Broker about a sale, a portfolio review or
              taking management of your building.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <a
                href="mailto:hello@polarestatebroker.com"
                className="inline-flex items-center gap-2 rounded-lg bg-brand px-6 py-3.5 text-sm font-semibold text-brand-foreground transition-colors hover:bg-primary"
              >
                Book Consultation <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="tel:+2348000000000"
                className="inline-flex items-center rounded-lg border border-ink-foreground/25 px-6 py-3.5 text-sm font-semibold text-ink-foreground transition-colors hover:bg-ink-foreground/10"
              >
                Call Our Team
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
