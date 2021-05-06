import React from 'react';
import ContactForm from '../../components/ContactForm/ContactForm'

export default function ContactPage(props) {
    return (
        <div 
            className="content-frame"
            style={{backgroundColor: props.color}}
        >
            <ContactForm theme={props.theme}/>
        </div>
    )
}