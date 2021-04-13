import React from 'react';
import NavIcon from '../NavIcon/NavIcon'
import NavFooter from '../NavFooter/NavFooter'

class MenuList extends React.Component {
    render() {
        return (
            <div className="left-nav-body">
                <NavIcon/>
                <ul>
                    <li>Home</li>
                    <li>Portfolio</li>
                    <li>Contact</li>
                    <li>About</li>
                </ul>
                <NavFooter inputText={'footer'} userName={this.props.userName} userEmail={this.props.userEmail}/>
            </div>
        )
    }
}

export default MenuList;