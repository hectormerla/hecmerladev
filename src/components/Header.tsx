import HeaderLink from "./HeaderLink"
import Logo from "./Logo"

const Header = () => {
  return (
    <header className="sticky z-50 bg-bg-transp flex items-center justify-between border-b border-b-line">
      <div className="container py-4 flex items-center justify-between">
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

        <nav>
          <ul className="flex items-center justify-end gap-4">
            <li>
              <HeaderLink href="#work">Work</HeaderLink>
            </li>
            <li>
              <HeaderLink href="#experience">Experience</HeaderLink>
            </li>
            <li>
              <HeaderLink href="#tools">Tools</HeaderLink>
            </li>
            <li>
              <HeaderLink href="#contact">Contact</HeaderLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
