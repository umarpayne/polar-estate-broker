import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BarChart3, Calculator, LineChart, Newspaper } from "lucide-react";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHero } from "@/components/page-hero";

export const Route = createFileRoute("/insights/")({
  head: () => ({
    meta: [
      { title: "Property Insights & Research | Polar Estate Broker" },
      {
        name: "description",
        content:
          "Economic review, market analysis, a rent checker and blogs — research that guides property buying, selling and portfolio decisions.",
      },
      { property: "og:title", content: "Property Insights & Research" },
      {
        property: "og:description",
        content:
          "Economic review, market analysis, rent benchmarking and editorial from the Polar Estate Broker research desk.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: InsightsPage,
});

const SECTIONS = [
  {
    icon: LineChart,
    title: "Economic Review",
    to: "/insights/economic-review",
    copy: "Interest rates, inflation, FX and construction costs — what they mean for property values this quarter.",
  },
  {
    icon: BarChart3,
    title: "Market Analysis",
    to: "/insights/market-analysis",
    copy: "Location-by-location prices, rental yields and demand drivers across residential, commercial and land.",
  },
  {
    icon: Calculator,
    title: "Rent Checker",
    to: "/insights/rent-checker",
    copy: "Estimate an indicative rent range for any property using our internal benchmark rate tables.",
  },
  {
    icon: Newspaper,
    title: "Blogs",
    to: "/insights/blogs",
    copy: "Guides, market notes and practical advice for landlords, buyers and tenants.",
  },
] as const;

function InsightsPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Insights"
          title="Research That Guides Every Property Decision"
          copy="Our research desk tracks the economy, the market and rental benchmarks so buyers, landlords and investors act on data rather than guesswork."
        />

        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <div className="grid gap-6 md:grid-cols-2">
            {SECTIONS.map((s) => (
              <Link
                key={s.title}
                to={s.to}
                className="group rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-card)] transition-colors hover:border-brand"
              >
                <s.icon className="h-8 w-8 text-brand" />
                <h2 className="mt-5 text-xl font-semibold text-foreground">{s.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.copy}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand">
                  Explore
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
