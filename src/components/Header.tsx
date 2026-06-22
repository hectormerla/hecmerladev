

import HeaderLink from './HeaderLink'
import hmLogo from '../assets/hm_logo.svg'

const Header = () => {
  return       <header className="bg-bg-transp flex items-center justify-between border-b border-b-line">
        <div className="container py-4 flex items-center justify-between">
          <div className="flex gap-2 items-center justify-center">
            <div className="">
              <img className="w-10 h-10 rounded-full" src={hmLogo} alt="Profile" />
            </div>
            <div className="flex flex-col items-start justify-center leading-3">
              <span className="text-sm font-bold">Hector Merla</span>
              <span className="text-xs text-dim uppercase">Web Developer</span>
            </div>
          </div>
          
          <nav>
            <ul className="flex items-center justify-end gap-4">
              <li><HeaderLink href="#work">Work</HeaderLink></li>
              <li><HeaderLink href="#experience">Experience</HeaderLink></li>
              <li><HeaderLink href="#tools">Tools</HeaderLink></li>
              <li><HeaderLink href="#contact">Contact</HeaderLink></li>
            </ul>
          </nav>
          </div>
      </header>
}

export default Header