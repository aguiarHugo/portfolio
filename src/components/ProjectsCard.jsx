import { motion, AnimatePresence } from "framer-motion"
import { Tilt } from 'react-tilt'

import github from '../assets/github.png'

const ProjectsCard = ({ i, index, name, description, tags, image, source_code_link }) => (

  <motion.div 
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.4}}
    transition={{ duration: 0.4 }}
    variants={{ 
      hidden: { opacity:0, y:-50 },
      visible: { opacity:1, y:0 }
  }}>
  <Tilt
    options={{
      max: 45,
      scale: 1,
      speed: 450,
    }}
    className='bg-dark-700 p-5 rounded-2xl sm:w-[360px] min-h-[460px] w-full border border-purple-400'
  >
    <div className='relative w-full h-[230px] '>
      <img
        src={image}
        alt='project_image'
        className='w-full h-full object-contain rounded-2xl'
      />

      <div className=' absolute inset-0 flex justify-end card-img_hover'>
        <div
          onClick={() => window.open(source_code_link, "_blank")}
          className='w-16 h-16 rounded-full flex justify-center cursor-pointer'
        >
          <img
            src={github}
            alt='source code'
            className='w-1/2 h-1/2 object-contain bg-dark-600 rounded-full'
          />
        </div>
      </div>
    </div>

    <div className='mt-5'>
      <h3 className='text-white font-bold text-[24px]'>
        {name}
      </h3>
      <p className='mt-2 text-secondary text-[14px]'>
        {description}
      </p>
    </div>

    <div className='mt-4 flex flex-wrap gap-2'>
      {tags.map((tag) => (
        <p
          key={`${name}-${tag.name}`}
          className={`text-[14px] ${tag.color}`}
        >
          #{tag.name}
        </p>
      ))}
    </div>
  </Tilt>
</motion.div>
)

export default ProjectsCard