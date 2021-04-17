import React from 'react';
import { Link } from 'react-router-dom'
import './BlogPost.css';
import { Component } from 'react';
import { request } from 'express';

class BlogPost extends Component {
    handleDelete = async () => {
        let id = this.props.post._id
        await fetch(`/api/delete/${id}`, 
        {method: "POST"}
        ).then(res => res.json())
    }
    render() {
        return (
            <div className="details">
                <p classname="blog-title">{this.props.post.createdAt}</p>
                <p className="blog-topic">{this.props.post.topic}</p>
                <p className="blog-content">{this.props.post.content}</p>
                <p className="blog-name">- {this.props.post.name}</p>
                <button className="blog-button">Edit</button>
                <Link to='/blog'>
                    <button onClick={this.handleDelete} className="blog-button">Delete</button><br/>
                </Link>
            </div>
        )
    }
}

export default BlogPost