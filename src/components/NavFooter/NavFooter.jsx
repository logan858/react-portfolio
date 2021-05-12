import React from 'react';
import './NavFooter.css'

export default function NavFooter(props) {
    return (
        <>
            <div 
                className="nav-footer"
                style={props.theme === "Dark" ? {borderTop: 'rgba(47, 47, 47, 0.3) dashed 1px' } : {borderTop: 'rgba(27, 27, 27, 0.1) dashed 1px' }}
            >
                {props.inputText}<br/>
            </div>
        </>
    )
}