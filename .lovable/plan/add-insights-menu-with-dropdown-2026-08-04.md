# Add Insights menu with dropdown

Restore "Insights" to the main navigation, between Portfolio and Contact, as a dropdown with four items.

## Dropdown items and pages

| Menu item | Route | Page content |
|---|---|---|
| Economic Review | `/insights/economic-review` | Macro overview of the property economy: interest rates, inflation, FX and construction costs, with commentary cards and a quarterly outlook. |
| Market Analysis | `/insights/market-analysis` | Location-by-location price and yield tables, demand drivers, and segment breakdown (residential, commercial, land). |
| Rent Checker | `/insights/rent-checker` | Interactive estimator: pick location, property type, bedrooms and condition, get an indicative rent range plus comparable listings. Front-end only calculation using an internal rate table. |
| Blogs | `/insights/blogs` | Article grid with cover images, categories, dates and excerpts; static article data for now. |

An `/insights` landing page will also exist, summarising the four sections.

## Navigation behaviour

- Desktop: hovering/clicking "Insights" opens a dropdown panel with the four links; active state highlights when on any insights route.
- Mobile: "Insights" expands inline in the existing mobile menu, showing the four sub-links indented.

## Technical notes

- New route files: `src/routes/insights.index.tsx`, `insights.economic-review.tsx`, `insights.market-analysis.tsx`, `insights.rent-checker.tsx`, `insights.blogs.tsx`, plus `insights.tsx` layout rendering `<Outlet />`.
- `src/components/site-header.tsx` nav array gains an item with `children`; dropdown built with the existing shadcn `navigation-menu` (or a small custom popover if unavailable) so styling matches the current header.
- Each page reuses `PageHero` and existing design tokens, and defines its own `head()` with unique title/description/og tags.
- Rent Checker is client-side only (no backend); data tables live in a small module under `src/lib/`.
- Footer link list updated to include the Insights sections.
