import React from 'react';
import './PortfolioItem.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function PortfolioItem(props){
    const [portNum, setPortNum] = useState()
    return (
        <div id={`project-${props.name}`} className="portfolio-item">
            <Link to={`project-${props.name}`}>
                <div>
                    <br/>
                    name: {props.name}<br/>
                    tech: {props.category}<br/>
                    link: {props.link}<br/>
                    {props.pic}
                </div>
            </Link>
    </div>
    )
}