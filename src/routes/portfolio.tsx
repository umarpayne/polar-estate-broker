import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHero } from "@/components/page-hero";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import caseStudy from "@/assets/case-study.jpg";
import heroTower from "@/assets/hero-tower.jpg";
import svcLand from "@/assets/svc-land.jpg";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio | Assets Managed by Polar Estate Broker" },
      {
        name: "description",
        content:
          "Residential, commercial and mixed-use assets sold, structured and managed by Polar Estate Broker, plus a featured turnaround case study.",
      },
      { property: "og:title", content: "Polar Estate Broker Portfolio" },
      {
        property: "og:description",
        content: "Selected residential, commercial and land assets under our management.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PortfolioPage,
});

const PROJECTS = [
  {
    title: "Polar Waterside Residences",
    meta: "Sales & Property Management • Waterfront District",
    copy: "36 waterfront units sold and now managed end to end, holding 98% occupancy.",
    image: portfolio1,
  },
  {
    title: "The Meridian Commercial Hub",
    meta: "Portfolio Advisory & Facility Management • City Centre",
    copy: "Grade-A office space with full facility operations and compliance oversight.",
    image: portfolio2,
  },
  {
    title: "Northcrest Tower",
    meta: "Property Management • Uptown",
    copy: "A 22-floor residential tower with digital rent collection and monthly reporting.",
    image: heroTower,
  },
  {
    title: "Polar Ridge Land Bank",
    meta: "Land & Development Advisory • Peri-Urban Corridor",
    copy: "8,500+ verified plots facilitated with full title and feasibility documentation.",
    image: svcLand,
  },
];

const STATS = [
  { value: "₦12B+", label: "Property Transactions" },
  { value: "420+", label: "Homes Managed" },
  { value: "8,500+", label: "Plots Facilitated" },
  { value: "20+", label: "Assets Under Management" },
];

function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Portfolio"
          title="Assets Under Our Management"
          copy="A selection of residential, commercial and land mandates we have sold, structured or currently operate."
        />

        <section className="border-b border-border bg-background">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 py-12 sm:px-6 lg:grid-cols-4">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-3xl font-bold text-brand sm:text-4xl">{stat.value}</div>
                <div className="mt-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-background">
          <div className="mx-auto grid max-w-7xl gap-6 px-4 py-20 sm:px-6 md:grid-cols-2">
            {PROJECTS.map((item) => (
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
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-brand">{item.meta}</p>
                  <h2 className="mt-2 text-xl font-semibold text-card-foreground">{item.title}</h2>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{item.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-secondary/40">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
            <span className="eyebrow">Proven Results</span>
            <h2 className="mt-5 text-3xl font-bold sm:text-4xl">Featured Case Study</h2>

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
                <h3 className="mt-3 text-2xl font-semibold">Repositioning an 18-Unit Complex</h3>
                <dl className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground">
                  <div>
                    <dt className="font-semibold text-foreground">Challenge</dt>
                    <dd>41% vacancy, arrears across six units and deferred building maintenance.</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-foreground">Solution</dt>
                    <dd>Full facility overhaul, restructured lease terms and a digital rent-collection process.</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-foreground">Outcome</dt>
                    <dd>100% occupancy in 90 days and a 29% lift in net rental yield.</dd>
                  </div>
                </dl>
                <Link
                  to="/contact"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-primary"
                >
                  Request a similar review <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
