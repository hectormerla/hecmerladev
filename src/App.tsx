import "./App.css"
import Header from "./components/Header"
import Hero from "./components/sections/Hero"
import { library } from "@fortawesome/fontawesome-svg-core"
import Footer from "./components/sections/Footer"
import Background from "./components/sections/Background"
import PortfolioSection from "./components/sections/PortfolioSection"
import ExperienceSection from "./components/sections/ExperienceSection"
import ToolsSection from "./components/sections/ToolsSection"
import ContactSection from "./components/sections/ContactSection"
import {
  faGithub,
  faLinkedinIn,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons"

library.add(faGithub, faLinkedinIn, faXTwitter)

function App() {
  return (
    <div>
      <Background />
      <Header />
      <Hero />
      <PortfolioSection />
      <ExperienceSection />
      <ToolsSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default App
