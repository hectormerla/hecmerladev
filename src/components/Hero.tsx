import Button from "./Button"
import FloatingHexagons from "./FloatingHexagons"
import GradientCircle from "./GradientCircle"
import StatusBadge from "./StatusBadge"

const Hero = () => {
  return (
    <section className="container py-24 px-7 gap-8 max-w-[1200px] mx-auto grid md:grid-cols-2">
      <div className="flex flex-col items-start">
        <StatusBadge>Available for new projects</StatusBadge>
        <h1 className="mb-7 text-[clamp(38px,5.6vw,68px)] text-left font-bold leading-14">
          I build fast, thoughtful
          <br />
          <span className="text-gradient-brand">web experiences</span>
        </h1>
        <p className="mb-7 text-md text-dim text-left leading-relaxed">
          Hector Merla — web developer with 8+ years shipping production apps,
          design systems and the freemium tools below. Part résumé, part
          portfolio, part workshop.
        </p>
        <div className="flex items-center justify-start gap-4">
          <Button href="#work">View my work →</Button>
          <Button variant="secondary" href="#contact">
            Get in touch
          </Button>
        </div>
      </div>

      <div className="relative h-[440px] grid place-items-center">
        <GradientCircle />
        <FloatingHexagons />
      </div>
    </section>
  )
}

export default Hero
