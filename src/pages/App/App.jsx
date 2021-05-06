import './App.css';
import React, {Component} from 'react';
import MainPage from '../MainPage/MainPage';
import ThemeButton from '../../components/ThemeButton/ThemeButton';

class App extends Component {
  state = {
    userName: "",
    userEmail: "",
    theme: "Dark",
    color: "rgba(47, 47, 47, 0.8)",
    accentColor: "rgba(255, 255, 255, 0.4)",
    user: null,
    portfolio: [
      {id:0, name:"react-project", link:"url", category:"React", pic:"www.tinyimg.com"}, 
      {id:1, name:"socketio-project", link:"url", category:"socket.io", pic:"www.tinyimg.com"}, 
      {id:2, name:"packd", link:"url", category:"Django, Python", pic:"www.tinyimg.com"}, 
      {id:3, name:"leafslet", link:"url", category:"React, SQL", pic:"www.tinyimg.com"}, 
    ],
  }
  setUserInState = (incomingUserData) => {
    this.setState({ user: incomingUserData})
  }
  componentDidMount() {
    let token = localStorage.getItem('token')
    if (token) {
      let userDoc = JSON.parse(atob(token.split('.')[1])).user // decode jwt token
      this.setState({user: userDoc})      
    }
  }
  render() {
    return (
      <main>
        <MainPage 
          userName={this.state.userName} 
          userEmail={this.state.userEmail} 
          portfolio={this.state.portfolio} 
          theme={this.state.theme}
          color={this.state.color}
          accentColor={this.state.accentColor}
          user={this.state.user}
        />
        <ThemeButton 
          setTheme={theme=>{this.setState(theme)}} 
          setColor={color=>{this.setState(color)}} 
          setAccentColor={accentColor=>{this.setState(accentColor)}}
          theme={this.state.theme} 
          color={this.state.color}
          accentColor={this.state.accentColor}
        />
      </main>
    )
  }
}

export default App;
