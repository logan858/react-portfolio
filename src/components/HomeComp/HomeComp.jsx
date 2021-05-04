import './HomeComp.css';
import {useState, useEffect} from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function HomeComp() {
    const [showTitle, setShowTitle] = useState(true)
    const [displayTitle, setDisplayTitle] = useState({newTitle: 'developer'})
    const [count, setCount] = useState(1);

    const titles = ["software developer", "designer", "software engineer", "fullstack"]

    useEffect(() => {
        const interval = setInterval(() => {
            let newTitle = titles[Math.floor(Math.random()*titles.length)] 
            setDisplayTitle({newTitle})
            setCount(prevCount => prevCount + 1)
            setShowTitle(true)
        }, 2500)
        return () => clearInterval(interval);
    })
    
    setTimeout(() => {
        setShowTitle(false)
    }, 2000)

    return (
        <div className ="home-container"> 
            <motion.div 
                className="home-content"
                animate={{ opacity: [null, 0.5, 1]}}
                transition={{ duration: 5, time: [0, 0.5, 1], repeat: Infinity}}
            >
                logan j. major
            </motion.div>
            
            <motion.div className="home-subcontent">
                <span className="return-content">return  </span>
                <AnimatePresence>
                    {showTitle &&
                        <motion.span
                            className="return-title-content"
                            key={count}
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            exit={{opacity: 0}}
                        >
                            {displayTitle.newTitle}
                        </motion.span>
                    }
                </AnimatePresence>
                <span className="return-close-content">&nbsp;)</span>
            </motion.div>
        </div>
    )
}