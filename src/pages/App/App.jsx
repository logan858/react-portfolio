import './App.css';
import React, {Component} from 'react';
import Background from '../../components/Background/Background';
import ThemeButton from '../../components/ThemeButton/ThemeButton';

class App extends Component {
  state = {
    userName: "---",
    userEmail: "place@holder.com",
    theme: "Dark",
    color: "---",
    accentColor: "---",
    portfolio: [
      {id:0, name:"react-project", link:"url", category:"React"}, 
      {id:1, name:"socketio-project", link:"url", category:"socket.io"}, 
      {id:2, name:"packd", link:"url", category:"Django, Python"}, 
      {id:3, name:"leafslet", link:"url", category:"React, SQL"}, 
    ],
  }
  render() {
    return (
      <main>
        <Background 
          userName={this.state.userName} 
          userEmail={this.state.userEmail} 
          portfolio={this.state.portfolio} 
          theme={this.state.theme}
          color={this.state.color}
          accentColor={this.state.accentColor}
        />
        <ThemeButton 
          setTheme={theme=>{this.setState(theme)}} 
          setColor={color=>{this.setState(color)}} 
          setAccentColor={accentColor=>{this.setState(accentColor)}}
          theme={this.state.theme} 
          color={this.state.color}
        />
      </main>
    )
  }
}

export default App;
