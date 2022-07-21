import React from 'react'
import { motion } from "framer-motion"

import './SliderCard.css'

const SliderCard = ({imgSrc}) => {
  return (
    <motion.div className='slider-card'>
        <img src={imgSrc} alt="Devicon"/>
    </motion.div>
  )
}

export default SliderCard