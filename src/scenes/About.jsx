import React from 'react'
import { motion } from 'framer-motion'
import astronaut from '../assets/astronaut.png'

const About = () => {
  return (
    <section id="about" className="flex flex-col md:flex-row justify-between items-center">
      <img className='animate' src={astronaut} alt="Astronaut" />
      <motion.div
        className='text-center md:w-[600px] md:text-start md:mr-16'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5}}
        transition={{ duration: 0.5 }}
        variants={{ 
          hidden: { opacity:0, x:-50 },
          visible: { opacity:1, x:0 }
        }}
      >
        <h3 className="text-6xl font-bold md:text-start">
          Who <span className="text-purple-400">Am I?</span>
        </h3>
        <p className="mt-4">
          I'm a 30 year old man that lives in Brazil, who recently left behind a military career to start coding.
          I love to watch animes and play games, most of them on Xbox. Either in games or coding, I'm a <span className='text-purple-300'>Team Player </span>and a <span className='text-purple-300'>Quick Learner</span>. 
        </p>
        <p>
          Currently in love with <span className='text-purple-300'>ReactJs</span>, everyday learning news ways to solve problems!
        </p>
      </motion.div>
    </section>
  )
}

export default About