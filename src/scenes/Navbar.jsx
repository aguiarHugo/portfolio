import { useState } from "react";
import AnchorLink from 'react-anchor-link-smooth-scroll'
import useMediaQuery from "../hooks/useMediaQuery";
import { AiOutlineClose } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'

import logo from '../assets/logo.png'

const Link = ({ page, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase()

  if (page === 'Home') {
    return (
      <AnchorLink
        className={`${selectedPage === lowerCasePage ? "text-yellow" : "text-white"}`}
        href={`#${lowerCasePage}`}
        onClick={() => {
          setSelectedPage(lowerCasePage)
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }}
      >
        {page}
      </AnchorLink>
    )
  } else {
    return(
      <AnchorLink
      className={`${selectedPage === lowerCasePage ? "text-yellow" : "text-white"}`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
      >
        {page}
      </AnchorLink>
    )
  }
}

  

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)")
  const navbarBackground = isTopOfPage ? "bg-dark-500" : "bg-purple-400"

  const toggleMenu = () => {
    setIsAnimating(!isMenuToggled);
    setIsMenuToggled(!isMenuToggled);
  }


  return (
    <nav
      className={`${navbarBackground} z-40 w-full fixed top-0 py-6`}>
      <div className="flex items-center justify-between mx-auto w-5/6">
        <img
          className="cursor-pointer w-[100px]"
          src={logo}
          alt="Logo"
          onClick={() => {
            setSelectedPage('home')
            window.scrollTo(0, 0,)
        }}
        />
        {/*DESKTOP */ }
        {isAboveSmallScreens ? (
          <div className="flex justify-between gap-16 font-opensans text-sm font-semibold">
            <Link 
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link 
              page="About"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}

            />
            <Link 
              page="Techs"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link 
              page="Projects"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
             <Link 
              page="Contact"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        ) : (
            <button 
            className={"rounded-full bg-purple-400 p-2"}
            onClick={toggleMenu}
            >
              <GiHamburgerMenu size={24} /> 
            </button>)}

            {/* MOBILE BUTTON POPUP*/}
            {!isAboveSmallScreens && isMenuToggled && (
              <div className={`fixed right-0 bottom-0 h-full bg-purple-400 w-full ${isAnimating ? "menu-slideFromTop" : ""} `}>
                {/* CLOSE ICON */}
                <div className="flex justify-end p-12">
                  <button
                  onClick={() => setIsMenuToggled(!isMenuToggled)}>
                  <AiOutlineClose size={24} />
                  </button>
                </div>

                {/* MENU ITEMS */}
                <div 
                  className="flex flex-col gap-10 items-center text-2xl "
                  onClick={() => setIsMenuToggled(!isMenuToggled)}
                >
                  <Link 
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link 
                    page="About"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link 
                    page="Techs"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}

                  />
                  <Link 
                    page="Projects"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link 
                    page="Contact"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>
              </div>
            )}
      </div>
    </nav>
  )
}

export default Navbar