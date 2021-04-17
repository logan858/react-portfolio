import React from 'react';
import { Link } from 'react-router-dom'
import './Post.css';

export default function Post(props) {
    return (
        <div className="post">
            <p className="title">{props.post.createdAt}</p>
            <p className="topic">{props.post.topic}</p>
            <p className="name">- {props.post.name}</p>
            <Link to={`/blog/${props.post._id}`}>
                Show
            </Link>
        </div>
    )
}