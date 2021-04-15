import React from 'react';
import MenuList from '../MenuList/MenuList';
import Details from '../Details/Details';
import './Background.css';

class Background extends React.Component {
    render() {
        return (
            <div className="container">
                <MenuList 
                    username={this.props.userName} 
                    userEmail={this.props.userEmail} 
                    theme={this.props.theme}
                    color={this.props.color}
                    accentColor={this.props.accentColor}
                />
                <Details portfolio={this.props.portfolio}/>
            </div>
        )
    }
}

export default Background;