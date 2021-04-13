import React from 'react';
import MenuList from '../MenuList/MenuList';
import Details from '../Details/Details';

class Background extends React.Component {
    render() {
        return (
            <div className="container">
                <MenuList username={this.props.userName} userEmail={this.props.userEmail}/>
                <Details portfolio={this.props.portfolio}/>
            </div>
        )
    }
}

export default Background;