import titleVerification from "@/assets/blog-title-verification.jpg";
import rentReview from "@/assets/blog-rent-review.jpg";
import yieldImg from "@/assets/blog-yield.jpg";
import maintenance from "@/assets/blog-maintenance.jpg";
import tenancy from "@/assets/blog-tenancy.jpg";
import portfolio from "@/assets/blog-portfolio.jpg";

export type BlogPost = {
  slug: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  title: string;
  excerpt: string;
  image: string;
  body: string[];
};

export const POSTS: BlogPost[] = [
  {
    slug: "title-verification-seven-checks",
    category: "Buying",
    date: "12 July 2026",
    readTime: "6 min read",
    author: "Polar Transaction Desk",
    title: "Title Verification: The Seven Checks We Never Skip",
    excerpt:
      "Before any property reaches a client, it passes a documented search covering root of title, encumbrances, survey alignment and government acquisition status.",
    image: titleVerification,
    body: [
      "Every acquisition we broker starts with the same discipline: no property is presented to a client until its title has been traced, searched and independently confirmed. Sellers rarely volunteer defects, and in Lagos the cost of discovering one after payment is measured in years, not naira.",
      "The first check is the root of title. We trace ownership backwards through every transfer to establish an unbroken chain, and we confirm that each transfer was properly executed and, where required, consented to by the Governor.",
      "The second is a formal search at the Lands Registry. This confirms the registered owner, the instrument number, and whether any mortgage, lis pendens or caveat sits against the parcel.",
      "The third is survey alignment. We commission a chart of the survey plan to confirm the coordinates fall where the seller says they do, and that the parcel is not within a government acquisition, road setback or drainage alignment.",
      "The fourth and fifth checks cover physical possession and community claims — who occupies the land today, and whether any family or omo-onile interest remains unsettled. A clean paper title over a contested plot is not a clean title.",
      "The sixth is outstanding charges: ground rent, land use charge, service charge arrears and estate levies all transfer with the property unless they are settled at closing.",
      "The seventh is the closing structure itself. Funds move against documents, not promises, and we hold the completion pack until every one of the preceding checks is signed off in writing.",
    ],
  },
  {
    slug: "structuring-a-rent-review",
    category: "Landlords",
    date: "28 June 2026",
    readTime: "5 min read",
    author: "Property Management Desk",
    title: "How to Structure a Rent Review Without Losing a Good Tenant",
    excerpt:
      "Annual resets protect real income, but abrupt increases trigger voids. Here is the staged approach we use across 420 managed homes.",
    image: rentReview,
    body: [
      "A rent review is a commercial conversation, not an announcement. The landlords who hold the highest occupancy across our managed portfolio are the ones who treat it that way.",
      "Start with evidence. Pull three to five genuine comparables from the same district — not the same local government area, the same street cluster — and adjust for finish, service charge and parking.",
      "Give notice early. Ninety days lets a good tenant plan; thirty days forces them to shop. Voids of two months wipe out the gain from almost any increase you were contemplating.",
      "Stage large corrections. Where market rent has run twenty per cent ahead of a sitting tenant, two annual steps almost always net more than one confrontational jump.",
      "Offer something in return. A repainted interior, a serviced generator or a two-year fixed term converts a price rise into a negotiated renewal.",
      "Finally, document it. Every review we issue carries the comparable set, the effective date and the renewal terms in one letter, so there is nothing left to argue about later.",
    ],
  },
  {
    slug: "gross-yield-vs-net-yield",
    category: "Investment",
    date: "9 June 2026",
    readTime: "7 min read",
    author: "Advisory Desk",
    title: "Gross Yield vs Net Yield: What Investors Keep Getting Wrong",
    excerpt:
      "Service charges, void periods, agency fees and maintenance reserves routinely take two to three points off a headline yield figure.",
    image: yieldImg,
    body: [
      "Gross yield is annual rent divided by purchase price. It is useful for screening and dangerous for deciding, because it assumes a property that is always let and never repaired.",
      "Net yield subtracts the costs that actually arrive: service charge shortfalls, agency and management fees, statutory charges, insurance, a void allowance and a maintenance reserve.",
      "On a typical Lagos apartment, a headline nine per cent gross commonly lands between six and seven per cent net once a one-month annual void and a five per cent maintenance reserve are applied.",
      "The gap widens in serviced developments, where the levy can absorb a full point of yield on its own, and narrows in low-density residential where the owner controls maintenance directly.",
      "We model every acquisition on net, with a stated void assumption and a reserve line, and we show clients the gross figure only for context.",
      "The practical test: if a deal only works on gross yield, it does not work.",
    ],
  },
  {
    slug: "maintenance-calendar",
    category: "Facility Management",
    date: "21 May 2026",
    readTime: "5 min read",
    author: "Facility Management Desk",
    title: "The Maintenance Calendar That Prevents Emergency Spend",
    excerpt:
      "Planned quarterly servicing on generators, pumps and roofs costs a fraction of reactive callouts — and keeps tenants renewing.",
    image: maintenance,
    body: [
      "Reactive maintenance is the most expensive way to run a building. An emergency generator repair at midnight costs multiples of the scheduled service that would have prevented it, and the tenant remembers the outage at renewal.",
      "Our standard calendar runs on quarters. Generators are serviced every quarter with oil, filters and load tests logged. Water pumps and pressure tanks are inspected on the same cycle.",
      "Roofs, gutters and drainage are cleared twice a year, before and after the rains — the single highest-return item on the list in Lagos.",
      "Electrical distribution boards are thermally inspected annually, and fire equipment is certified annually without exception.",
      "Interior common areas run on a three-year redecoration cycle so the building never looks tired enough to lose a viewing.",
      "Across the properties we manage on this calendar, unplanned spend runs roughly a third of what it does on properties we inherit without one.",
    ],
  },
  {
    slug: "reading-a-tenancy-agreement",
    category: "Tenants",
    date: "4 May 2026",
    readTime: "6 min read",
    author: "Lettings Desk",
    title: "Reading a Tenancy Agreement Before You Sign",
    excerpt:
      "Service charge scope, repair obligations, notice periods and renewal terms are where most disputes actually begin.",
    image: tenancy,
    body: [
      "Most tenancy disputes are not caused by bad faith. They are caused by two parties who read the same clause differently a year after signing.",
      "Check what the service charge actually covers. Security, diesel, cleaning, water and lift maintenance should be itemised; anything described only as 'estate expenses' is an open invoice.",
      "Check the repair split. Who replaces the water heater, the air conditioner, the borehole pump? Structure and installed plant normally sit with the landlord; consumables and tenant-caused damage sit with you.",
      "Check the notice period and how it is served. Six months for a yearly tenancy is common, but the agreement, not the assumption, governs.",
      "Check the renewal terms. A stated review mechanism — index-linked or comparable-based — is far better than silence.",
      "Finally, photograph the property on the day you take possession and attach the inventory to the agreement. It is the cheapest insurance available at check-out.",
    ],
  },
  {
    slug: "five-property-portfolio",
    category: "Portfolio",
    date: "18 April 2026",
    readTime: "8 min read",
    author: "Advisory Desk",
    title: "Building a Five-Property Portfolio on Staged Payments",
    excerpt:
      "A realistic path from one income-producing unit to a diversified portfolio across two locations and two asset classes.",
    image: portfolio,
    body: [
      "Portfolios are built from cash flow, not from ambition. The clients who reach five units do it by making each property fund part of the next.",
      "Property one should be boring: a well-located, easily lettable unit in an established district with reliable demand. Its job is to prove the income and establish a rental track record.",
      "Property two is usually acquired on a staged developer payment plan, funded partly by the first property's rent and partly by savings, so no single month carries an unmanageable commitment.",
      "By property three, diversify location. Two assets in the same street cluster share the same downside — a road closure, a flooding event, an estate levy dispute.",
      "By property four, diversify asset class. A small commercial or short-let unit behaves differently through a rate cycle than a family apartment.",
      "Property five is where structure matters more than acquisition: consolidated management, one maintenance calendar, one reporting pack, and a written exit rule for the weakest asset.",
      "The whole sequence typically runs six to eight years on a disciplined plan — and almost never works without professional management from property two onwards.",
    ],
  },
];

export function getPost(slug: string) {
  return POSTS.find((p) => p.slug === slug);
}
