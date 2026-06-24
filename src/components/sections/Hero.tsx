import Button from "../Button"
import FloatingHexagons from "../FloatingHexagons"
import GradientCircle from "../GradientCircle"
import StatusBadge from "../StatusBadge"

const Hero = () => {
  return (
    <section className="container pt-24 pb-6 gap-8 max-w-[1200px] mx-auto grid md:grid-cols-2">
      <div className="flex flex-col items-start">
        <StatusBadge>Available for new projects</StatusBadge>
        <h1 className="mb-7 text-left font-bold leading-14">
          Turning ideas into
          <br />
          <span className="text-gradient-brand font-bold whitespace-nowrap">
            fast web products
          </span>
        </h1>
        <p className="mb-7 max-w-[480px] text-md text-dim text-left leading-relaxed">
          Web developer with 8+ years building production apps, client websites,
          and web tools — with a pixel-perfect eye for detail.
        </p>
        <div className="flex items-center justify-start gap-4">
          <Button href="#contact">Get in touch</Button>
          {/* <Button variant="secondary" href="#contact">
            Get in touch
          </Button> */}
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
