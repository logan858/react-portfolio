import React from 'react';
import MenuList from '../MenuList/MenuList';
import Details from '../Details/Details';

class Background extends React.Component {
    render() {
        return (
            <div className="container">
                <MenuList/>
               <Details/>
            </div>
        )
    }
}

export default Background;