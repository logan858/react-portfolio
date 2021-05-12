import React from 'react';
import ContactForm from '../../components/ContactForm/ContactForm'
import { motion } from 'framer-motion';

export default function ContactPage(props) {
    return (
        <motion.div 
            initial={{ x: 8000}}
            animate={{ 
                x: 0, 
                transition: {
                    duration: 0.5,
                }
            }}   
            exit={{  
                x: 8000, 
                transition: {
                    duration: 0.5
                }
            }} 
            className="content-frame"
            style={props.theme === "Dark" ? { borderLeft: 'rgba(47, 47, 47, 0.3) dashed 1px', backgroundColor: props.color} : { borderLeft: 'rgba(27, 27, 27, 0.1) dashed 1px', backgroundColor: props.color}}
        >
            <ContactForm theme={props.theme}/>
        </motion.div>
    )
}