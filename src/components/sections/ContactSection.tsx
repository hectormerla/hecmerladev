import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Mail } from "lucide-react"
import Button from "../Button"
import LandingSection from "../LandingSection"
import Logo from "../Logo"

const ContactSection = () => {
  return (
    <LandingSection variant="dark">
      <div className="flex flex-col items-center justify-center text-center gap-4">
        <Logo size="80px" />
        <h2>Let's build together</h2>
        <p className="text-dim text-md my-4 max-w-[450px]">
          I'm always open to new opportunities and collaborations. Feel free to
          reach out if you have a project in mind or just want to say hi!
        </p>
        <Button href="mailto:">
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
  )
}

export default ContactSection
