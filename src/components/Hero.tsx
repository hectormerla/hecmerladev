import Button from "./Button"
import hmLogo from "../assets/hm_logo.svg"
import GradientCircle from "./GradientCircle"

const Hero = () => {
  return (
    <section className="container py-20 px-7 gap-8 max-w-[1200px] mx-auto grid md:grid-cols-2">
      <div className="flex flex-col items-start">
        <div className="flex items-center justify-start gap-2 p-2 mb-7 border border-line rounded-full">
          <div className="w-2 h-2 rounded-full bg-primary"></div>
          <span className="text-sm text-dim uppercase">
            Available for new projects
          </span>
        </div>
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
          <Button variant="secundary" href="#contact">
            Get in touch
          </Button>
        </div>
      </div>

      <div className="relative h-[440px] grid place-items-center">
        <GradientCircle />
        <div className="relative w-[340px] h-[380px]">
          <div className="absolute top-[28px] left-[8px] w-16 h-18 bg-bg border border-line clip-hexagon animate-floaty"></div>
          <div className="absolute top-[8px] left-[268px] w-16 h-18 bg-bg border border-line clip-hexagon animate-floaty"></div>
          <div className="absolute top-[264px] left-[286px] w-16 h-18 bg-bg border border-line clip-hexagon animate-floaty"></div>
          <div className="absolute top-[240px] left-[-6px] w-16 h-18 bg-bg border border-line clip-hexagon animate-floaty"></div>
          <div className="absolute top-[74px] left-[36px] w-26 h-30 bg-bg border border-line clip-hexagon animate-floaty"></div>
          <div className="absolute top-[124px] left-[212px] w-28 h-32 bg-bg border border-line clip-hexagon animate-floaty"></div>
          <div className="absolute top-[208px] left-[60px] w-20 h-22 bg-bg border border-line clip-hexagon animate-floaty"></div>
          <div className="absolute top-[88px] left-[78px] w-45 h-40 animate-floaty flex items-center justify-center">
            <img src={hmLogo} alt="hecmerladev_logo" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
