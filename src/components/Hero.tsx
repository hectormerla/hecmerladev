const Hero = () => {
  return (
    <section className="container flex flex-col items-start">
      <div className="flex items-center justify-start gap-2 p-2 border border-line rounded-full">
        <div className="w-2 h-2 rounded-full bg-primary"></div>
        <span className="text-sm text-dim uppercase">
          Available for new projects
        </span>
      </div>
      <h1 className="text-[clamp(38px,5.6vw,68px)] font-bold text-center">
        I build fast, thoughtful
        <span>web experiences</span>
      </h1>
    </section>
  )
}

export default Hero
