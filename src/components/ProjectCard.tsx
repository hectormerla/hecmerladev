import ToolBadge from "./ToolBadge"
import { useInView } from "react-intersection-observer"

const ProjectCard = ({
  category,
  title,
  description,
  stack = [],
  index = 0,
}: {
  category: string
  title: string
  description?: string
  stack?: string[]
  index?: number
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <article
      ref={ref}
      style={{ transitionDelay: `${index * 100}ms` }}
      className={`flex flex-col items-start justify-start rounded-xl bg-bg2 border border-line z-1 transition-all duration-500 ease-in ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      <div className="grid w-full place-items-center bg-stripes border-b border-line aspect-16/8"></div>
      <div className="p-6">
        <p className="text-xs font-medium text-ac uppercase font-jetbrains">
          {category}
        </p>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-400">{description}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {stack.map((item) => (
            <ToolBadge key={item}>{item}</ToolBadge>
          ))}
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
