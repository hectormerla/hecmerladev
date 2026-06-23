const GradientCircle = ({
  position,
  width = "360px",
  height = "360px",
  top,
  left,
  right,
  bottom,
  blur = "40px",
}: {
  position?: string
  width?: string
  height?: string
  top?: string
  left?: string
  right?: string
  bottom?: string
  blur?: string
}) => {
  return (
    <div
      className={`absolute rounded-full bg-glow-radial blur-[${blur}] pointer-events-none z-0 ${position}`}
      style={{ width, height, top, left, right, bottom }}
    ></div>
  )
}

export default GradientCircle
