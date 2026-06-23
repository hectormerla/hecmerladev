const LandingSection = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="container mb-12! flex flex-col items-start">
      {children}
    </section>
  )
}

export default LandingSection
