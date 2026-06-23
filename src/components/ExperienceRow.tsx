import ToolBadge from "./ToolBadge"

const ExperienceRow = ({
  isCurrent,
  date,
  position,
  company,
  description,
  stack = [],
}: {
  isCurrent?: boolean
  date: string
  position: string
  company: string
  description: string
  stack?: string[]
}) => {
  return (
    <div className="grid grid-cols-[180px_1fr] gap-4 py-8 border-t border-line">
      <div className="flex items-start gap-4">
        <div
          className={`w-4 h-4 ${isCurrent ? "bg-primary" : "bg-dim"} my-1 clip-hexagon`}
        ></div>
        <span className="text-sm text-dim font-jetbrains">{date}</span>
      </div>

      <div className="flex flex-col items-start">
        <h3 className="text-lg font-semibold">{position}</h3>
        <p className="text-ac">{company}</p>
        <p className="text-sm text-gray-500 max-w-[620px]">{description}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {stack.map((item) => (
            <ToolBadge key={item}>{item}</ToolBadge>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ExperienceRow
