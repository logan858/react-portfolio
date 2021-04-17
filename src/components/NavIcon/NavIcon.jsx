import React from 'react';
import './NavIcon.css'
import { Link } from 'react-router-dom'

class NavIcon extends React.Component {
    render() {
        return (
            <div className="nav-icon">
                <Link to="/">
                top
                </Link>
            </div>
        )
    }
}

export default NavIcon;