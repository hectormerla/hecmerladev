const LandingSection = ({
  children,
  variant,
  id,
}: {
  children: React.ReactNode
  variant?: string
  id?: string
}) => {
  return (
    <section
      id={id}
      className={`relative flex flex-col w-full gap-6 py-12 px-6 md:px-12 lg:px-24 ${variant === "dark" ? "bg-bg2 border-y border-line" : ""}`}
    >
      <div className="container">{children}</div>
    </section>
  )
}

export default LandingSection
