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
        blur="80px"
        bgColor="primary"
      />
      <GradientCircle
        position="fixed"
        bottom="-200px"
        left="-150px"
        width="560px"
        height="526px"
        bgColor="secondary"
        blur="80px"
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
