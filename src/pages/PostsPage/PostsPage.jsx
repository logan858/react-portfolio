import React from 'react';
import Form from '../../components/Form/Form'
import Post from '../../components/Post/Post'

class PostsPage extends React.Component {
    state = {
        posts: []
      }
    getPosts = async () => {
        await fetch("/api").then((res) => res.json()).then(data => this.setState({posts: data}))
    }
    componentDidMount() {
        this.getPosts()
    }
    render() {
        return (
            <div className="portfolio-frame">
                {this.state.posts.length ? this.state.posts.map(p => (
                    <Post 
                        post={p}
                    />
                ))
                    :
                    <h1>No posts</h1>
                }
                <br/>
                <Form
                    getPosts={this.getPosts}
                />
            </div>
        )
    }
}

export default PostsPage;