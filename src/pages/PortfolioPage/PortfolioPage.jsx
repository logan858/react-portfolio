import React, { useEffect, useState } from 'react';
import PortfolioItem from '../../components/PortfolioItem/PortfolioItem'
import { motion } from 'framer-motion';

export default function PortfolioPage(props) {
    const [portItems, setPortItems] = useState([])

    const getPorts = async () => {
        await fetch("/api")
        .then((res) => res.json())
        .then(data => setPortItems({data}))
    }

    useEffect(() => {
        getPorts()
    }, [])

    return (
        <motion.div 
            className="content-frame"
            style={props.theme === "Dark" ? { borderLeft: 'rgba(47, 47, 47, 0.3) dashed 1px', backgroundColor: props.color} : { borderLeft: 'rgba(27, 27, 27, 0.1) dashed 1px', backgroundColor: props.color}}
            initial={{ x: 7000}}
            animate={{ 
                x: 0, 
                transition: {
                    duration: 0.5
                }
            }}   
            exit={{  
                x: 7000, 
                transition: {
                    duration: 0.5
                }
            }} 
        >
            {portItems.data && portItems.data.map((port, index) =>
                <PortfolioItem 
                    key={index}
                    idName={index} 
                    name={port.name} 
                    category={port.technologies} 
                    link={port.link}
                    pic={port.pic}
                    github={port.github}
                    theme={props.theme}
                />
            )}
        </motion.div>
    )
}