import { useEffect, useRef, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { ChevronDown, Menu, X } from "lucide-react";
import logo from "@/assets/polar-logo.png.asset.json";

const NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Portfolio", to: "/portfolio" },
] as const;

export const INSIGHTS_LINKS = [
  { label: "Economic Review", to: "/insights/economic-review" },
  { label: "Market Analysis", to: "/insights/market-analysis" },
  { label: "Rent Checker", to: "/insights/rent-checker" },
  { label: "Blogs", to: "/insights/blogs" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [insightsOpen, setInsightsOpen] = useState(false);
  const [mobileInsights, setMobileInsights] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const insightsActive = pathname.startsWith("/insights");

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setInsightsOpen(false);
      }
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:py-4">
        <Link to="/" className="flex min-w-0 items-center">
          <img
            src={logo.url}
            alt="Polar Estate Broker"
            width={540}
            height={140}
            className="h-9 w-auto shrink-0 sm:h-10"
          />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-primary" }}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}

          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={() => setInsightsOpen(true)}
            onMouseLeave={() => setInsightsOpen(false)}
          >
            <button
              type="button"
              aria-haspopup="true"
              aria-expanded={insightsOpen}
              onClick={() => setInsightsOpen((v) => !v)}
              className={`inline-flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-primary ${
                insightsActive ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Insights
              <ChevronDown
                className={`h-4 w-4 transition-transform ${insightsOpen ? "rotate-180" : ""}`}
              />
            </button>

            {insightsOpen && (
              <div className="absolute left-1/2 top-full w-60 -translate-x-1/2 pt-3">
                <div className="overflow-hidden rounded-xl border border-border bg-popover p-1.5 shadow-[var(--shadow-card)]">
                  <Link
                    to="/insights"
                    onClick={() => setInsightsOpen(false)}
                    className="block rounded-lg px-3.5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary hover:text-primary"
                  >
                    All Insights
                  </Link>
                  {INSIGHTS_LINKS.map((item) => (
                    <Link
                      key={item.label}
                      to={item.to}
                      onClick={() => setInsightsOpen(false)}
                      activeProps={{ className: "text-primary" }}
                      className="block rounded-lg px-3.5 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link
            to="/contact"
            activeProps={{ className: "text-primary" }}
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden text-sm font-semibold text-foreground transition-colors hover:text-brand xl:inline-flex"
          >
            Request Valuation
          </Link>
          <Link
            to="/contact"
            className="hidden rounded-lg bg-brand px-5 py-2.5 text-sm font-semibold text-brand-foreground shadow-[var(--shadow-card)] transition-colors hover:bg-primary sm:inline-flex"
          >
            Book Consultation
          </Link>
          <button
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border text-foreground lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-background px-4 pb-4 lg:hidden">
          {NAV.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              onClick={() => setOpen(false)}
              className="block border-b border-border py-3 text-sm font-medium text-foreground"
            >
              {item.label}
            </Link>
          ))}

          <div className="border-b border-border">
            <button
              type="button"
              aria-expanded={mobileInsights}
              onClick={() => setMobileInsights((v) => !v)}
              className="flex w-full items-center justify-between py-3 text-sm font-medium text-foreground"
            >
              Insights
              <ChevronDown
                className={`h-4 w-4 transition-transform ${mobileInsights ? "rotate-180" : ""}`}
              />
            </button>
            {mobileInsights && (
              <div className="pb-2 pl-4">
                <Link
                  to="/insights"
                  onClick={() => setOpen(false)}
                  className="block py-2 text-sm text-muted-foreground"
                >
                  All Insights
                </Link>
                {INSIGHTS_LINKS.map((item) => (
                  <Link
                    key={item.label}
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className="block py-2 text-sm text-muted-foreground"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="block border-b border-border py-3 text-sm font-medium text-foreground last:border-0"
          >
            Contact
          </Link>

          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-3 block rounded-lg bg-brand px-5 py-3 text-center text-sm font-semibold text-brand-foreground"
          >
            Book Consultation
          </Link>
        </nav>
      )}
    </header>
  );
}
