export type Option = { value: string; label: string };

export type District = Option & { base: number };

export type LGA = {
  value: string;
  label: string;
  districts: District[];
};

/** Base annual rent (NGN) per district for a 3-bedroom, good-condition apartment. */
export const LGAS: LGA[] = [
  {
    value: "kosofe",
    label: "Kosofe Local Govt Area",
    districts: [
      { value: "ogudu", label: "Ogudu", base: 4_200_000 },
      { value: "iworishoki", label: "Iworishoki", base: 3_000_000 },
      { value: "ojota", label: "Ojota", base: 3_400_000 },
      { value: "ketu-ikosi", label: "Ketu Ikosi", base: 2_800_000 },
      { value: "ketu-alapere", label: "Ketu Alapere", base: 2_600_000 },
      { value: "gbagada", label: "Gbagada", base: 5_500_000 },
    ],
  },
  {
    value: "eti-osa",
    label: "Eti-Osa Local Govt Area",
    districts: [
      { value: "ikoyi", label: "Ikoyi", base: 15_000_000 },
      { value: "victoria-island", label: "Victoria Island", base: 13_000_000 },
      { value: "lekki-phase-1", label: "Lekki Phase 1", base: 9_000_000 },
      { value: "ajah", label: "Ajah", base: 4_000_000 },
      { value: "chevron-igbo-efon", label: "Chevron / Igbo Efon", base: 5_500_000 },
    ],
  },
  {
    value: "ikeja",
    label: "Ikeja Local Govt Area",
    districts: [
      { value: "gra-ikeja", label: "Ikeja GRA", base: 9_500_000 },
      { value: "opebi", label: "Opebi", base: 6_000_000 },
      { value: "allen", label: "Allen Avenue", base: 5_600_000 },
      { value: "oregun", label: "Oregun", base: 4_200_000 },
      { value: "ogba", label: "Ogba", base: 3_400_000 },
    ],
  },
  {
    value: "surulere",
    label: "Surulere Local Govt Area",
    districts: [
      { value: "adeniran-ogunsanya", label: "Adeniran Ogunsanya", base: 4_000_000 },
      { value: "bode-thomas", label: "Bode Thomas", base: 4_400_000 },
      { value: "aguda", label: "Aguda", base: 3_200_000 },
      { value: "ijesha", label: "Ijesha", base: 2_400_000 },
    ],
  },
  {
    value: "lagos-mainland",
    label: "Lagos Mainland Local Govt Area",
    districts: [
      { value: "yaba", label: "Yaba", base: 4_600_000 },
      { value: "ebute-metta", label: "Ebute Metta", base: 2_800_000 },
      { value: "akoka", label: "Akoka", base: 3_200_000 },
      { value: "iwaya", label: "Iwaya", base: 2_500_000 },
    ],
  },
];

export function getLga(value: string) {
  return LGAS.find((l) => l.value === value) ?? LGAS[0];
}

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
  lga: string;
  district: string;
  propertyType: string;
  bedrooms: string;
  condition: string;
}): RentEstimate {
  const lga = getLga(input.lga);
  const district = lga.districts.find((d) => d.value === input.district) ?? lga.districts[0];
  const mid =
    Math.round(
      (district.base *
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
  { title: "3-bed apartment, serviced estate", area: "Ogudu, Kosofe", rent: "₦6.2m / year" },
  { title: "2-bed flat, mid-rise block", area: "Gbagada, Kosofe", rent: "₦4.1m / year" },
  { title: "4-bed semi-detached duplex", area: "Ikeja GRA, Ikeja", rent: "₦16.5m / year" },
  { title: "1-bed furnished short-let", area: "Ketu Alapere, Kosofe", rent: "₦1.7m / year" },
];
