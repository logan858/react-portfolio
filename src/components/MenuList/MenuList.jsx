import React from 'react';
import NavIcon from '../NavIcon/NavIcon'
import NavFooter from '../NavFooter/NavFooter'
import './MenuList.css';
import { Link } from 'react-router-dom';

class MenuList extends React.Component {
    render() {
        if(this.props.theme === "Dark") {
            return (
                <div className="left-nav-body">
                    <NavIcon/>
                    <Link to='/home'>
                        <div className="icon-container">
                            <svg height="40px" className="menu-list-svg">
                                <path d="M1.3,15.5L16.3,2c0.8-0.8,1.6-0.7,2.5,0l3.4,3.3V2.9h3.6v5.6l6.6,6.6c0.7,0.7,0.6,1.3,0.2,1.9l-1,1.3 c-0.5,0.5-1.1,0.6-1.7-0.1L19.1,7.1C18,6.2,17,6,15.9,6.9L3.8,18.6c-0.6,0.5-1.1,0.4-1.5,0l-1.2-1.7C0.8,16.4,0.8,15.9,1.3,15.5z"/>
                                <path d="M16,8.6c0.9-0.8,1.9-0.8,2.8,0l10,10.7l0.3,13.1c-0.1,0.7-0.4,1.1-1.2,1.1h-5.6c-0.7-0.1-1.1-0.5-1.1-1.2 l-0.1-6.7h-8.7v6.6c-0.1,0.9-0.5,1.3-1.2,1.3H5.9c-0.7-0.1-1.1-0.5-1.2-1.3v-13L16,8.6z"/>
                            </svg>
                        </div>
                    </Link>
                    <Link to='/portfolio'>
                        <div className="icon-container">
                            <svg height="32px" className="menu-list-svg">
                                <path d="M2.6,3.9l9.8,0v-1C12.6,2.3,13,2,13.7,2h6.6c0.9,0,1.4,0.4,1.5,1.1v0.9h10c0.9,0,1.2,0.4,1.3,1.2v4L19,14.8 v-0.7c0-0.4-0.2-0.6-0.6-0.6l-2.4,0c-0.4,0-0.6,0.1-0.6,0.5v0.5L1.2,9.5V5.3C1.3,4.5,1.7,4,2.6,3.9z"/>
                                <path d="M1.6,10.9l13.7,5v1c0,0.3,0.1,0.5,0.5,0.5h2.8c0.3,0,0.5-0.1,0.5-0.4v-0.8l13.7-5.8V25c0,0.7-0.3,1-0.8,0.9 L2.7,26c-0.8,0.1-1.1-0.3-1-1.1L1.6,10.9z"/>
                            </svg>
                        </div>
                    </Link>
                    <Link to='/contact'>
                        <div className="icon-container">
                            <svg height="32px" className="menu-list-svg">
                                <path d="M28,5H4C1.791,5,0,6.792,0,9v13c0,2.209,1.791,4,4,4h24c2.209,0,4-1.791,4-4V9  C32,6.792,30.209,5,28,5z M2,10.25l6.999,5.25L2,20.75V10.25z M30,22c0,1.104-0.898,2-2,2H4c-1.103,0-2-0.896-2-2l7.832-5.875  l4.368,3.277c0.533,0.398,1.166,0.6,1.8,0.6c0.633,0,1.266-0.201,1.799-0.6l4.369-3.277L30,22L30,22z M30,20.75l-7-5.25l7-5.25  V20.75z M17.199,18.602c-0.349,0.262-0.763,0.4-1.199,0.4c-0.436,0-0.851-0.139-1.2-0.4L10.665,15.5l-0.833-0.625L2,9.001V9  c0-1.103,0.897-2,2-2h24c1.102,0,2,0.897,2,2L17.199,18.602z"/>
                            </svg>
                        </div>
                    </Link>
                    <Link to='/about'>
                        <div className="icon-container">
                            <svg height="32px" className="menu-list-svg">
                                <path d="M3.158,26.134C6.066,23.557,5,21,5,21l7,2c0,0-3.663,3.721-8.417,3.99L3.158,26.134z"/><circle cx="3.5" cy="26.5" r="0.5"/><path d="M15,3C7.82,3,2,7.925,2,14s5.82,11,13,11s13-4.925,13-11S22.18,3,15,3z M16,20h-2v-7h2V20z M15,10.5  c-0.828,0-1.5-0.672-1.5-1.5s0.672-1.5,1.5-1.5s1.5,0.672,1.5,1.5S15.828,10.5,15,10.5z"/>
                            </svg>
                        </div>
                    </Link>
                    <NavFooter inputText={'Blog'}/>
                </div>
            )
            } else {
                return (
                    <div className="left-nav-body" style={{backgroundColor: this.props.color}}>
                        <NavIcon/>
                        <Link to='/home'>
                            <div className="icon-container">
                                <svg height="40px" style={{fill: this.props.accentColor}} className="menu-list-svg">
                                    <path d="M1.3,15.5L16.3,2c0.8-0.8,1.6-0.7,2.5,0l3.4,3.3V2.9h3.6v5.6l6.6,6.6c0.7,0.7,0.6,1.3,0.2,1.9l-1,1.3 c-0.5,0.5-1.1,0.6-1.7-0.1L19.1,7.1C18,6.2,17,6,15.9,6.9L3.8,18.6c-0.6,0.5-1.1,0.4-1.5,0l-1.2-1.7C0.8,16.4,0.8,15.9,1.3,15.5z"/>
                                    <path d="M16,8.6c0.9-0.8,1.9-0.8,2.8,0l10,10.7l0.3,13.1c-0.1,0.7-0.4,1.1-1.2,1.1h-5.6c-0.7-0.1-1.1-0.5-1.1-1.2 l-0.1-6.7h-8.7v6.6c-0.1,0.9-0.5,1.3-1.2,1.3H5.9c-0.7-0.1-1.1-0.5-1.2-1.3v-13L16,8.6z"/>
                                </svg>
                            </div>
                        </Link>
                        <Link to='/portfolio'>
                            <div className="icon-container">
                                <svg height="32px" style={{fill: this.props.accentColor}} className="menu-list-svg">
                                    <path d="M2.6,3.9l9.8,0v-1C12.6,2.3,13,2,13.7,2h6.6c0.9,0,1.4,0.4,1.5,1.1v0.9h10c0.9,0,1.2,0.4,1.3,1.2v4L19,14.8 v-0.7c0-0.4-0.2-0.6-0.6-0.6l-2.4,0c-0.4,0-0.6,0.1-0.6,0.5v0.5L1.2,9.5V5.3C1.3,4.5,1.7,4,2.6,3.9z"/>
                                    <path d="M1.6,10.9l13.7,5v1c0,0.3,0.1,0.5,0.5,0.5h2.8c0.3,0,0.5-0.1,0.5-0.4v-0.8l13.7-5.8V25c0,0.7-0.3,1-0.8,0.9 L2.7,26c-0.8,0.1-1.1-0.3-1-1.1L1.6,10.9z"/>
                                </svg>
                            </div>
                        </Link>
                        <Link to='/contact'>
                            <div className="icon-container">
                                <svg height="32px" style={{fill: this.props.accentColor}} className="menu-list-svg">
                                    <path d="M28,5H4C1.791,5,0,6.792,0,9v13c0,2.209,1.791,4,4,4h24c2.209,0,4-1.791,4-4V9  C32,6.792,30.209,5,28,5z M2,10.25l6.999,5.25L2,20.75V10.25z M30,22c0,1.104-0.898,2-2,2H4c-1.103,0-2-0.896-2-2l7.832-5.875  l4.368,3.277c0.533,0.398,1.166,0.6,1.8,0.6c0.633,0,1.266-0.201,1.799-0.6l4.369-3.277L30,22L30,22z M30,20.75l-7-5.25l7-5.25  V20.75z M17.199,18.602c-0.349,0.262-0.763,0.4-1.199,0.4c-0.436,0-0.851-0.139-1.2-0.4L10.665,15.5l-0.833-0.625L2,9.001V9  c0-1.103,0.897-2,2-2h24c1.102,0,2,0.897,2,2L17.199,18.602z"/>
                                </svg>
                            </div>
                        </Link>
                        <Link to='/about'>
                            <div className="icon-container">
                                <svg height="32px" style={{fill: this.props.accentColor}} className="menu-list-svg">
                                    <path d="M3.158,26.134C6.066,23.557,5,21,5,21l7,2c0,0-3.663,3.721-8.417,3.99L3.158,26.134z"/><circle cx="3.5" cy="26.5" r="0.5"/><path d="M15,3C7.82,3,2,7.925,2,14s5.82,11,13,11s13-4.925,13-11S22.18,3,15,3z M16,20h-2v-7h2V20z M15,10.5  c-0.828,0-1.5-0.672-1.5-1.5s0.672-1.5,1.5-1.5s1.5,0.672,1.5,1.5S15.828,10.5,15,10.5z"/>
                                </svg>
                            </div>
                        </Link>
                        <NavFooter inputText={'Blog'}/>
                    </div>
                )
            }
    }
}

export default MenuList;