import { motion } from 'framer-motion'

import TechsCard from "../components/TechsCard"

const Techs = () => {
  return (
    <section className="flex flex-col md:flex-row gap-16 items-center mt-12">
      <motion.div
        className='text-center md:w-[600px] md:text-start md:ml-16'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5}}
        transition={{ duration: 0.5 }}
        variants={{ 
          hidden: { opacity:0, x:-50 },
          visible: { opacity:1, x:0 }
        }}
      >
        <h3 className="text-5xl md:text-6xl font-bold md:text-start">
         <span className="text-purple-400">Tech</span>nologies
        </h3>
        <p className="mt-4">
          These are the Techs that I work with.
        </p>
        <p className="mt-4">
          Although, I'm always open to learn new ones!
        </p>
      </motion.div>
      <div className='md:w-[600px] animate'>
        <TechsCard />
      </div>
    </section>
  )
}

export default Techs