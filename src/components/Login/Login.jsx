import React from 'react'
import './Login.css'

class Login extends React.Component {
    state = {
        email: "",
        password: "",
        user: null,
    }
    setUserInState = (incomingUserData) => {
        this.setState({ user: incomingUserData})
    }
    componentDidMount() {
    let token = localStorage.getItem('token')
    if (token) {
        let userDoc = JSON.parse(atob(token.split('.')[1])).user // decode jwt token
        this.setState({user: userDoc})      
    }}
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    handleSubmit = async (evt) => {
        evt.preventDefault();
        try {
            const fetchResponse = await fetch('/api/users/login', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: this.state.email, password: this.state.password, })
            })
    
            if (!fetchResponse.ok) throw new Error('Fetch failed - Bad request')
            let token = await fetchResponse.json() 
            localStorage.setItem('token', token); 
            const userDoc = JSON.parse(atob(token.split('.')[1])).user; 
            this.props.setUserInState(userDoc)
    
        } catch (err) {
            console.log("SignupForm error", err)
            this.setState({ error: 'Sign Up Failed - Try Again' });
        }
    }
    render() {
        return (
            <div className="login">
                <form autoComplete="off" >
                    email:
                    <input 
                        name="email"    
                        onChange={this.handleChange}
                        value={this.state.email}
                        className="form-input">
                    </input>
                    password:
                    <input 
                        name="password"    
                        onChange={this.handleChange}
                        value={this.state.password}
                        className="form-input">
                    </input>
                    <button type="submit">LOG IN</button>
                </form>
            </div>
        )
    }
}

export default Login;