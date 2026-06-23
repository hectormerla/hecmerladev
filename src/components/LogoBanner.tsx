import Logo from "./Logo"

const LogoBanner = () => {
  return (
    <a href="/">
      <div className="flex gap-2 items-center justify-center">
        <div className="">
          <Logo />
        </div>
        <div className="flex flex-col items-start justify-center leading-4">
          <span className="text-md font-bold font-space-grotesk">
            Hector Merla
          </span>
          <span className="text-xs text-dim font-jetbrains uppercase">
            Web Developer
          </span>
        </div>
      </div>
    </a>
  )
}

export default LogoBanner
