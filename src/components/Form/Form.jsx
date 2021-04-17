import { Component } from 'react';
import './Form.css'

export default class Form extends Component {
    state = {
        name: "",
        content: "",
    };
    handleSubmit = async () => {
        let body = { 
            content: this.state.content,
            name: this.state.name,
            topic: this.state.topic,
         }
        let options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(body)
        };
        await fetch("/api", options)
          .then(res => res.json())
          .then(data => {
            this.props.getPosts();
            this.setState({ content: "", name: "", topic: "" })
          })
      }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    render() {
        return(
            <div className="form">
                name: 
                <input 
                    name="name"    
                    onChange={this.handleChange}
                    value={this.state.name}
                    className="form-input">
                </input>
                subject: 
                <input 
                    name="topic"    
                    onChange={this.handleChange}
                    value={this.state.topic}
                    className="form-input">
                </input>
                message:
                <textarea 
                    name="content"
                    onChange={this.handleChange}
                    value={this.state.content}
                    className="form-input">
                </textarea>
                <br/>
                <button onClick={this.handleSubmit}>Submit!</button>
            </div>
        )
    }
}