import "./App.css"
import ExperienceRow from "./components/ExperienceRow"
import GradientCircle from "./components/GradientCircle"
import Header from "./components/Header"
import Hero from "./components/Hero"
import LandingSection from "./components/LandingSection"
import SectionSubtitle from "./components/SectionSubtitle"
import ToolCard from "./components/ToolCard"
import WorkCard from "./components/WorkCard"
import cvBuilder from "./assets/cv_builder.svg"
import Logo from "./components/Logo"
import Button from "./components/Button"
import { library } from "@fortawesome/fontawesome-svg-core"
import {
  faGithub,
  faLinkedinIn,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Mail } from "lucide-react"
import Footer from "./components/Footer"

// Add the icons to your project's library
library.add(faGithub, faLinkedinIn, faXTwitter)

function App() {
  return (
    <div>
      <GradientCircle
        position="fixed"
        top="-200px"
        right="-150px"
        width="520px"
        height="520px"
        blur="80px"
        bgColor="primary"
      />
      <GradientCircle
        position="fixed"
        bottom="-200px"
        left="-150px"
        width="560px"
        height="526px"
        bgColor="secondary"
        blur="80px"
      />
      <Header />
      <Hero />
      <LandingSection>
        <SectionSubtitle>Portfolio</SectionSubtitle>
        <h2>Projects</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 my-8">
          <WorkCard />
          <WorkCard />
          <WorkCard />
          <WorkCard />
          <WorkCard />
          <WorkCard />
        </div>
      </LandingSection>

      <LandingSection>
        <SectionSubtitle>Résumé</SectionSubtitle>
        <h2>Experience</h2>
        <div className="flex flex-col w-full">
          <ExperienceRow
            date="2015 — 2017"
            position="Senior Frontend Developer"
            company="Company Name"
            description="Lead web app development and the in-house design system; mentor a team of four and own front-end architecture across products."
          />
          <ExperienceRow
            date="2017 — 2019"
            position="Frontend Developer"
            company="Another Company"
            description="Developed and maintained responsive web applications using modern JavaScript frameworks."
          />
          <ExperienceRow
            date="2019 — 2021"
            position="Lead Developer"
            company="Yet Another Company"
            description="Led a team of developers in building scalable web applications and mentoring junior developers."
          />
          <ExperienceRow
            date="2021 — Present"
            position="Senior Lead Developer"
            company="Current Company"
            description="Architected and implemented complex web solutions while guiding the technical direction of the team."
          />
        </div>
      </LandingSection>
      <LandingSection>
        <SectionSubtitle>The Lab</SectionSubtitle>
        <h2>Tools I'm building</h2>
        <div className="w-full grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 my-8">
          <ToolCard
            variant="live"
            icon={<img src={cvBuilder} alt="CV Builder" width="36" />}
            toolName="CV Builder"
            description="A tool for creating professional CVs with ease."
            isFree
            appUrl="https://cvbuilder.hecmerla.dev"
          />
          <ToolCard
            variant="planned"
            // icon={<img src="" alt="Grocery List App" width="36" />}
            toolName="Grocery List App"
            description="An app to help you manage your grocery shopping efficiently."
            isFreemium
          />
          <ToolCard
            variant="beta"
            // icon={<img src="" alt="Project Tracker" width="36" />}
            toolName="Project Tracker"
            description="A tool to track and manage your projects effectively."
          />
        </div>
      </LandingSection>

      <LandingSection variant="dark">
        <div className="flex flex-col items-center justify-center text-center gap-4">
          <Logo size="80px" />
          <h2>Let's build together</h2>
          <p className="text-dim text-md my-4 max-w-[450px]">
            I'm always open to new opportunities and collaborations. Feel free
            to reach out if you have a project in mind or just want to say hi!
          </p>
          <Button href="mailto:your-email@example.com">
            <div className="flex items-center gap-2">
              <Mail size={16} />
              Contact Me
            </div>
          </Button>
          <div className="flex gap-3 my-4">
            <Button
              href="https://github.com/hectormerla"
              variant="secondary"
              isIconButton
            >
              <FontAwesomeIcon icon={["fab", "github"]} size="lg" />
            </Button>
            <Button
              href="https://www.linkedin.com/in/hectormerla/"
              variant="secondary"
              isIconButton
            >
              <FontAwesomeIcon icon={["fab", "linkedin-in"]} size="lg" />
            </Button>
            <Button
              href="https://x.com/HectorMerla"
              variant="secondary"
              isIconButton
            >
              <FontAwesomeIcon icon={["fab", "x-twitter"]} size="lg" />
            </Button>
          </div>
        </div>
      </LandingSection>
      <Footer />
    </div>
  )
}

export default App
