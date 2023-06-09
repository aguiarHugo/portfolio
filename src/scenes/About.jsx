import React from 'react'
import { motion } from 'framer-motion'
import astronaut from '../assets/astronaut.png'

const About = ({setSelectedPage}) => {
  return (
    <section 
      id='about'
      className="flex flex-col md:flex-row md:justify-between items-center sm:pt-32 px-6"
    >
    <motion.div onViewportEnter={() => setSelectedPage('about')} />
      <img 
      className='animate drop-shadow-astronaut' 
      src={astronaut} 
      alt="Astronaut" />
      <div
        className='text-center md:w-[570px] md:text-start md:mr-16'
      >
        <motion.h3
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3}}
          transition={{ duration: 0.5 }}
          variants={{ 
            hidden: { opacity:0, x:-50 },
            visible: { opacity:1, x:0 }
          }}
          className="text-5xl md:text-6xl font-bold md:text-start"
        >
          Who <span className="text-purple-500">Am I?</span>
        </motion.h3>

        <motion.p 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5}}
          transition={{ duration: 0.5 }}
          variants={{ 
            hidden: { opacity:0, x:-50 },
            visible: { opacity:1, x:0 }
          }}
          className="mt-5"
        >
          My name is Hugo, I am 30 years old, and I have a solid professional experience in web development. 
          In addition, I served in the Brazilian Navy for 9 years and 8 months, which provided me with valuable skills 
          in leadership, teamwork, and problem-solving.
        </motion.p>

        <motion.p 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5}}
          transition={{ duration: 0.5 }}
          variants={{ 
            hidden: { opacity:0, x:-50 },
            visible: { opacity:1, x:0 }
          }}
          className="mt-5"
        >
          After my service in the Brazilian Navy, I transitioned to web development, where I have been working as 
          a developer on different projects. During this time, I have developed skills in HTML, CSS, Bootstrap, 
          Tailwindcss, styled-components, JavaScript, and ReactJs.
        </motion.p>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5}}
          transition={{ duration: 0.5 }}
          variants={{ 
            hidden: { opacity:0, x:-50 },
            visible: { opacity:1, x:0 }
          }}
          className="mt-5"
        >
          I continue to update myself with courses and trainings related to my field of expertise, constantly 
          seeking to improve my technical skills and knowledge. I possess technical skills in web programming, 
          including the use of frameworks such as ReactJs, as well as experience in SQL databases. Furthermore, my 
          experience in the Brazilian Navy has provided me with skills in leadership, teamwork, project management, and problem-solving, 
          allowing me to approach projects holistically and efficiently. In addition to my passion for web 
          development, I am interested in technological innovation, information security, and machine learning.
        </motion.p>

        <motion.p 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5}}
          transition={{ duration: 0.5 }}
          variants={{ 
            hidden: { opacity:0, x:-50 },
            visible: { opacity:1, x:0 }
          }}
          className="mt-5"
        >
          As a web developer, I am committed to providing high-quality technical solutions and adding value to the projects I work on. I am always seeking learning and continuous growth, and I am available to contribute to challenging and innovative projects in the field. 
        </motion.p>
      </div>
    </section>
  )
}

export default About