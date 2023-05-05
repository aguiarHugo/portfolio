import React from 'react'
import { projects } from '../constants'
import { motion } from 'framer-motion'

import ProjectsCard  from '../components/ProjectsCard'

const Projects = ({setSelectedPage}) => {
  return (
    <section id='projects' className='pt-32'>
      <motion.div
        onViewportEnter={() => setSelectedPage('projects')}
        className='flex justify-center items-center'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5}}
        transition={{ duration: 0.5 }}
        variants={{ 
          hidden: { opacity:0, x:-50 },
          visible: { opacity:1, x:0 }
        }}
      >
        <h3 className=' text-5xl md:text-6xl font-bold'>
          <span className='text-purple-400'>Pro</span>jects
        </h3>
      </motion.div>
      <div className='mt-20 flex flex-wrap justify-center px-2 gap-7 border-solid border-purple'>
        {projects.map((project, index) => (
          <ProjectsCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </section>
  )
}

export default Projects