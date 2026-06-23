import LandingSection from "../LandingSection"
import SectionSubtitle from "../SectionSubtitle"
import ProjectCard from "../ProjectCard"

const PROJECTS = [
  {
    category: "AI",
    title: "CoreAI",
    description:
      "Web App to create workflows with AI Agents to generate Audiences.",
    stack: ["NextJS", "TypeScript", "TailwindCSS"],
  },
  {
    category: "Landing page",
    title: "WWC",
    description: "Site for the Work With Cancer initiative.",
    stack: ["NextJS", "TypeScript", "Contentful"],
  },
  {
    category: "Health care",
    title: "Intermountain Health",
    description: "Web and mobile app for a Health care company.",
    stack: ["React", "React Native", "TypeScript"],
  },
  {
    category: "Education",
    title: "Kinedu Educators App",
    description: "Early childhood web app for schools.",
    stack: ["React", "TypeScript", "Styled Components"],
  },
  {
    category: "Education",
    title: "Kinedu Web App",
    description: "Early childhood web app for parents.",
    stack: ["React", "TypeScript", "Styled Components"],
  },
]

const PortfolioSection = () => {
  return (
    <LandingSection>
      <SectionSubtitle>Portfolio</SectionSubtitle>
      <h2>Projects</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 my-8">
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.title}
            category={project.category}
            title={project.title}
            description={project.description}
            stack={project.stack}
          />
        ))}
      </div>
    </LandingSection>
  )
}

export default PortfolioSection
