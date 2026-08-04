import { createFileRoute } from "@tanstack/react-router";
import { CalendarDays } from "lucide-react";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHero } from "@/components/page-hero";

export const Route = createFileRoute("/insights/blogs")({
  head: () => ({
    meta: [
      { title: "Blogs | Property Guides & Market Notes" },
      {
        name: "description",
        content:
          "Practical guides and market notes for landlords, buyers and tenants — title verification, rent reviews, service charges and portfolio strategy.",
      },
      { property: "og:title", content: "Polar Estate Broker Blog" },
      {
        property: "og:description",
        content:
          "Guides and market notes on buying, letting and managing property.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BlogsPage,
});

const POSTS = [
  {
    category: "Buying",
    date: "12 July 2026",
    title: "Title Verification: The Seven Checks We Never Skip",
    excerpt:
      "Before any property reaches a client, it passes a documented search covering root of title, encumbrances, survey alignment and government acquisition status.",
  },
  {
    category: "Landlords",
    date: "28 June 2026",
    title: "How to Structure a Rent Review Without Losing a Good Tenant",
    excerpt:
      "Annual resets protect real income, but abrupt increases trigger voids. Here is the staged approach we use across 420 managed homes.",
  },
  {
    category: "Investment",
    date: "9 June 2026",
    title: "Gross Yield vs Net Yield: What Investors Keep Getting Wrong",
    excerpt:
      "Service charges, void periods, agency fees and maintenance reserves routinely take two to three points off a headline yield figure.",
  },
  {
    category: "Facility Management",
    date: "21 May 2026",
    title: "The Maintenance Calendar That Prevents Emergency Spend",
    excerpt:
      "Planned quarterly servicing on generators, pumps and roofs costs a fraction of reactive callouts — and keeps tenants renewing.",
  },
  {
    category: "Tenants",
    date: "4 May 2026",
    title: "Reading a Tenancy Agreement Before You Sign",
    excerpt:
      "Service charge scope, repair obligations, notice periods and renewal terms are where most disputes actually begin.",
  },
  {
    category: "Portfolio",
    date: "18 April 2026",
    title: "Building a Five-Property Portfolio on Staged Payments",
    excerpt:
      "A realistic path from one income-producing unit to a diversified portfolio across two locations and two asset classes.",
  },
];

function BlogsPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Insights / Blogs"
          title="Guides, Market Notes and Practical Advice"
          copy="Written by the brokers, managers and engineers who handle these properties every day — no filler, just what actually affects your asset."
        />

        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {POSTS.map((p) => (
              <article
                key={p.title}
                className="flex flex-col rounded-2xl border border-border bg-card p-7 transition-colors hover:border-brand"
              >
                <div className="flex items-center gap-3 text-xs">
                  <span className="rounded-full bg-secondary px-3 py-1 font-semibold text-brand">
                    {p.category}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-muted-foreground">
                    <CalendarDays className="h-3.5 w-3.5" />
                    {p.date}
                  </span>
                </div>
                <h2 className="mt-5 text-lg font-semibold leading-snug text-foreground">
                  {p.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.excerpt}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
