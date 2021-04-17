import React from 'react';
import { Link } from 'react-router-dom'
import './BlogPost.css';

export default function BlogPost(props) {
    return (
        <div className="details">
            <p classname="blog-title">{props.post.createdAt}</p>
            <p className="blog-topic">{props.post.topic}</p>
            <p className="blog-content">{props.post.content}</p>
            <p className="blog-name">- {props.post.name}</p>
            <button className="blog-button">Edit</button>
            <button className="blog-button">Delete</button><br/>
        </div>
    )
}