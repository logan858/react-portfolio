import './HomeComp.css';
import {useState, useEffect} from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function HomeComp() {
    const [displayTitle, setDisplayTitle] = useState('developer')
    const [count, setCount] = useState(1);

    useEffect(() => {
        const intervalID = setInterval(() => {
            setCount((prevCount) => prevCount + 1)
        }, 3500)
        return () => clearInterval(intervalID)
    }, [])

    useEffect(() => {
        const titles = ["software developer", "designer", "software engineer", "fullstack"]
        let newTitle = titles[Math.floor(Math.random()*titles.length)] 
        setDisplayTitle(newTitle)
    }, [count])

    return (
        <motion.div 
            className ="home-container"
            initial={{opacity: 0}}
            animate={{ 
                opacity: 1, 
                transition: {
                    duration: 0.35
                }
            }}   
            exit={{  
                opacity: 0, 
                transition: {
                    duration: 0.35
                }
            }} 
        > 
            <motion.div 
                className="home-content"
                animate={{ opacity: [null, 0.5, 1]}}
                transition={{ duration: 5, times: [0, 0.5, 1], repeat: Infinity}}
            >
                logan j. major
            </motion.div>
            
            <div className="home-subcontent">
                <span className="return-content">return  </span>
                <AnimatePresence exitBeforeEnter>   
                    <motion.span
                        key={count}
                        className="return-title-content"
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: -1, transition: {
                            duration: 1
                        }}}
                    >
                        {displayTitle}
                    </motion.span>
                </AnimatePresence>
                <span className="return-close-content">{")"}</span>
            </div>
        </motion.div>
    )
}