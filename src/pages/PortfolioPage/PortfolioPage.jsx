import React from 'react';
import PortfolioItem from '../../components/PortfolioItem/PortfolioItem'
import './PortfolioPage.css';

class PortfolioPage extends React.Component {
    render() {
        return (
            <div className="portfolio-frame">
                {this.props.portfolio.map(port =>
                    <PortfolioItem name={port.name} category={port.category} link={port.link}/>
                )}
            </div>
        )
    }
}

export default PortfolioPage;