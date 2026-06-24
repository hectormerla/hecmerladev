import LandingSection from "../LandingSection"
import SectionSubtitle from "../SectionSubtitle"
import ProjectCard from "../ProjectCard"

const PROJECTS = [
  {
    category: "Boutique",
    title: "Gramatos",
    description:
      "Web for a boutique artisanal printing and graphic design studio.",
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
