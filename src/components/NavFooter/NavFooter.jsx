import React from 'react';
import './NavFooter.css'

class NavFooter extends React.Component {
    render() {
        return (
            <div className="nav-footer">
                {this.props.inputText}<br/>
                {this.props.userName}
                {this.props.userEmail}
            </div>
        )
    }
}

export default NavFooter;