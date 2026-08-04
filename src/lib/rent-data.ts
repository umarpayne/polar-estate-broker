export type Option = { value: string; label: string };

export const LOCATIONS: Option[] = [
  { value: "cbd", label: "Central Business District" },
  { value: "waterside", label: "Waterside / Marina" },
  { value: "northgate", label: "Northgate Suburb" },
  { value: "airport", label: "Airport Corridor" },
  { value: "oldtown", label: "Old Town" },
  { value: "greenbelt", label: "Greenbelt Estates" },
];

export const PROPERTY_TYPES: Option[] = [
  { value: "apartment", label: "Apartment / Flat" },
  { value: "terrace", label: "Terrace" },
  { value: "semi", label: "Semi-detached Duplex" },
  { value: "detached", label: "Detached Duplex" },
  { value: "office", label: "Office Space" },
];

export const BEDROOMS: Option[] = [
  { value: "1", label: "1 bedroom" },
  { value: "2", label: "2 bedrooms" },
  { value: "3", label: "3 bedrooms" },
  { value: "4", label: "4 bedrooms" },
  { value: "5", label: "5+ bedrooms" },
];

export const CONDITIONS: Option[] = [
  { value: "serviced", label: "Serviced & furnished" },
  { value: "newly", label: "Newly built, unfurnished" },
  { value: "good", label: "Good condition" },
  { value: "basic", label: "Basic / older stock" },
];

/** Base annual rent (NGN) for a 3-bedroom, good-condition apartment. */
const LOCATION_BASE: Record<string, number> = {
  cbd: 9_500_000,
  waterside: 12_000_000,
  northgate: 5_200_000,
  airport: 4_400_000,
  oldtown: 3_100_000,
  greenbelt: 7_000_000,
};

const TYPE_FACTOR: Record<string, number> = {
  apartment: 1,
  terrace: 1.15,
  semi: 1.3,
  detached: 1.6,
  office: 1.25,
};

const BEDROOM_FACTOR: Record<string, number> = {
  "1": 0.45,
  "2": 0.7,
  "3": 1,
  "4": 1.35,
  "5": 1.75,
};

const CONDITION_FACTOR: Record<string, number> = {
  serviced: 1.45,
  newly: 1.15,
  good: 1,
  basic: 0.78,
};

export type RentEstimate = {
  low: number;
  mid: number;
  high: number;
  monthly: number;
  yieldNote: string;
};

export function estimateRent(input: {
  location: string;
  propertyType: string;
  bedrooms: string;
  condition: string;
}): RentEstimate {
  const base = LOCATION_BASE[input.location] ?? 5_000_000;
  const mid = Math.round(
    (base *
      (TYPE_FACTOR[input.propertyType] ?? 1) *
      (BEDROOM_FACTOR[input.bedrooms] ?? 1) *
      (CONDITION_FACTOR[input.condition] ?? 1)) /
      50_000,
  ) * 50_000;

  return {
    low: Math.round((mid * 0.88) / 50_000) * 50_000,
    mid,
    high: Math.round((mid * 1.14) / 50_000) * 50_000,
    monthly: Math.round(mid / 12 / 1_000) * 1_000,
    yieldNote:
      input.condition === "serviced"
        ? "Serviced units let faster but carry higher running costs — net yield is typically 1.5–2 points below gross."
        : "Budget 8–12% of gross rent for management, maintenance and void periods when modelling net yield.",
  };
}

export function formatNaira(value: number) {
  return `₦${value.toLocaleString("en-NG")}`;
}

export const COMPARABLES = [
  { title: "3-bed apartment, serviced estate", area: "Northgate Suburb", rent: "₦7.4m / year" },
  { title: "2-bed flat, mid-rise block", area: "Central Business District", rent: "₦6.8m / year" },
  { title: "4-bed semi-detached duplex", area: "Greenbelt Estates", rent: "₦12.3m / year" },
  { title: "1-bed furnished short-let", area: "Airport Corridor", rent: "₦3.2m / year" },
];
