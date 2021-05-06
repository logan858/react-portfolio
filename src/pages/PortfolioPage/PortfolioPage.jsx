import React from 'react';
import PortfolioItem from '../../components/PortfolioItem/PortfolioItem'
import './PortfolioPage.css';

export default function PortfolioPage(props) {
    return (
        <div 
            className="content-frame"
            style={{backgroundColor: props.color}}    
        >
            {props.portfolio.map(port =>
                <PortfolioItem key={port.name} name={port.name} category={port.category} link={port.link}/>
            )}
        </div>
    )
}