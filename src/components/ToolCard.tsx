import { BADGE_VARIANTS } from "../constants"
import IconHexagon from "./IconHexagon"
import StatusBadge, { type BadgeVariant } from "./StatusBadge"
import ToolBadge from "./ToolBadge"
import { useInView } from "react-intersection-observer"

const ToolCard = ({
  variant = "default",
  icon,
  toolName = "Tool Name",
  description = "A brief description of the tool goes here. It can be a few sentences long.",
  isFree = false,
  isFreemium = false,
  isPro = false,
  appUrl = "",
  index = 0,
}: {
  variant?: BadgeVariant
  icon?: React.ReactNode
  toolName: string
  description: string
  isFree?: boolean
  isFreemium?: boolean
  isPro?: boolean
  appUrl?: string
  index?: number
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const handleClick = () => {
    if (
      appUrl &&
      (variant === BADGE_VARIANTS.live || variant === BADGE_VARIANTS.beta)
    ) {
      window.open(appUrl, "_blank")
    }
  }

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${index * 100}ms` }}
      className={`relative flex flex-col w-full gap-4 p-6 bg-bg2 border border-line rounded-xl overflow-hidden ${variant === BADGE_VARIANTS.live || variant === BADGE_VARIANTS.beta ? "cursor-pointer" : ""} z-1 transition-all duration-500 ease-in ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      onClick={handleClick}
    >
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-brand"></div>
      <div className="flex justify-between items-center">
        <IconHexagon className="bg-bg3 w-12! h-14!">{icon}</IconHexagon>
        <StatusBadge variant={variant}>
          {variant.charAt(0).toUpperCase() + variant.slice(1)}
        </StatusBadge>
      </div>

      <div>
        <h3>{toolName}</h3>
        <p className="text-sm text-dim">{description}</p>
      </div>

      <div className="flex justify-start gap-2 items-center mt-auto">
        {isFree && <ToolBadge>Free</ToolBadge>}
        {isFreemium && <ToolBadge>Freemium</ToolBadge>}
        {isPro && <ToolBadge isActive>Pro</ToolBadge>}
        {variant === BADGE_VARIANTS.live || variant === BADGE_VARIANTS.beta ? (
          <span className="ml-auto text-sm text-primary hover:underline">
            Try it →
          </span>
        ) : (
          <span className="ml-auto text-sm text-dim">Coming soon</span>
        )}
      </div>
    </div>
  )
}

export default ToolCard
