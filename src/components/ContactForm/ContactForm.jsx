import React from 'react';
import './ContactForm.css'

export default class ContactForm extends React.Component {
    state = {
        name: "",
        email: "",
        message: "",
        contact: ""
    }
    handleContact = async (evnt) => {
        evnt.preventDefault();
        let body = {...this.state}
        let options = {
            method: "POST",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(body)
        }
        await fetch("/api/contact", options)
            .then(res=> {console.log("Success: ", res)})
            .then(data => {
                this.setState({name: "", email: "", message: "", contact: "Message Sent Succesfully"})
            })
            .catch(err => {console.log("Error: ", err)})
    }
    handleChange = (evnt) => {
        this.setState({ [evnt.target.name]: evnt.target.value})
    }
    addColor = (evnt) => {
        let elemnt = evnt.target
        if(this.props.theme === 'Dark') {
            elemnt.style.color = 'white'
        } else {    
            elemnt.style.color = 'rgb(131, 131, 131)'
        }
    }
    removeColor = (evnt) => {
        let elemnt = evnt.target
        if(this.props.theme === 'Dark') {
            elemnt.style.color = 'rgb(171, 171, 171)'
        } else {    
            elemnt.style.color = 'black'
        }
    }

    render() {
        return (
        <>
            <div 
                id="contact-welcome-message" 
                style={this.props.theme === "Dark" ? {color: 'rgb(171, 171, 171)'} : {color: 'black'}} 
                onMouseEnter={evnt => this.addColor(evnt)}
                onMouseOut={evnt => this.removeColor(evnt)}
            >
                Heya, it's me, Logan,<br/> Always available to talk, don't hesitate to reach out!
            </div>
            <div className="contact-form">
                <form 
                    onSubmit={this.handleContact}
                    method="POST"
                >
                    <label className="contact-form-input">
                        <span 
                            style={this.props.theme === "Dark" ? {color: 'rgb(171, 171, 171)'} : {color: 'black'}} 
                            onMouseEnter={evnt => this.addColor(evnt)}
                            onMouseOut={evnt => this.removeColor(evnt)}
                        >
                                Name 
                        </span><br/>
                        <input 
                            name="name"
                            value={this.state.name}
                            onChange={this.handleChange}
                            required
                        />
                    </label><br/>
                    <label className="contact-form-input">
                        <span 
                            onMouseEnter={evnt => this.addColor(evnt)}
                            onMouseOut={evnt => this.removeColor(evnt)}
                            style={this.props.theme === "Dark" ? {color: 'rgb(171, 171, 171)'} : {color: 'black'}}
                        >
                            Email 
                        </span><br/>
                        <input 
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                            required
                        />
                    </label><br/>
                    <label className="contact-form-input">
                        <span 
                            onMouseEnter={evnt => this.addColor(evnt)}
                            onMouseOut={evnt => this.removeColor(evnt)}
                            style={this.props.theme === "Dark" ? {color: 'rgb(171, 171, 171)'} : {color: 'black'}}
                        >
                            Message
                        </span><br/>
                        <textarea 
                            name="message"
                            value={this.state.message}
                            onChange={this.handleChange}
                            rows="7"
                            cols="35"
                            required
                        />
                    </label><br/>
                    <button 
                        type="submit"
                        className="contact-button"
                        style={this.props.theme === "Dark" ? {color: 'rgb(171, 171, 171)', borderColor: 'rgb(171, 171, 171)'} : {color: 'black'}}
                    >
                            Send
                    </button>
                </form>
            </div>
            <div className="message-success">
                {this.state.contact &&
                    <span 
                        style={this.props.theme === "Dark" ? {color: 'rgb(131, 131, 131)', borderColor: 'rgb(131, 131, 131)'} : {color: 'black'}} 
                        onMouseEnter={evnt => this.addColor(evnt)}
                        onMouseOut={evnt => this.removeColor(evnt)}
                    >
                        {this.state.contact}
                    </span>
                }
            </div>
        </>
        )
    }
}