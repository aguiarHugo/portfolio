import { useState } from "react";
import AnchorLink from 'react-anchor-link-smooth-scroll'
import useMediaQuery from "../hooks/useMediaQuery";

import { AiOutlineClose } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'
import { FaReact } from 'react-icons/fa'

const Link = ({ page, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase()
  return(
    <AnchorLink
    className={`${selectedPage === lowerCasePage ? "text-white" : ""}
      hover:text-yellow transition duration-500`}
    href={`#${lowerCasePage}`}
    onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  )
}

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false)
  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)")
  const navbarBackground = isTopOfPage ? "" : "bg-purple-400"

  return (
    <nav className={`${navbarBackground} z-40 w-full fixed top-0 py-6`}>
      <div className="flex items-center justify-between mx-auto w-5/6">
        <FaReact size={48}/>

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
            className="rounded-full bg-purple-400 p-2"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              <GiHamburgerMenu size={24} /> 
            </button>)}

            {/* MOBILE BUTTON POPUP*/}
            {!isAboveSmallScreens && isMenuToggled && (
              <div className="fixed right-0 bottom-0 h-full bg-purple-400 w-[300px]">
                {/* CLOSE ICON */}
                <div className="flex justify-end p-12">
                  <button
                  onClick={() => setIsMenuToggled(!isMenuToggled)}>
                    <AiOutlineClose size={24} />
                  </button>
                </div>

                {/* MENU ITEMS */}
                <div className="flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue">
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