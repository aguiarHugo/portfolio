import { useEffect, useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";

import About from "./scenes/About"
import Contact from "./scenes/Contact"
import Hero from "./scenes/Hero"
import Navbar from "./scenes/Navbar"
import Projects from "./scenes/Projects"
import Techs from "./scenes/Techs"


function App() {
  const [selectedPage, setSelectedPage] = useState('home')
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")
  const [isTopOfPage, setIsTopOfPage] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setIsTopOfPage(true)
      if(window.scrollY !== 0) setIsTopOfPage(false)
    }
    window.addEventListener('scroll', handleScroll)
    return () =>   window.removeEventListener('scroll', handleScroll) 
  }, [])

  return (
    <div className="app">
      <Navbar 
         isTopOfPage={isTopOfPage}
         selectedPage={selectedPage}
         setSelectedPage ={setSelectedPage}
      />
      <div className="mt-24 md:ml-24">
      <div id="home" className="h-12" />
        <Hero />
      <div id="about" className="h-16 md:h-32" />
        <About />
      <div id="techs" className="h-32" />
        <Techs />
        <div id="projects" className="h-32" />
        <Projects />
        <div id="contact" className="h-32" />
        <Contact />
      </div>
    </div>
  )
}

export default App
