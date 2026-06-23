import type { BadgeVariant } from "./components/StatusBadge"

export const BADGE_VARIANTS: { [key in BadgeVariant]: BadgeVariant } = {
  default: "default",
  planned: "planned",
  building: "building",
  beta: "beta",
  live: "live",
}
