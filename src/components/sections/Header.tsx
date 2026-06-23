import HeaderLink from "../HeaderLink"
import LogoBanner from "../LogoBanner"

const Header = () => {
  return (
    <header className="sticky z-50 bg-bg-transp flex items-center justify-between border-b border-b-line">
      <div className="container py-4 flex items-center justify-between">
        <LogoBanner />
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
