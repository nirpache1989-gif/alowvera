import {
  brands,
  bundles,
  editorialModules,
  goals,
  journalEntries,
  products,
  routines,
  siteSettings,
} from "@/lib/site-data";
import type { Brand, Bundle, Goal, JournalEntry, Product, Routine } from "@/lib/types";

export function getSiteSettings() {
  return siteSettings;
}

export function getBrands(): Brand[] {
  return brands;
}

export function getBrand(slug: string): Brand | undefined {
  return brands.find((brand) => brand.slug === slug);
}

export function getGoals(): Goal[] {
  return goals;
}

export function getGoal(slug: string): Goal | undefined {
  return goals.find((goal) => goal.slug === slug);
}

export function getRoutines(): Routine[] {
  return routines;
}

export function getRoutine(slug: string): Routine | undefined {
  return routines.find((routine) => routine.slug === slug);
}

export function getProducts(): Product[] {
  return products;
}

export function getProduct(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function getBundles(): Bundle[] {
  return bundles;
}

export function getBundle(slug: string): Bundle | undefined {
  return bundles.find((bundle) => bundle.slug === slug);
}

export function getJournalEntries(): JournalEntry[] {
  return journalEntries;
}

export function getJournalEntry(slug: string): JournalEntry | undefined {
  return journalEntries.find((entry) => entry.slug === slug);
}

export function getEditorialModules() {
  return editorialModules;
}

export function getProductsBySlugs(slugs: string[]) {
  return slugs
    .map((slug) => getProduct(slug))
    .filter((product): product is Product => Boolean(product));
}

export function getRoutinesBySlugs(slugs: string[]) {
  return slugs
    .map((slug) => getRoutine(slug))
    .filter((routine): routine is Routine => Boolean(routine));
}

export function getGoalsBySlugs(slugs: string[]) {
  return slugs
    .map((slug) => getGoal(slug))
    .filter((goal): goal is Goal => Boolean(goal));
}

export function getBrandProducts(brandSlug: string) {
  return products.filter((product) => product.brandSlug === brandSlug);
}

export function getProductsForGoal(goalSlug: string) {
  return products.filter((product) => product.goalSlugs.includes(goalSlug));
}

export function getProductsForRoutine(routineSlug: string) {
  return products.filter((product) => product.routineSlugs.includes(routineSlug));
}

export function getJournalForGoal(goalSlug: string) {
  return journalEntries.filter((entry) => entry.relatedGoalSlugs.includes(goalSlug));
}

