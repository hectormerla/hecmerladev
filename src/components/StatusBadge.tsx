const VariantStyles: { [key: string]: { icon: string; badge: string } } = {
  default: {
    icon: "bg-primary",
    badge: "border border-line bg-bg2 text-dim",
  },
  live: {
    icon: "bg-primary",
    badge: "border border-primary bg-primary/9 text-primary",
  },
  beta: {
    icon: "bg-tertiary",
    badge: "border border-tertiary bg-tertiary/9 text-tertiary",
  },
  soon: {
    icon: "bg-dim",
    badge: "border border-line2 bg-dim/0 text-dim",
  },
}

const StatusBadge = ({
  children,
  variant = "default",
}: {
  children: React.ReactNode
  variant?: "default" | "live" | "beta" | "soon"
}) => {
  return (
    <div
      className={`flex items-center justify-start gap-2 py-1 px-3 mb-7 border rounded-full ${VariantStyles[variant].badge}`}
    >
      <div
        className={`absolute w-2 h-2 rounded-full ${VariantStyles[variant].icon} ${variant === "default" || variant === "live" ? "animate-ping" : ""}`}
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
