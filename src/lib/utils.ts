/**
 * Utility and helper functions
 *
 * Add shared utilities here.
 * Example: date formatters, API helpers, validators.
 */

export function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
