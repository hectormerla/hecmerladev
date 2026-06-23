import IconHexagon from "./IconHexagon"
import StatusBadge from "./StatusBadge"
import ToolBadge from "./ToolBadge"

const ToolCard = ({
  variant = "default",
}: {
  variant?: "default" | "live" | "beta" | "soon"
}) => {
  return (
    <div
      className={`relative flex flex-col w-full gap-4 p-6 bg-bg2 border border-line rounded-xl overflow-hidden ${variant === "live" ? "cursor-pointer" : ""} z-1`}
    >
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-brand"></div>
      <div className="flex justify-between items-center">
        <IconHexagon className="bg-bg3 w-12! h-14!" />
        <StatusBadge variant={variant}>
          {variant.charAt(0).toUpperCase() + variant.slice(1)}
        </StatusBadge>
      </div>

      <div>
        <h3>Tool Name</h3>
        <p className="text-sm text-dim">
          A brief description of the tool goes here. It can be a few sentences
          long.
        </p>
      </div>

      <div className="flex justify-start gap-2 items-center">
        <ToolBadge>Free</ToolBadge>
        <ToolBadge isActive>Pro</ToolBadge>
        <a href="#" className="ml-auto text-sm text-primary hover:underline">
          Try it →
        </a>
      </div>
    </div>
  )
}

export default ToolCard
