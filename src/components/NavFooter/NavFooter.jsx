import React from 'react';
import './NavFooter.css'
import { motion } from 'framer-motion'

export default function NavFooter(props) {
    const navChooser = () => {
        if (props.iconStyle === 'white' && props.theme === 'Light') {
            return 'rgba(47, 47, 47, 0.9)'
        } else {
            return props.iconStyle
        }
    }

    const incIndex = () => {
        if(props.index + 1 >= props.backgrounds.length) {
            props.setIndex(0)
        } else {
            props.setIndex(props.index + 1)
        }
    }

    return (
        <>
            <div 
                className="nav-footer"
                style={props.theme === "Dark" ? {borderTop: 'rgba(47, 47, 47, 0.3) dashed 1px' } : {borderTop: 'rgba(27, 27, 27, 0.1) dashed 1px' }}
            >
                <motion.svg
                    whileTap={{
                        rotate: 45
                    }}
                    onClick={incIndex}
                >
                    <path style={{fill: `${navChooser()}`}} d="M39.8,43.1L39.8,43.1l-24.6-7c-0.1,0-0.3-0.1-0.3-0.3c-0.1-0.1-0.1-0.3,0-0.4l1-3.5l-7.4,1.7c-0.1,0-0.3,0-0.4-0.1s-0.2-0.2-0.2-0.3L2.7,10.8c0-0.1,0-0.3,0.1-0.4c0.1-0.1,0.2-0.2,0.3-0.2l24.8-5.8c0.3-0.1,0.6,0.1,0.7,0.4l2.5,10.7l15.4,4.4c0.3,0.1,0.5,0.4,0.4,0.7l-6.3,22.2C40.3,42.9,40.1,43.1,39.8,43.1z M16,35.2l23.4,6.7l6-21.1l-15.2-4.3c0,0,0,0-0.1,0l-8.2-2.3L16,35.2z M3.6,11.1l5,21.4l7.5-1.7l1.2-4.2l-8.2,1.9c-0.3,0.1-0.6-0.1-0.7-0.4L4.7,12.4c0-0.1,0-0.3,0.1-0.4c0.1-0.1,0.2-0.2,0.3-0.2l21.2-5c0.1,0,0.3,0,0.4,0.1c0.1,0.1,0.2,0.2,0.2,0.3l1.8,7.7l0.8,0.2l-2.2-9.6L3.6,11.1z M5.9,12.7l3.4,14.6l8.3-1.9l3.5-12.2c0-0.1,0.1-0.3,0.3-0.3c0.1,0,0.2-0.1,0.3-0.1h0.1l5.8,1.7L26.1,8L5.9,12.7z M39.4,37.9C39.3,37.9,39.3,37.9,39.4,37.9l-21.1-6c-0.3-0.1-0.5-0.4-0.4-0.7l4.4-15.5c0-0.1,0.1-0.3,0.3-0.3c0.1-0.1,0.3-0.1,0.4,0l21,6c0.3,0.1,0.5,0.4,0.4,0.7L40,37.6c0,0.1-0.1,0.3-0.3,0.3S39.5,37.9,39.4,37.9z M19.1,31L39,36.7l4.1-14.5l-19.9-5.7L19.1,31z"/>
                </motion.svg>
            </div>
        </>
    )
}