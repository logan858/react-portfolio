import React from 'react';
import './PortfolioItem.css'
import { Link } from 'react-router-dom';

export default function PortfolioItem(props){
    const idNames = ['one-port', 'two-port', 'three-port', 'four-port', 'five-port', 'six-port']

    return (
        <div id={idNames[props.idName]} className="portfolio-item">
            <Link to={`project-${props.name}`}>
                <div>
                    <br/>
                    
                    <div 
                        className="port-pics-container"
                        style={{ backgroundImage: `url(${props.pic[0]})` }} 
                        alt={`project-screen-${idNames[props.idName]}`}
                    >
                       
                    </div>
                        name: {props.name}<br/>
                        tech: {props.category}<br/>
                        link: {props.link}<br/>
                        {/* pic: {props.pic[0]} */}
                </div>
            </Link>
    </div>
    )
}