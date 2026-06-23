const ExperienceRow = ({
  date,
  position,
  company,
  description,
}: {
  date: string
  position: string
  company: string
  description: string
}) => {
  return (
    <div className="grid grid-cols-[180px_1fr] py-8 border-t border-line">
      <div className="flex items-start gap-4 ">
        <div className="w-4 h-4 first:bg-primary my-1 clip-hexagon"></div>
        <span>{date}</span>
      </div>

      <div className="flex flex-col items-start">
        <h3 className="text-lg font-semibold">{position}</h3>
        <p className="text-ac">{company}</p>
        <p className="text-sm text-gray-500 max-w-[620px]">{description}</p>
      </div>
    </div>
  )
}

export default ExperienceRow
