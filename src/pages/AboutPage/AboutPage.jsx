import React from 'react';
import { motion } from 'framer-motion'
import AboutComp from '../../components/AboutComp/AboutComp'

export default function AboutPage(props) {
    return (
        <motion.div 
            initial={{ x: 4000}}
            animate={{ 
                x: 0, 
                transition: {
                    duration: 0.35,
                }
            }}   
            exit={{  
                x: 8000, 
                transition: {
                    duration: 0.35
                }
            }} 
            className="content-frame"
            style={props.theme === "Dark" ? { borderLeft: 'rgba(47, 47, 47, 0.3) dashed 1px', backgroundColor: props.color} : { borderLeft: 'rgba(27, 27, 27, 0.1) dashed 1px', backgroundColor: props.color}}
        >
            <AboutComp theme={props.theme}/>
        </motion.div>
    )
}