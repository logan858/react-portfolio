import React, { useEffect, useState } from 'react';
import PortfolioItem from '../../components/PortfolioItem/PortfolioItem'
import './PortfolioPage.css';

export default function PortfolioPage(props) {
    const [portItems, setPortItems] = useState([])

    const getPorts = async () => {
        await fetch("/api")
        .then((res) => res.json())
        .then(data => setPortItems({data}))
    }

    useEffect(() => {
        console.log("loop")
        getPorts()
        console.log(portItems)
        return () => console.log("meow")
    }, [])
    console.log(portItems)
    return (
        <div 
            className="content-frame"
            style={{backgroundColor: props.color}}    
        >
            {props.portfolio.map(port =>
                <PortfolioItem 
                    key={port.name} 
                    name={port.name} 
                    category={port.category} 
                    link={port.link}
                    pic={port.pic}
                />
            )}
        </div>
    )
}