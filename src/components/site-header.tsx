import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/polar-logo.png.asset.json";

const NAV = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Insights", href: "#case-study" },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:px-6 lg:py-4">
        <a href="#top" className="flex min-w-0 items-center">
          <img
            src={logo.url}
            alt="Polar Estate Broker"
            width={540}
            height={140}
            className="h-9 w-auto shrink-0 sm:h-10"
          />
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden text-sm font-semibold text-foreground transition-colors hover:text-brand xl:inline-flex"
          >
            Request Valuation
          </a>
          <a
            href="#contact"
            className="hidden rounded-lg bg-brand px-5 py-2.5 text-sm font-semibold text-brand-foreground shadow-[var(--shadow-card)] transition-colors hover:bg-primary sm:inline-flex"
          >
            Book Consultation
          </a>
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
            <a
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block border-b border-border py-3 text-sm font-medium text-foreground last:border-0"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-3 block rounded-lg bg-brand px-5 py-3 text-center text-sm font-semibold text-brand-foreground"
          >
            Book Consultation
          </a>
        </nav>
      )}
    </header>
  );
}
