import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Calculator, Info } from "lucide-react";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHero } from "@/components/page-hero";
import {
  BEDROOMS,
  COMPARABLES,
  CONDITIONS,
  LGAS,
  PROPERTY_TYPES,
  estimateRent,
  formatNaira,
  getLga,
  type RentEstimate,
} from "@/lib/rent-data";

export const Route = createFileRoute("/insights/rent-checker")({
  head: () => ({
    meta: [
      { title: "Rent Checker | Estimate Property Rent Instantly" },
      {
        name: "description",
        content:
          "Check an indicative annual and monthly rent range by location, property type, bedrooms and condition using our benchmark rate tables.",
      },
      { property: "og:title", content: "Rent Checker — Polar Estate Broker" },
      {
        property: "og:description",
        content:
          "Estimate what a property should rent for, with comparables from our managed portfolio.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: RentCheckerPage,
});

const selectClass =
  "mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-brand";

function RentCheckerPage() {
  const [lga, setLga] = useState(LGAS[0].value);
  const [district, setDistrict] = useState(LGAS[0].districts[0].value);
  const [propertyType, setPropertyType] = useState(PROPERTY_TYPES[0].value);
  const [bedrooms, setBedrooms] = useState("3");
  const [condition, setCondition] = useState("good");
  const [result, setResult] = useState<RentEstimate | null>(null);

  const districts = getLga(lga).districts;

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Insights / Rent Checker"
          title="What Should This Property Rent For?"
          copy="Get an indicative rent range in seconds, built from achieved rents across the portfolio we manage and current asking rents in each location."
        />

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setResult(
                  estimateRent({ lga, district, propertyType, bedrooms, condition }),
                );
              }}
              className="rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-card)]"
            >
              <div className="flex items-center gap-3">
                <Calculator className="h-5 w-5 text-brand" />
                <h2 className="text-xl font-semibold text-foreground">Rent Estimator</h2>
              </div>

              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <label className="block text-sm font-medium text-foreground">
                  Local Govt Area
                  <select
                    value={lga}
                    onChange={(e) => {
                      const next = e.target.value;
                      setLga(next);
                      setDistrict(getLga(next).districts[0].value);
                    }}
                    className={selectClass}
                  >
                    {LGAS.map((o) => (
                      <option key={o.value} value={o.value}>
                        {o.label}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="block text-sm font-medium text-foreground">
                  City / District
                  <select
                    value={district}
                    onChange={(e) => setDistrict(e.target.value)}
                    className={selectClass}
                  >
                    {districts.map((o) => (
                      <option key={o.value} value={o.value}>
                        {o.label}
                      </option>
                    ))}
                  </select>
                </label>


                <label className="block text-sm font-medium text-foreground">
                  Property type
                  <select
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value)}
                    className={selectClass}
                  >
                    {PROPERTY_TYPES.map((o) => (
                      <option key={o.value} value={o.value}>
                        {o.label}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="block text-sm font-medium text-foreground">
                  Bedrooms
                  <select
                    value={bedrooms}
                    onChange={(e) => setBedrooms(e.target.value)}
                    className={selectClass}
                  >
                    {BEDROOMS.map((o) => (
                      <option key={o.value} value={o.value}>
                        {o.label}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="block text-sm font-medium text-foreground">
                  Condition
                  <select
                    value={condition}
                    onChange={(e) => setCondition(e.target.value)}
                    className={selectClass}
                  >
                    {CONDITIONS.map((o) => (
                      <option key={o.value} value={o.value}>
                        {o.label}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <button
                type="submit"
                className="mt-7 w-full rounded-lg bg-brand px-6 py-3 text-sm font-semibold text-brand-foreground transition-colors hover:bg-primary"
              >
                Check rent estimate
              </button>

              <p className="mt-4 flex gap-2 text-xs leading-relaxed text-muted-foreground">
                <Info className="mt-0.5 h-4 w-4 shrink-0" />
                Indicative only. A formal rental valuation considers the exact
                property, finishes, service charge and tenancy terms.
              </p>
            </form>

            <div className="rounded-2xl border border-border bg-secondary p-8">
              {result ? (
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                    Estimated annual rent
                  </p>
                  <p className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">
                    {formatNaira(result.low)} – {formatNaira(result.high)}
                  </p>
                  <p className="mt-3 text-sm text-muted-foreground">
                    Mid-point {formatNaira(result.mid)} per year · about{" "}
                    {formatNaira(result.monthly)} per month
                  </p>
                  <p className="mt-6 rounded-xl border border-border bg-card p-5 text-sm leading-relaxed text-muted-foreground">
                    {result.yieldNote}
                  </p>
                  <Link
                    to="/contact"
                    className="mt-6 inline-flex rounded-lg bg-brand px-5 py-3 text-sm font-semibold text-brand-foreground transition-colors hover:bg-primary"
                  >
                    Request a formal valuation
                  </Link>
                </div>
              ) : (
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    Your estimate appears here
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Choose a location, property type, bedroom count and condition,
                    then run the check. We benchmark against achieved rents in our
                    managed portfolio rather than asking prices alone.
                  </p>
                </div>
              )}

              <div className="mt-8 border-t border-border pt-6">
                <h4 className="text-sm font-semibold text-foreground">Recent comparables</h4>
                <ul className="mt-4 space-y-3">
                  {COMPARABLES.map((c) => (
                    <li key={c.title} className="flex justify-between gap-4 text-sm">
                      <span className="text-muted-foreground">
                        {c.title}
                        <span className="block text-xs text-muted-foreground/70">{c.area}</span>
                      </span>
                      <span className="shrink-0 font-semibold text-foreground">{c.rent}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
