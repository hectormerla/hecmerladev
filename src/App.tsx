// import { useState } from 'react'
import './App.css'
import HeaderLink from './components/HeaderLink'
import hmLogo from './assets/hm_logo.svg'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
      <header className="bg-bg-transp flex items-center justify-between border-b border-b-line">
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
      <section className="container flex items-center justify-center">
        <div className="flex items-center justify-start gap-2 uppercase">
          <div className="w-2 h-2 rounded-full bg-[red]!"></div>
          <span>Available for new projects</span>
        </div>
      </section>
      <section className="container flex items-center justify-center bg-[blue]!">
        Hello world
      </section>
      <section className="container flex items-center justify-center bg-[green]!">
        Hello world
      </section>
    </div>
  )
}

export default App
