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
                    id name: {props.idName}<br/>
                    name: {props.name}<br/>
                    tech: {props.category}<br/>
                    link: {props.link}<br/>
                    <img className="port-pics" src={`${props.pic[0]}`}/>
                    pic: {props.pic[0]}
                </div>
            </Link>
    </div>
    )
}