export const sanityConfig = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "",
  readToken: process.env.SANITY_API_READ_TOKEN ?? "",
};

export const sanitySchemaBlueprint = [
  "brand",
  "goal",
  "routine",
  "productReference",
  "bundle",
  "journalEntry",
  "editorialModule",
];

export function isSanityConfigured() {
  return Boolean(sanityConfig.projectId && sanityConfig.dataset);
}

export function getSanityStatusLabel() {
  return isSanityConfigured() ? "Sanity ready" : "Mock content mode";
}

