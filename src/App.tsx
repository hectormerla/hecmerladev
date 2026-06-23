// import { useState } from 'react'
import "./App.css"
import GradientCircle from "./components/GradientCircle"
import Header from "./components/Header"
import Hero from "./components/Hero"

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
      <GradientCircle
        position="fixed"
        top="-200px"
        right="-150px"
        width="520px"
        height="520px"
      />
      <Header />
      <Hero />
      {/* <section className="container flex items-center justify-center bg-[blue]!">
        Hello world
      </section>
      <section className="container flex items-center justify-center bg-[green]!">
        Hello world
      </section> */}
    </div>
  )
}

export default App
