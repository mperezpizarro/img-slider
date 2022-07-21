import React from 'react'
import { useRef, useEffect, useState } from 'react'
import { motion } from "framer-motion"
import SliderCard from './components/SliderCard'

import './App.css'

const App = () => {
    const innerSlider=useRef()
    const [width, setWidth] = useState()

    useEffect(() => {
        setWidth(innerSlider.current.scrollWidth - innerSlider.current.offsetWidth)
    }, [])
    

    const icons=[
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/electron/electron-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original-wordmark.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg'
    ]

    return (
        <div className="app">
            <motion.div ref={innerSlider} className="slider-container">
                <motion.div drag='x' dragConstraints={{right: 0, left: -width}} className="inner-slider">
                    {icons.map((iconUrl)=>{
                        return <SliderCard imgSrc={iconUrl} key={iconUrl} />
                    })}
                </motion.div>
            </motion.div>
        </div>
    )
}

export default App