import React from 'react';
import './ContactForm.css'

class ContactForm extends React.Component {
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
                this.setState({name: "", email: "", message: "", contact: "Message Sent"})
            })
            .then(data => {console.log("Success: ", data)})
            .catch(err => {console.log("Error: ", err)})
    }
    handleChange = (evnt) => {
        this.setState({ [evnt.target.name]: evnt.target.value})
    }
    render() {
        return (
        <div className="portfolio-frame">
            <div className="contact-form">
                <form onSubmit={this.handleContact}>
                    <label>
                        <span>Name </span>
                        <input 
                            name="name"
                            value={this.state.name}
                            onChange={this.handleChange}
                        />
                    </label><br/>
                    <label>
                        <span>Email </span>
                        <input 
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </label><br/>
                    <label>
                        <span>Message </span>
                        <textarea 
                            name="message"
                            value={this.state.message}
                            onChange={this.handleChange}
                            rows="7"
                            cols="35"
                        />
                    </label><br/>
                    <button onClick={this.handleContact}>Send</button>
                </form>
            </div>
            <div className="message-success">
                {this.state.contact &&
                    <h4>{this.state.contact}</h4>
                }
            </div>
        </div>
        )
    }
}

export default ContactForm;