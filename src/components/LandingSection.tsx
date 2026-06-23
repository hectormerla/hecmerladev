const LandingSection = ({
  children,
  variant,
}: {
  children: React.ReactNode
  variant?: string
}) => {
  return (
    <section
      className={`relative flex flex-col w-full gap-6 py-12 px-6 md:px-12 lg:px-24 ${variant === "dark" ? "bg-bg2 border-y border-line" : ""}`}
    >
      {children}
    </section>
  )
}

export default LandingSection
