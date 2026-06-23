const ToolBadge = ({
  children,
  isActive,
}: {
  children: React.ReactNode
  isActive?: boolean
}) => {
  return (
    <div
      className={`py-1 px-2 text-xs text-dim border border-line rounded-lg ${isActive ? "bg-gradient-brand text-white" : ""}`}
    >
      {children}
    </div>
  )
}

export default ToolBadge
