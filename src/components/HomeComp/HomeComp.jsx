import './HomeComp.css';
import {useState, useEffect} from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function HomeComp() {
    const [showTitle, setShowTitle] = useState(true)
    const [displayTitle, setDisplayTitle] = useState({newTitle: 'developer'})
    const titles = ["developer", "designer", "engineer", "coder"]

    useEffect(() => {
        const interval = setInterval(() => {
            let newTitle = titles[Math.floor(Math.random()*titles.length)] 
            setDisplayTitle({newTitle})
            setShowTitle(true)
        }, 3000)
        return () => clearInterval(interval);
    })

    setTimeout(() => {
        setShowTitle(false)
    }, 2000)

    // const randTitle = () => {
    //     return titles[Math.floor(Math.random()*titles.length)];
    // }

    // const list = {
    //     visible: {
    //       opacity: 1,
    //       transition: {
    //         staggerChildren: 0.3
    //       }
    //     },
    //     hidden: {
    //       opacity: 0,
    //     }
    //   };
    //   const item = {
    //     visible: { opacity: 1, y: 0 },
    //     hidden: { opacity: 0, y: 50 },
    //   };

    return (
        <div className ="home-container">  
            <motion.div tansition={{repeat:Infinity, repeatType: "reverse",}} className="home-content">
                logan major
                
            {/* <AnimatePresence>
            {titles.map((item, index) => (
             showTitle && 
                <motion.div
                    className="home-subcontent"
                    initial={{opacity: 0}}
                    animate={{opacity: 1, transition: {duration: 2}}}
                    exit={{opacity: 0, transition: {duration: 2}}}
                    key={index}
                >     */}
                <AnimatePresence>
                    {showTitle &&
                    <motion.div 
                        className="home-subcontent"
                        initial={{opacity: 0, y: 50}}
                        animate={{opacity: 1, y: 0}}
                        exit={{opacity: 0, y: -50}}
                    >
                        {displayTitle.newTitle}
                    </motion.div>
                    }
                </AnimatePresence>
                
                {/* </motion.div> */}
{/*             
            ))}        
            </AnimatePresence> */}
            </motion.div>
        </div>
    )
}