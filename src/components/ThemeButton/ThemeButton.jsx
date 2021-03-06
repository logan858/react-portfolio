import './ThemeButton.css';
import { motion } from "framer-motion";

export default function ThemeButton(props) {
    const handleTheme = () => {
        if(props.theme === "Dark") {
            props.setTheme("Light")
            props.setColor("rgba(200, 200, 200, 0.4")
            props.setAccentColor("rgba(47, 47, 47, 0.9)")
        } else {
            props.setTheme("Dark")
            props.setColor("rgba(25, 25, 25, 0.9)")
            props.setAccentColor("rgba(255, 255, 255, 1)")
        }
    }

    return (
        <div>
            <div onClick={() => handleTheme()} id="theme" style={props.theme === "Dark" ?{backgroundColor: 'rgba(47, 47, 47, 0.8)'} : {backgroundColor: 'rgba(200, 200, 200, 0.4'}}>
                <motion.svg 
                    initial={{ rotate: 0 }}
                    animate={{rotate: 360}}
                    transition={{ 
                        ease: "linear",
                        duration: 2,
                        repeat: Infinity,
                    }}
                >
                    <path id="theme-button-path" fill={props.theme === 'Light' ? 'rgba(47, 47, 47, 0.9)' : 'rgba(255, 255, 255, 0.6)'} d="M10.7,19.3c-0.3,0-0.5-0.2-0.6-0.4l-0.5-1.9c-0.9-0.1-1.8-0.3-2.6-0.7l-1.4,1.4c-0.2,0.2-0.6,0.2-0.8,0
                        l-2.5-2.5c-0.2-0.2-0.2-0.6,0-0.8l1.4-1.4c-0.2-0.4-0.4-0.8-0.5-1.3C3.1,11.2,3,10.7,3,10.3L1.1,9.8c-0.2,0-0.3-0.1-0.4-0.3
                        C0.6,9.4,0.6,9.2,0.7,9.1l0.9-3.4c0-0.2,0.1-0.3,0.3-0.4C2,5.3,2.1,5.2,2.3,5.3l1.9,0.5C4.7,5,5.3,4.4,6.1,3.9L5.6,2
                        C5.5,1.6,5.7,1.3,6,1.2l3.4-0.9c0.3-0.1,0.6,0.1,0.7,0.4l0.5,1.9c0.9,0.1,1.8,0.3,2.6,0.7L14.6,2c0.2-0.2,0.6-0.2,0.8,0l2.5,2.5
                        c0.2,0.2,0.2,0.6,0,0.8l-1.4,1.4c0.2,0.4,0.4,0.8,0.5,1.3c0.1,0.4,0.2,0.9,0.2,1.3l1.9,0.5c0.3,0.1,0.5,0.4,0.4,0.7l-0.9,3.4
                        c0,0.2-0.1,0.3-0.3,0.4c-0.1,0.1-0.3,0.1-0.4,0.1L16,13.8c-0.5,0.8-1.2,1.4-1.9,1.9l0.5,1.9c0.1,0.3-0.1,0.6-0.4,0.7l-3.4,0.9
                        C10.8,19.3,10.7,19.3,10.7,19.3z M6.9,14.9c0.1,0,0.2,0,0.3,0.1c0.9,0.5,1.9,0.8,2.9,0.8c0.3,0,0.5,0.2,0.6,0.4l0.5,1.8l2.2-0.6
                        l-0.5-1.8c-0.1-0.3,0-0.5,0.3-0.7c0.9-0.5,1.6-1.2,2.1-2.1c0.1-0.2,0.4-0.3,0.7-0.3l1.8,0.5l0.6-2.2l-1.8-0.5
                        c-0.3-0.1-0.4-0.3-0.4-0.6c0-0.5-0.1-1-0.2-1.5l0,0c-0.1-0.5-0.3-1-0.6-1.4c-0.1-0.2-0.1-0.5,0.1-0.7l1.3-1.3l-1.6-1.6l-1.3,1.3
                        c-0.2,0.2-0.5,0.2-0.7,0.1c-0.9-0.5-1.9-0.8-2.9-0.8c-0.3,0-0.5-0.2-0.6-0.4L9.2,1.6L6.9,2.2L7.3,4c0.1,0.3,0,0.5-0.3,0.7
                        C6.2,5.2,5.5,5.9,5,6.8C4.8,7,4.6,7.1,4.3,7L2.5,6.6L1.9,8.8l1.8,0.5c0.3,0.1,0.4,0.3,0.4,0.6c0,0.5,0.1,1,0.2,1.5
                        c0.1,0.5,0.3,1,0.6,1.4C5,13,5,13.3,4.8,13.5l-1.3,1.3l1.6,1.6l1.3-1.3C6.6,15,6.7,14.9,6.9,14.9z M10.1,13.4
                        c-0.6,0-1.2-0.2-1.8-0.5c-0.8-0.5-1.4-1.3-1.7-2.2S6.5,8.8,7,8c0.5-0.8,1.3-1.4,2.2-1.7c1.9-0.5,3.9,0.6,4.5,2.6
                        c0.3,0.9,0.1,1.9-0.4,2.8c-0.5,0.8-1.3,1.4-2.2,1.7l0,0C10.7,13.4,10.4,13.4,10.1,13.4z M10.9,12.7L10.9,12.7L10.9,12.7z M10.1,7.3
                        c-0.2,0-0.4,0-0.6,0.1C8.8,7.6,8.3,8,8,8.5s-0.4,1.2-0.3,1.9c0.2,0.6,0.6,1.2,1.2,1.5s1.2,0.4,1.9,0.3l0,0c0.6-0.2,1.2-0.6,1.5-1.2
                        s0.4-1.2,0.3-1.9C12.2,8,11.2,7.3,10.1,7.3z"/>
                </motion.svg>
            </div>
        </div>
    )
}