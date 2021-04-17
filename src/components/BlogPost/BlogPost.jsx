import React from 'react';
import { Link } from 'react-router-dom'
import './BlogPost.css';
import { Component } from 'react';

class BlogPost extends Component {
    state = {
        edit: false,
        name: "",
        content: "",
        topic: "",
    }
    handleDelete = async () => {
        let id = this.props.post._id
        await fetch(`/api/delete/${id}`, 
        {method: "DELETE"}
        ).then(res => res.json())
        .then(data => {console.log("Success: ", data)})
        .catch(err => {console.log("Error: ", err)})
    }
    showEdit = () => {
        this.state.edit ?  
            this.setState({edit: false})
            : this.setState({ edit: true})
    }
    handleEdit = async () => {
        let body = { ...this.state}
        let options = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        }
        await fetch("/api/" + this.props.post._id, options)
        .then(res => res.json())
        .then(data => {
            this.setState({ name: "", content: "", topic: ""})
        })
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    render() {
        return (
            <div className="details">
                <p className="blog-title">{this.props.post.createdAt}</p>
                <p className="blog-topic">{this.props.post.topic}</p>
                <p className="blog-content">{this.props.post.content}</p>
                <p className="blog-name">- {this.props.post.name}</p>
                <button onClick={this.showEdit} className="blog-button">Edit</button>
                <Link to='/blog'>
                    <button onClick={this.handleDelete} className="blog-button">Delete</button><br/>
                </Link>
                {this.state.edit && 
                    <div><h3>edit blog</h3>
                        Name
                        <input
                            name="name"    
                            onChange={this.handleChange}
                            value={this.state.name}
                            className="form-input">
                        </input>
                        Subject
                        <input
                            name="topic"    
                            onChange={this.handleChange}
                            value={this.state.topic}
                            className="form-input">
                        </input>
                        Message:
                        <textarea 
                            name="content"
                            onChange={this.handleChange}
                            value={this.state.content}
                            className="form-input">
                        </textarea>
                        <Link to="/blog">
                            <button onClick={this.handleEdit}>Submit</button>
                        </Link>
                    </div>
                }
            </div>
        )
    }
}

export default BlogPost