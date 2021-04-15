import React from 'react';
import './PortfolioItem.css'

class PortfolioItem extends React.Component {
    render() {
        return (
            <div id={`project-${this.props.name}`} className="portfolio-item">
                <br/>
                name: {this.props.name}<br/>
                tech: {this.props.category}<br/>
                link: {this.props.link}
            </div>
        )
    }
}

export default PortfolioItem;