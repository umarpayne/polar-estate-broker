import { createFileRoute } from "@tanstack/react-router";
import { Briefcase, Home, MapPinned, Trees } from "lucide-react";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHero } from "@/components/page-hero";

export const Route = createFileRoute("/insights/market-analysis")({
  head: () => ({
    meta: [
      { title: "Market Analysis | Prices, Yields & Demand Drivers" },
      {
        name: "description",
        content:
          "Location-by-location property prices, rental yields and demand drivers across residential, commercial and land segments.",
      },
      { property: "og:title", content: "Property Market Analysis" },
      {
        property: "og:description",
        content:
          "Where prices, yields and demand are moving — a location and segment breakdown from Polar Estate Broker.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MarketAnalysisPage,
});

const LOCATIONS = [
  { lga: "Eti-Osa", area: "Ikoyi", price: "₦450m", yield: "4.6%", change: "+5.8%", demand: "HNI owner-occupiers" },
  { lga: "Eti-Osa", area: "Victoria Island", price: "₦320m", yield: "5.4%", change: "+6.4%", demand: "Corporate lets" },
  { lga: "Eti-Osa", area: "Lekki Phase 1", price: "₦185m", yield: "6.2%", change: "+7.9%", demand: "Diaspora investors" },
  { lga: "Eti-Osa", area: "Ajah", price: "₦85m", yield: "7.8%", change: "+10.2%", demand: "Young families" },
  { lga: "Ikeja", area: "Ikeja GRA", price: "₦210m", yield: "5.8%", change: "+4.7%", demand: "Corporate & expatriate" },
  { lga: "Ikeja", area: "Opebi / Allen", price: "₦140m", yield: "6.9%", change: "+4.1%", demand: "Mixed-use occupiers" },
  { lga: "Ikeja", area: "Ogba", price: "₦72m", yield: "8.3%", change: "+6.6%", demand: "Value buyers" },
  { lga: "Kosofe", area: "Gbagada", price: "₦125m", yield: "7.1%", change: "+8.4%", demand: "Upgraders" },
  { lga: "Kosofe", area: "Ogudu GRA", price: "₦98m", yield: "7.6%", change: "+7.2%", demand: "Young families" },
  { lga: "Kosofe", area: "Ketu Alapere", price: "₦52m", yield: "9.0%", change: "+5.5%", demand: "First-time buyers" },
  { lga: "Lagos Mainland", area: "Yaba", price: "₦110m", yield: "8.1%", change: "+9.3%", demand: "Students & tech workers" },
  { lga: "Surulere", area: "Bode Thomas", price: "₦88m", yield: "7.9%", change: "+4.9%", demand: "Mid-market renters" },
  { lga: "Amuwo-Odofin", area: "Festac Town", price: "₦68m", yield: "8.6%", change: "+5.1%", demand: "Value buyers" },
  { lga: "Ibeju-Lekki", area: "Lakowe / Eleko", price: "₦45m", yield: "9.4%", change: "+13.7%", demand: "Land & off-plan investors" },
];


const SEGMENTS = [
  {
    icon: Home,
    title: "Residential",
    stat: "68% of transactions",
    copy: "Three-bedroom family units remain the deepest pool of buyers and tenants. Serviced estates with steady power and security command a 12–18% rent premium over comparable unserviced stock.",
  },
  {
    icon: Briefcase,
    title: "Commercial",
    stat: "21% of transactions",
    copy: "Occupiers are consolidating into smaller, better-fitted floors. Grade-A offices with backup infrastructure hold occupancy while older stock discounts to fill space.",
  },
  {
    icon: Trees,
    title: "Land & Development",
    stat: "11% of transactions",
    copy: "Title quality is the whole trade. Verified, gazetted parcels on serviced corridors continue to appreciate; unverified plots are effectively illiquid.",
  },
];

const DRIVERS = [
  { title: "Infrastructure", copy: "New road and power upgrades reliably lift values along the affected corridor within 12–24 months." },
  { title: "Security & services", copy: "Estates with managed security, water and power sustain the highest occupancy and lowest arrears." },
  { title: "Diaspora inflows", copy: "FX-strong buyers dominate the ₦100m+ bracket, favouring completed and tenanted assets." },
  { title: "Short-let economy", copy: "Tourism and business travel keep furnished one and two-bedroom units at premium effective yields." },
];

function MarketAnalysisPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Insights / Market Analysis"
          title="Where Prices, Yields and Demand Are Moving"
          copy="Our desk tracks asking prices, achieved rents and absorption across the locations we transact in — so you can compare markets before committing capital."
        />

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <div className="flex items-center gap-3">
            <MapPinned className="h-5 w-5 text-brand" />
            <h2 className="text-2xl font-bold text-foreground">Location Benchmarks</h2>
          </div>
          <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
            Median asking price for a standard three-bedroom unit, indicative gross
            rental yield and 12-month price movement.
          </p>

          <div className="mt-8 overflow-x-auto rounded-2xl border border-border">
            <table className="w-full min-w-[720px] border-collapse text-left text-sm">
              <thead className="bg-secondary">
                <tr>
                  <th className="px-5 py-4 font-semibold text-foreground">Location</th>
                  <th className="px-5 py-4 font-semibold text-foreground">Median Price</th>
                  <th className="px-5 py-4 font-semibold text-foreground">Gross Yield</th>
                  <th className="px-5 py-4 font-semibold text-foreground">12-Month Change</th>
                  <th className="px-5 py-4 font-semibold text-foreground">Primary Demand</th>
                </tr>
              </thead>
              <tbody className="bg-card">
                {LOCATIONS.map((l) => (
                  <tr key={l.area} className="border-t border-border">
                    <td className="px-5 py-4 font-medium text-foreground">{l.area}</td>
                    <td className="px-5 py-4 text-muted-foreground">{l.price}</td>
                    <td className="px-5 py-4 text-muted-foreground">{l.yield}</td>
                    <td className="px-5 py-4 font-semibold text-brand">{l.change}</td>
                    <td className="px-5 py-4 text-muted-foreground">{l.demand}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="bg-secondary">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
            <span className="eyebrow">Segments</span>
            <h2 className="mt-5 text-3xl font-bold text-foreground sm:text-4xl">Segment Breakdown</h2>
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {SEGMENTS.map((s) => (
                <article key={s.title} className="rounded-2xl border border-border bg-card p-7">
                  <s.icon className="h-7 w-7 text-brand" />
                  <h3 className="mt-5 text-lg font-semibold text-foreground">{s.title}</h3>
                  <p className="mt-1 text-sm font-semibold text-brand">{s.stat}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <span className="eyebrow">Demand drivers</span>
          <h2 className="mt-5 text-3xl font-bold text-foreground sm:text-4xl">What Is Actually Moving the Market</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {DRIVERS.map((d) => (
              <div key={d.title} className="rounded-2xl border border-border bg-card p-7">
                <h3 className="text-base font-semibold text-foreground">{d.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d.copy}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
