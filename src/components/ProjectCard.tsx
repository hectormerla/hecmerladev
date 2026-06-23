import ToolBadge from "./ToolBadge"

const ProjectCard = ({
  category,
  title,
  description,
  stack = [],
}: {
  category: string
  title: string
  description?: string
  stack?: string[]
}) => {
  return (
    <article className="flex flex-col items-start justify-start rounded-xl bg-bg2 border border-line z-1">
      <div className="grid w-full place-items-center bg-stripes border-b border-line"></div>
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
