const IconHexagon = ({
  className,
  children,
}: {
  className?: string
  children?: React.ReactNode
}) => {
  return (
    <div
      className={`flex items-center justify-center w-16 h-18  border border-line clip-hexagon ${className}`}
    >
      {children}
    </div>
  )
}

export default IconHexagon
