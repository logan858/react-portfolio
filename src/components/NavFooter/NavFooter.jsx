import React from 'react';
import './NavFooter.css'
import { Link } from 'react-router-dom';


class NavFooter extends React.Component {
    render() {
        return (
            <>
            <Link to="/blog">
                <div className="nav-footer">
                    {this.props.inputText}<br/>
                </div>
            </Link>
            </>
        )
    }
}

export default NavFooter;