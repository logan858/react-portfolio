import './NavIcon.css'
import { colorChooser } from '../../servics/ColorChooser'
import { motion } from 'framer-motion'

export default function NavIcon(props) {
    
    const iconColor = () => {
        let randomColor = colorChooser()
        props.newColor(randomColor)
    }

    return (
        <div className="nav-icon">
            <motion.div 
                className="nav-icon-container"
                whileTap={{
                    scale: 2,
                }}
            > 
                <svg 
                    height="32px" 
                    style={{fill: props.iconStyle}}
                    onClick={() => iconColor()}
                    className="icon-svg"
                > 
                    <path className="st0" d="M9.8,25c0,0,0.8-1.8,0.9-2.3c0.1-0.5-6.8-5.7-6.8-5.7s1.7-0.5,1.8-0.9C5.8,15.8,4.3,12,4.3,12s3.6,0.9,4,0.7
                        s0.7-1.3,1-2l2.8,3.1c0.5,0.4,1,0.4,0.9-0.3l-1.5-7.3l2,1.1c0.3,0.2,0.7,0.3,1,0l2.3-4.7l2.4,4.5c0.2,0.3,0.4,0.4,0.8,0.2l2-1.2
                        l-1.3,7c-0.1,0.8,0.1,1,0.6,0.7l3-3.1c0,0,0.5,1.8,1,1.8c0.5,0.1,4-0.6,4-0.6s-1,3-1.1,3.9C28,16.8,29.5,17,29.5,17
                        s-6.4,5.2-6.5,5.6c-0.1,0.4,0.8,2.5,0.8,2.5l-5.7-1.2c-0.6-0.1-0.9,0.1-1,0.5l0.3,6.3h-1.3l0.3-6.3c-0.1-0.4-0.3-0.6-0.8-0.5L9.8,25
                        z"/>
                </svg>
            </motion.div>
        </div>
    )
}