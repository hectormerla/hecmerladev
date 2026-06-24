import type { ComponentProps } from "react"
import LandingSection from "../LandingSection"
import SectionSubtitle from "../SectionSubtitle"
import ToolCard from "../ToolCard"
import cvBuilder from "../../assets/cv_builder.svg"

const TOOLS: ComponentProps<typeof ToolCard>[] = [
  {
    variant: "live",
    icon: <img src={cvBuilder} alt="" width="36" />,
    toolName: "CV Builder",
    description: "A tool for creating professional CVs with ease.",
    isFree: true,
    appUrl: "https://cvbuilder.hecmerla.dev",
  },
  {
    variant: "building",
    toolName: "Grocery List Mobile App",
    description: "An app to help you manage your grocery shopping efficiently.",
    isFreemium: true,
  },
  // {
  //   variant: "planned",
  //   toolName: "CSVX Desktop",
  //   description: "An app to work with .csvx files.",
  // },
]

const ToolsSection = () => {
  return (
    <LandingSection>
      <SectionSubtitle>The Lab</SectionSubtitle>
      <h2>What I'm building</h2>
      <div className="w-full grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 my-8">
        {TOOLS.map((tool) => (
          <ToolCard key={tool.toolName} {...tool} />
        ))}
      </div>
    </LandingSection>
  )
}

export default ToolsSection
