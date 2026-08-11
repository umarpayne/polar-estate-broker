import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CalendarDays } from "lucide-react";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHero } from "@/components/page-hero";
import { POSTS } from "@/lib/blog-data";

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
              <Link
                key={p.slug}
                to="/insights/blogs/$slug"
                params={{ slug: p.slug }}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-brand"
              >
                <div className="aspect-[16/10] overflow-hidden bg-secondary">
                  <img
                    src={p.image}
                    alt={p.title}
                    width={1200}
                    height={750}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <div className="flex items-center gap-3 text-xs">
                    <span className="rounded-full bg-secondary px-3 py-1 font-semibold text-brand">
                      {p.category}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-muted-foreground">
                      <CalendarDays className="h-3.5 w-3.5" />
                      {p.date}
                    </span>
                  </div>
                  <h2 className="mt-5 text-lg font-semibold leading-snug text-foreground transition-colors group-hover:text-brand">
                    {p.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {p.excerpt}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand">
                    Read article
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
