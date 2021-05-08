import React, { useEffect, useState } from 'react';
import PortfolioItem from '../../components/PortfolioItem/PortfolioItem'

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
    console.log(portItems.data)
    return (
        <div 
            className="content-frame"
            style={{backgroundColor: props.color}}    
        >
            {portItems.data && portItems.data.map((port, index) =>
                <PortfolioItem 
                    key={index}
                    idName={index} 
                    name={port.name} 
                    category={port.technologies} 
                    link={port.link}
                    pic={port.pic}
                />
            )}
        </div>
    )
}