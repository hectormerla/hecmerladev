import { BADGE_VARIANTS } from "../constants"

const VariantStyles: { [key: string]: { icon: string; badge: string } } = {
  default: {
    icon: "bg-primary",
    badge: "border border-line bg-bg2 text-dim",
  },
  planned: {
    icon: "bg-dim",
    badge: "border border-line2 bg-dim/0 text-dim",
  },
  building: {
    icon: "bg-tertiary",
    badge: "border border-tertiary bg-tertiary/9 text-tertiary",
  },
  beta: {
    icon: "bg-ac",
    badge: "border border-ac bg-ac/9 text-ac",
  },
  live: {
    icon: "bg-primary",
    badge: "border border-primary bg-primary/9 text-primary",
  },
}

export type BadgeVariant = "default" | "planned" | "building" | "beta" | "live"

const StatusBadge = ({
  children,
  variant = BADGE_VARIANTS.default,
}: {
  children: React.ReactNode
  variant?: BadgeVariant
}) => {
  return (
    <div
      className={`flex items-center justify-start gap-2 py-1 px-3 mb-7 border rounded-full ${VariantStyles[variant].badge}`}
    >
      <div
        className={`absolute w-2 h-2 rounded-full ${VariantStyles[variant].icon} ${variant === BADGE_VARIANTS.default || variant === BADGE_VARIANTS.live ? "animate-ping" : ""}`}
      ></div>
      <div
        className={`w-2 h-2 rounded-full ${VariantStyles[variant].icon}`}
      ></div>
      <span className="text-[11px] uppercase font-jetbrains tracking-widest">
        {children}
      </span>
    </div>
  )
}

export default StatusBadge
