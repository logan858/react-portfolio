import React from 'react';
import Form from '../../components/Form/Form'
import Post from '../../components/Post/Post'
import Login from '../../components/Login/Login'
import SignUp from '../../components/Signup/SignUp'
import { Switch, Route, Link } from 'react-router-dom';

class PostsPage extends React.Component {
    state = {
        posts: [],
        user: null,
      }
    getPosts = async () => {
        await fetch("/api").then((res) => res.json()).then(data => this.setState({posts: data}))
    }
    componentDidMount() {
        this.getPosts()
        let token = localStorage.getItem('token')
        if (token) {
        let userDoc = JSON.parse(atob(token.split('.')[1])).user // decode jwt token
        this.setState({user: userDoc})      
        }
    }
    setUserInState = (incomingUserData) => {
        this.setState({ user: incomingUserData})
    }
    handleLogout = () => {
        this.setState({user: null})
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
            {!this.state.user ? (
                <Switch>
                    <Route path="/blog/login">
                        <Login/>
                    </Route>
                    <Route path="/blog/signup">
                        <SignUp/>
                    </Route>
                    <Route path="/blog">
                        <div className="login">
                            <Link to="/blog/login">
                                Login
                            </Link>
                        </div>
                        <div className="sign-up">
                            <Link to="/blog/signup">
                                <br/>
                                Signup
                            </Link>
                        </div>
                    </Route>
                </Switch>
            ) : (
            <div className="login">
                <div>user logged in</div>
                <button onClick={this.handleLogout}>Logout</button>
            </div>
            
            )}
           
            </div>
        )
    }
}

export default PostsPage;