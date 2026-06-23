const WorkCard = () => {
  return (
    <article className="flex flex-col items-start justify-start gap-4 rounded-xl bg-bg2 border border-line cursor-pointer z-1">
      <div className="grid w-full place-items-center bg-stripes border-b border-line"></div>
      <div className="p-6">
        <p className="text-xs font-medium text-ac uppercase font-jetbrains">
          Project Type
        </p>
        <h3 className="text-lg font-semibold">Project Title</h3>
        <p className="text-sm text-gray-400">
          A brief description of the project goes here. It can be a few
          sentences long.
        </p>
      </div>
    </article>
  )
}

export default WorkCard
