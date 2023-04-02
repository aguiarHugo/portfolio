import useMediaQuery from "../hooks/useMediaQuery"
import { motion } from "framer-motion"
import AnchorLink from "react-anchor-link-smooth-scroll"

import me from '../assets/eu.webp'
import SocialMedia from "../components/SocialMedia"


const Hero = ({ setSelectedPage }) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section 
    id="home" 
    className="md:flex md:justify-between md:items-center md:h-full gap-16 py-10">

      <div className="md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32">
        {isAboveMediumScreens ? (
          <div
          className="relative z-0 ml-20 before:absolute before:-top-20 
          before:-left-20 before:w-full before:max-w-[400px] 
          md:before:max-w-[600px] before:h-full before:border-2 before:border-purple-400
          before:z-[-1]"
          >
            <img
              className="hover:filter hover:saturate-100 transition duration-500 z-10 w-full max-w-[100000px] md:max-w-[400px]"
              alt="Hugo Aguiar profile pic"
              src={me} 
            />
          </div>
        ) : (
          <img
              className="mb-4 rounded-t-[100px] hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[400px]"
              alt="Hugo Aguiar profile pic"
              src={me} 
            />
        )}
        </div>
        <div className="z-30 basis 2/5 mt-12 md:mt-30">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5}}
            transition={{ duration: 0.5 }}
            variants={{ 
              hidden: { opacity:0, x:-50 },
              visible: { opacity:1, x:0 }
            }}
          >
            <p className="text-6xl text-center md:text-start font-bold">
              Hugo <span className="text-purple-400">Aguiar</span>
            </p>

            <p className="mt-8 mb-7 text-sm text-center md:text-start">
              Front-end Developer
            </p>
          </motion.div>

          <motion.div
            className="flex mt-5 justify-center md:justify-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5}}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{ 
              hidden: { opacity:0, x:-50 },
              visible: { opacity:1, x:0 }
            }}
          >
            <AnchorLink
              className="bg-purple-400 text-bg-dark rounded-sm py-3 px-7 font-semibold"
              onClick={() => setSelectedPage("contact")}
              href="#contact"
            >
              Contact
            </AnchorLink>
            <AnchorLink
              className="rounded-r-sm border border-purple-400 py-0.5 pr-0.5"
              onClick={() => setSelectedPage("contact")}
              href="#contact"
            >
              <p
                className=" text-purple-400 w-full h-full flex 
                items-center justify-center px-10 shadow-[0px_10px_20px_1px_#9f7aea] duration-500 hover:text-yellow"
              >
                Send me a message!
              </p>
            </AnchorLink>
            </motion.div>
            <motion.div
             className="flex mt-5 justify-center md:justify-start"
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, amount: 0.5}}
             transition={{ delay: 0.4, duration: 0.5 }}
             variants={{ 
              hidden: { opacity:0, x:-50 },
              visible: { opacity:1, x:0 }
            }}>
              <SocialMedia />
            </motion.div>
        </div>
    </section>
  );
};

export default Hero