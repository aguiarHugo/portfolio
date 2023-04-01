import About from "./scenes/About"
import Contact from "./scenes/Contact"
import Header from "./scenes/Header"
import Projects from "./scenes/Projects"
import Techs from "./scenes/Techs"


function App() {
  return (
    <div className="app">
      <Header />
      <About />
      <Techs />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
