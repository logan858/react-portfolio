import React from 'react';
import BlogPost from '../../components/BlogPost/BlogPost'

class BlogPostPage extends React.Component {
    state = {
        matchID: this.props.match.params.id,
        post: [],
    }
    getPost = async () => {
        await fetch(`/api/${this.state.matchID}`).then((res) => res.json()).then(data => this.setState({post: data}))
    }
    componentDidMount() {
        this.getPost()
    }
    render() {
        return (
            <div className="portfolio-frame">
                {this.state.post.length ? this.state.post.map(p => (
                    <BlogPost post={p}/>
                ))
                    :
                    <h1>No post</h1>
                }
            </div>
        )
    }
}

export default BlogPostPage;