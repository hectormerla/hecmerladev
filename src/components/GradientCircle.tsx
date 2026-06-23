const bgGlowRadialClassName = {
  primary: "bg-glow-radial-primary",
  secondary: "bg-glow-radial-secondary",
}

const GradientCircle = ({
  position,
  width = "360px",
  height = "360px",
  top,
  left,
  right,
  bottom,
  blur = "40px",
  bgColor,
}: {
  position?: string
  width?: string
  height?: string
  top?: string
  left?: string
  right?: string
  bottom?: string
  blur?: string
  bgColor?: keyof typeof bgGlowRadialClassName
}) => {
  return (
    <div
      className={`absolute rounded-full ${bgColor ? bgGlowRadialClassName[bgColor] : "bg-glow-radial"} pointer-events-none z-0 ${position}`}
      style={{
        width,
        height,
        top,
        left,
        right,
        bottom,
        filter: `blur(${blur})`,
      }}
    ></div>
  )
}

export default GradientCircle
