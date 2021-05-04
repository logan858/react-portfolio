import React from 'react';
import PortfolioItem from '../../components/PortfolioItem/PortfolioItem'
import './PortfolioPage.css';

export default function PortfolioPage(props) {
    return (
        <div className="content-frame">
            {props.portfolio.map(port =>
                <PortfolioItem name={port.name} category={port.category} link={port.link}/>
            )}
        </div>
    )
}