import { createFileRoute } from "@tanstack/react-router";
import { Banknote, Building2, Coins, TrendingUp } from "lucide-react";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHero } from "@/components/page-hero";

export const Route = createFileRoute("/insights/economic-review")({
  head: () => ({
    meta: [
      { title: "Economic Review | Polar Estate Broker Insights" },
      {
        name: "description",
        content:
          "Quarterly economic review for property: interest rates, inflation, FX and construction costs, and what they mean for values and rents.",
      },
      { property: "og:title", content: "Economic Review — Property Outlook" },
      {
        property: "og:description",
        content:
          "How rates, inflation, FX and building costs are shaping property values, rents and yields this quarter.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: EconomicReviewPage,
});

const INDICATORS = [
  { icon: TrendingUp, label: "Policy Rate", value: "27.5%", note: "Elevated borrowing costs keep mortgage demand thin and cash buyers dominant." },
  { icon: Coins, label: "Headline Inflation", value: "23.1%", note: "Real estate continues to serve as the preferred inflation hedge for savers." },
  { icon: Banknote, label: "FX Rate Pressure", value: "High", note: "Imported finishes and fittings remain the biggest swing factor in build budgets." },
  { icon: Building2, label: "Construction Cost Index", value: "+18% YoY", note: "Cement, steel and labour costs continue to push replacement values upward." },
];

const COMMENTARY = [
  {
    title: "Financing stays expensive",
    copy: "With the policy rate still in the high twenties, mortgage-led demand remains muted. Transactions are dominated by equity buyers, diaspora funds and staged-payment structures. Developers increasingly price in flexible instalment plans rather than discount headline values.",
  },
  {
    title: "Rents reprice faster than capital values",
    copy: "Landlords are resetting rents annually to track inflation, so gross yields have widened even where sale prices have plateaued. Well-managed serviced apartments and mid-market family units show the strongest rent growth.",
  },
  {
    title: "Replacement cost supports pricing",
    copy: "Because building a comparable asset now costs materially more than it did two years ago, existing quality stock holds value. Buyers are paying a premium for completed, titled and tenanted properties over off-plan risk.",
  },
];

const OUTLOOK = [
  { horizon: "Next quarter", copy: "Prices broadly flat in nominal terms; rents up 6–10% on renewal cycles." },
  { horizon: "6–12 months", copy: "Gradual easing of rates would revive mortgage demand in the mid-market segment." },
  { horizon: "Strategy", copy: "Favour completed, income-producing assets with verified titles over speculative land banking." },
];

function EconomicReviewPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Insights / Economic Review"
          title="The Economy Behind Property Prices"
          copy="A plain-language read on the macro forces setting property values, rents and yields — and how our clients are positioning around them."
        />

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {INDICATORS.map((i) => (
              <div key={i.label} className="rounded-2xl border border-border bg-card p-6">
                <i.icon className="h-6 w-6 text-brand" />
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  {i.label}
                </p>
                <p className="mt-1 text-2xl font-bold text-foreground">{i.value}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{i.note}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-secondary">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
            <span className="eyebrow">Commentary</span>
            <h2 className="mt-5 max-w-2xl text-3xl font-bold text-foreground sm:text-4xl">
              What the Numbers Mean for Owners
            </h2>
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {COMMENTARY.map((c) => (
                <article key={c.title} className="rounded-2xl border border-border bg-card p-7">
                  <h3 className="text-lg font-semibold text-foreground">{c.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <span className="eyebrow">Outlook</span>
          <h2 className="mt-5 text-3xl font-bold text-foreground sm:text-4xl">Quarterly Outlook</h2>
          <div className="mt-8 divide-y divide-border rounded-2xl border border-border bg-card">
            {OUTLOOK.map((o) => (
              <div key={o.horizon} className="grid gap-2 p-6 sm:grid-cols-[200px_1fr]">
                <p className="text-sm font-semibold text-brand">{o.horizon}</p>
                <p className="text-sm leading-relaxed text-muted-foreground">{o.copy}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
