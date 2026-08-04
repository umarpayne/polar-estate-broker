import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "@tanstack/react-router";
import logo from "@/assets/polar-logo.png.asset.json";
import { INSIGHTS_LINKS } from "@/components/site-header";

export function SiteFooter() {
  return (
    <footer className="surface-ink">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr]">

        <div>
          <div className="inline-flex rounded-lg bg-background px-3 py-2">
            <img
              src={logo.url}
              alt="Polar Estate Broker"
              width={540}
              height={140}
              loading="lazy"
              className="h-9 w-auto"
            />
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-foreground/70">
            A real estate and property management firm structuring, selling and
            safeguarding residential and commercial property portfolios.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-ink-foreground/60">
            Services
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm text-ink-foreground/80">
            <li>Property Sales</li>
            <li>Property Portfolios</li>
            <li>Property Management</li>
            <li>Facility Management</li>
            <li>Land &amp; Development Advisory</li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-ink-foreground/60">
            Contact
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-ink-foreground/80">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
              Polar House, Central Business District
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
              <a href="tel:+2348000000000">+234 800 000 0000</a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
              <a href="mailto:hello@polarestatebroker.com">
                hello@polarestatebroker.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ink-foreground/15">
        <div className="mx-auto max-w-7xl px-4 py-5 text-xs text-ink-foreground/60 sm:px-6">
          © {new Date().getFullYear()} Polar Estate Broker. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
