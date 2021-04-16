import React from 'react';
import './PortfolioItem.css'
import { Link } from 'react-router-dom';

class PortfolioItem extends React.Component {
    render() {
        return (
            <div id={`project-${this.props.name}`} className="portfolio-item">
                <Link to={`project-${this.props.name}`}>
                    <div>
                        <br/>
                        name: {this.props.name}<br/>
                        tech: {this.props.category}<br/>
                        link: {this.props.link}
                    </div>
                </Link>
        </div>
        )
    }
}

export default PortfolioItem;