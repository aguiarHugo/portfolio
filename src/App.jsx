import { useEffect, useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";

import About from "./scenes/About"
import Contact from "./scenes/Contact"
import Header from "./scenes/Hero"
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
      <div className="mt-24 md:ml-16">
        <Header />
        <About />
        <Techs />
        <Projects />
        <Contact />
      </div>
    </div>
  )
}

export default App
