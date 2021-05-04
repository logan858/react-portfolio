import React from 'react'
import './SignUp.css'

class SignUp extends React.Component {
    state = {
        username: "",
        password: "",
        email: "",
        confirm: "",
        error: "",
       
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
            let jwt = localStorage.getItem('token')
            const fetchResponse = await fetch('/api/users/signup', {
            method: 'POST',
            headers: {"Content-Type": "application/json", 'Authorization': 'Bearer ' + jwt},
            body: JSON.stringify({username: this.state.username, email: this.state.email, password: this.state.password,})
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
        const disable = this.state.password !== this.state.confirm;
        return (
            <div className="sign-up">
                <form autoComplete="off" onSubmit={this.handleSubmit}>
                    <label>username:</label>
                    <input 
                        name="username"    
                        onChange={this.handleChange}
                        value={this.state.name}
                        className="form-input"
                        required>
                    </input>
                    <label>password:</label>
                    <input 
                        name="password"    
                        onChange={this.handleChange}
                        value={this.state.password}
                        className="form-input"
                        type="password"
                        required>
                    </input>
                    <label>confirm password:</label>
                    <input 
                        name="confirm"    
                        onChange={this.handleChange}
                        value={this.state.confirm}
                        className="form-input"
                        type="password"
                        required>
                    </input>
                    <label>email:</label>
                    <input 
                        name="email"    
                        onChange={this.handleChange}
                        value={this.state.email}
                        className="form-input"
                        required>
                    </input>
                    <button type="submit" disabled={disable}>SIGN UP</button>
                </form>
                {this.state.user &&
                <div>{this.state.user.username} logged in</div>}
            </div>
        )
    }
}

export default SignUp;