import ToolBadge from "./ToolBadge"
import { useInView } from "react-intersection-observer"

const ExperienceRow = ({
  isCurrent,
  date,
  position,
  company,
  description,
  stack = [],
  index = 0,
}: {
  isCurrent?: boolean
  date: string
  position: string
  company: string
  description: string
  stack?: string[]
  index?: number
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${index * 100}ms` }}
      className={`grid md:grid-cols-[180px_1fr] gap-4 py-8 border-t border-line transition-all duration-500 ease-in ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
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
