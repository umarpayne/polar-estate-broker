import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHero } from "@/components/page-hero";
import svcSales from "@/assets/svc-sales.jpg";
import svcManagement from "@/assets/svc-management.jpg";
import svcPortfolio from "@/assets/svc-portfolio.jpg";
import svcFacility from "@/assets/svc-facility.jpg";
import svcLand from "@/assets/svc-land.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | Property Sales, Portfolios & Management" },
      {
        name: "description",
        content:
          "Property sales, portfolio structuring, property management, facility management and land advisory from Polar Estate Broker.",
      },
      { property: "og:title", content: "Polar Estate Broker Services" },
      {
        property: "og:description",
        content:
          "Five service desks covering sales, portfolios, tenancy management, facility upkeep and land advisory.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

const SERVICES = [
  {
    title: "Property Sales",
    copy: "Sourcing, marketing and closing residential and commercial property at the right valuation.",
    image: svcSales,
    points: ["Market valuation & pricing", "Listing and buyer sourcing", "Title verification", "Documented handover"],
  },
  {
    title: "Property Portfolios",
    copy: "Building and rebalancing multi-asset property portfolios for steady, long-term yield.",
    image: svcPortfolio,
    points: ["Acquisition strategy", "Yield and risk modelling", "Asset rebalancing", "Quarterly performance reviews"],
  },
  {
    title: "Property Management",
    copy: "Occupancy, lease oversight, rent collection and tenant retention handled end to end.",
    image: svcManagement,
    points: ["Tenant sourcing & screening", "Lease administration", "Digital rent collection", "Monthly owner statements"],
  },
  {
    title: "Facility Management",
    copy: "Preventive maintenance, safety compliance and full operational upkeep of your buildings.",
    image: svcFacility,
    points: ["Planned maintenance schedules", "Vendor management", "Safety & compliance audits", "24/7 fault response"],
  },
  {
    title: "Land & Development Advisory",
    copy: "Title verification, feasibility studies and site positioning for new developments.",
    image: svcLand,
    points: ["Title & encumbrance checks", "Feasibility studies", "Site positioning", "Development partnering"],
  },
];

const PROCESS = [
  { step: "01", title: "Consultation", copy: "We review your asset, objectives and current performance." },
  { step: "02", title: "Due Diligence", copy: "Title checks, condition survey and market benchmarking." },
  { step: "03", title: "Mandate", copy: "A signed scope with fees, timelines and reporting cadence." },
  { step: "04", title: "Execution & Reporting", copy: "We run the asset and report monthly on every naira." },
];

function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Core Services"
          title="Sales, Portfolios and Full Property Management"
          copy="Five service desks covering everything from first viewing to long-term facility operations."
        />

        <section className="bg-background">
          <div className="mx-auto max-w-7xl space-y-8 px-4 py-20 sm:px-6">
            {SERVICES.map((service, i) => (
              <article
                key={service.title}
                className="grid items-center gap-8 overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] lg:grid-cols-2 lg:p-8"
              >
                <div className={`overflow-hidden rounded-xl ${i % 2 ? "lg:order-2" : ""}`}>
                  <img
                    src={service.image}
                    alt={service.title}
                    width={800}
                    height={600}
                    loading="lazy"
                    className="h-64 w-full object-cover sm:h-72"
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-card-foreground">{service.title}</h2>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">{service.copy}</p>
                  <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-primary"
                  >
                    Discuss this service <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-secondary/40">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
            <span className="eyebrow">How We Engage</span>
            <h2 className="mt-5 text-3xl font-bold sm:text-4xl">Our Process</h2>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {PROCESS.map((item) => (
                <div key={item.step} className="rounded-2xl bg-card p-6 shadow-[var(--shadow-card)]">
                  <div className="font-display text-3xl font-bold text-brand">{item.step}</div>
                  <h3 className="mt-3 text-base font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
