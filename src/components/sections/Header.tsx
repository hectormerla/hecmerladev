import { useState } from "react"
import Button from "../Button"
import HeaderLink from "../HeaderLink"
import LogoBanner from "../LogoBanner"
import { Menu } from "lucide-react"

const HEADER_LINKS = [
  // {
  //   url: "#work",
  //   label: "Work",
  // },
  {
    url: "#experience",
    label: "Experience",
  },
  {
    url: "#tools",
    label: "Tools",
  },
  {
    url: "#contact",
    label: "Contact",
  },
]

const Header = () => {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-bg-transp flex items-center justify-between border-b border-b-line">
      <div className="relative container py-4 px-4 lg:px-0 flex items-center justify-between">
        <LogoBanner />
        <nav className="hidden md:block bg-bg-transp md:bg-transparent fixed md:relative left-0 top-[72px] md:top-auto pt-6 pb-8 md:pt-0 md:pb-0 w-full md:w-auto">
          <ul className="flex flex-col md:flex-row items-center justify-end gap-4">
            {HEADER_LINKS.map((link) => (
              <li key={link.url}>
                <HeaderLink href={link.url}>{link.label}</HeaderLink>
              </li>
            ))}
          </ul>
        </nav>
        <Button
          className="block md:hidden"
          variant="secondary"
          isIconButton
          onClick={() => setShowMenu(!showMenu)}
        >
          <Menu />
        </Button>
        {showMenu ? (
          <nav className="md:hidden bg-bg-transp md:bg-transparent fixed md:relative left-0 top-[72px] md:top-auto pt-6 pb-8 md:pt-0 md:pb-0 w-full md:w-auto">
            <ul className="flex flex-col md:flex-row items-center justify-end gap-4">
              {HEADER_LINKS.map((link) => (
                <li key={link.url}>
                  <HeaderLink href={link.url}>{link.label}</HeaderLink>
                </li>
              ))}
            </ul>
          </nav>
        ) : null}
      </div>
    </header>
  )
}

export default Header
