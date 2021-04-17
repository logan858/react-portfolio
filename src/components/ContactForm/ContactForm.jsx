import React from 'react';
import './ContactForm.css'

class ContactForm extends React.Component {
    state = {
        name: "",
        email: "",
        message: "",
        contact: [{}]
    }
    handleContact = (evnt) => {
        evnt.preventDefault();
        let tempContact = [...this.state.contact]
        tempContact.push({
            name: this.state.name,
            email: this.state.email,
            message: this.state.message,
        })
        this.setState({
            contact: tempContact
        })
    }
    handleChange = (evnt) => {
        this.setState({ [evnt.target.name]: evnt.target.value})
    }
    render() {
        return (
        <div className="portfolio-frame">
            
            <form onSubmit={this.contactMe}>
                <label className="contact-form-left">
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
                <label className="contact-form-right">
                    <span>Message </span>
                    <textarea 
                        name="message"
                        value={this.state.message}
                        onChange={this.handleChange}
                        rows="7"
                        cols="35"
                    />
                </label>
                <button onClick={this.handleContact}>Send</button>
            </form>
        </div>
        )
    }
}

export default ContactForm;