import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import Background from './components/Background/Background'

class App extends Component {
  state = {
    userName: "---",
    userEmail: "place@holder.com",
    theme: "basic",
    portfolio: [
      {id:0, name:"react-project", link:"url", category:"React"}, 
      {id:1, name:"socketio-project", link:"url", category:"socket.io"}, 
      {id:2, name:"packd", link:"url", category:"Django, Python"}, 
      {id:3, name:"leafslet", link:"url", category:"React, SQL"}, 
    ],
  }
  render() {
    return (
      <div>
        <div id="theme">theme | {this.state.theme}&nbsp;</div>
        <Background userName={this.state.userName} userEmail={this.state.userEmail} portfolio={this.state.portfolio}/>
      </div>
    )
  }
}

export default App;
