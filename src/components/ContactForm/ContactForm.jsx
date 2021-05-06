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
            .then(res=> res.json())
            .then(data => {
                this.setState({name: "", email: "", message: "", contact: "Message Sent Succesfully"})
            })
            .then(data => {console.log("Success: ", data)})
            .catch(err => {console.log("Error: ", err)})
    }
    handleChange = (evnt) => {
        this.setState({ [evnt.target.name]: evnt.target.value})
    }

    render() {
        return (
        <>
            <div id="contact-welcome-message">
                Message from Logan: I'm always available to talk, don't hesitate to reach out!
            </div>
            <div className="contact-form">
                <form onSubmit={this.handleContact}>
                    <label className="contact-form-input">
                        <span style={this.props.theme === "Dark" ? {color: 'rgb(131, 131, 131)'} : {color: 'black'}} onMouseOver={this.changeColor}>Name </span><br/>
                        <input 
                            name="name"
                            value={this.state.name}
                            onChange={this.handleChange}
                            required
                        />
                    </label><br/>
                    <label className="contact-form-input">
                        <span style={this.props.theme === "Dark" ? {color: 'rgb(131, 131, 131)'} : {color: 'black'}}>Email </span><br/>
                        <input 
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                            required
                        />
                    </label><br/>
                    <label className="contact-form-input">
                        <span style={this.props.theme === "Dark" ? {color: 'rgb(131, 131, 131)'} : {color: 'black'}}>Message</span><br/>
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
                        onClick={this.handleContact} 
                        className="contact-button"
                        style={this.props.theme === "Dark" ? {color: 'rgb(131, 131, 131)', borderColor: 'rgb(131, 131, 131)'} : {color: 'black'}}
                    >
                            Send
                    </button>
                </form>
            </div>
            <div style={this.props.theme === "Dark" ? {color: 'rgb(131, 131, 131)', borderColor: 'rgb(131, 131, 131)'} : {color: 'black'}} className="message-success">
                {this.state.contact &&
                    <span>{this.state.contact}</span>
                }
            </div>
        </>
        )
    }
}