import React from 'react';
import PortfolioItem from '../PortfolioItem/PortfolioItem'
import './Details.css';

class Details extends React.Component {
    render() {
        return (
            <div className="details">
                {this.props.portfolio.map(port =>
                    <PortfolioItem name={port.name} category={port.category} link={port.link}/>
                )}
            </div>
        )
    }
}

export default Details;