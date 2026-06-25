import ExperienceRow from "../ExperienceRow"
import LandingSection from "../LandingSection"
import SectionSubtitle from "../SectionSubtitle"

const EXPERIENCE = [
  {
    isCurrent: false,
    date: "2024 — 2026",
    position: "Senior Experience Engineer",
    company: "Publicis Sapient",
    description:
      "* Frontend development project and CMS integration while serving as a technical reference for the team. Known for rigorous code reviews, component craftsmanship, and a collaborative approach to mentoring peers and driving code quality improvements. * Frontend development of AI platform with microfrontends using NextJS and TypeScript.",
    stack: [
      "React",
      "NextJS",
      "TypeScript",
      "TanStack Query",
      "Vitest",
      "TailwindCSS",
      "Shadcn",
      "Contentful",
    ],
  },
  {
    date: "2021 — 2023",
    position: "Senior Software Engineer",
    company: "Luxoft",
    description:
      "My role included creating and improving components for a health care web app and mobile app using React and React Native. Unit Testing of components. State managing with Redux. Participated in the creation of custom chart and other visual components that were key to give the user a better experience.",
    stack: [
      "React",
      "React Native",
      "TypeScript",
      "Styled Components",
      "MaterialUI",
      "Jest",
      "Redux",
    ],
  },
  {
    date: "2018 — 2021",
    position: "Lead Developer",
    company: "Kinedu",
    description: `* Starting a new project with the most recent version of React (16.8) in combination with TypeScript.
* Working with pure functional components and hooks (use of classes only for services).
* Starting a new project of an internal shareable React components library (Storybook) to use among the projects of the company. Improving the workflow not only for the dev team but for the design team so they can know, see and interact with the components we have.`,
    stack: [
      "React",
      "TypeScript",
      "Javascript",
      "Styled Components",
      "MaterialUI",
      "Jest",
      "Redux",
    ],
  },
  {
    date: "2017 — 2017",
    position: "Frontend Developer",
    company: "Freelance",
    description:
      "Architected and implemented complex web solutions while guiding the technical direction of the team.",
    stack: [
      "Gatsby",
      "TypeScript",
      "Javascript",
      "Styled Components",
      "MaterialUI",
      "Wordpress",
      "Storybook",
    ],
  },
  {
    date: "2017 — 2017",
    position: "Frontend Developer",
    company: "Fortigi Consulting",
    description:
      "Development of internal dashboard app with angularJS. Development of Wordpress page and themes. Mockup design for both web and mobile apps. Building frontend projects with task manager like gulp.",
    stack: ["Javascript", "Angular", "Bootstrap", "Wordpress", "SASS", "Axios"],
  },
]

const ExperienceSection = () => {
  return (
    <LandingSection id="experience">
      <SectionSubtitle>Résumé</SectionSubtitle>
      <h2>Experience</h2>
      <div className="flex flex-col w-full">
        {EXPERIENCE.map((experience) => (
          <ExperienceRow
            key={experience.position + experience.company}
            {...experience}
          />
        ))}
      </div>
    </LandingSection>
  )
}

export default ExperienceSection
