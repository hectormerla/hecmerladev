const StatusBadge = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-center justify-start gap-2 py-1 px-3 mb-7 border border-line rounded-full bg-bg2">
      <div className="absolute w-2 h-2 rounded-full bg-primary animate-ping"></div>
      <div className="w-2 h-2 rounded-full bg-primary "></div>
      <span className="text-[11px] text-dim uppercase font-jetbrains tracking-widest">
        {children}
      </span>
    </div>
  )
}

export default StatusBadge
