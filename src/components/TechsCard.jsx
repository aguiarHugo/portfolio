import { DiReact, DiNodejsSmall } from 'react-icons/di';
import { SiJavascript, SiTailwindcss, SiStyledcomponents, SiMui } from 'react-icons/si';
import { FaBootstrap } from 'react-icons/fa'
import { TbBrandNextjs } from 'react-icons/tb'

import React from 'react'

const TechsCard = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
        <div className="w-28 h-28 cursor-pointer bg-purple-400 flex items-center justify-center rounded-lg">
          <SiJavascript size={72} />
        </div>
        <div className="w-28 h-28 cursor-pointer bg-purple-400 flex items-center justify-center rounded-lg">
          <DiReact size={72} />
        </div>
        <div className="w-28 h-28 cursor-pointer bg-purple-400 flex items-center justify-center rounded-lg">
          <TbBrandNextjs size={72} />
        </div>
        <div className="w-28 h-28 cursor-pointer bg-purple-400 flex items-center justify-center rounded-lg">
          <SiTailwindcss size={72} />
        </div>
        <div className="w-28 h-28 cursor-pointer bg-purple-400 flex items-center justify-center rounded-lg">
          <SiStyledcomponents size={72} />
        </div>
        <div className="w-28 h-28 cursor-pointer bg-purple-400 flex items-center justify-center rounded-lg">
          <SiMui size={72} />
        </div>
        <div className="w-28 h-28 cursor-pointer bg-purple-400 flex items-center justify-center rounded-lg">
          <FaBootstrap size={72} />
        </div>
        <div className="w-28 h-28 cursor-pointer bg-purple-400 flex items-center justify-center rounded-lg">
          <DiNodejsSmall size={72} />
        </div>
    </div>
)}

export default TechsCard