import React from 'react';
import './ThemeButton.css';

class ThemeButton extends React.Component {
    handleTheme = () => {
        if(this.props.theme === "Dark") {
            this.props.setTheme({theme: "Light"})
            this.props.setColor({color: "rgba(255, 255, 255,0.3)"})
            this.props.setAccentColor({accentColor: "rgba(47, 47, 47, 0.7)"})
        } else {
            this.props.setTheme({theme: "Dark"})
        }
      }
    render() {
        if(this.props.theme === "Dark") {
            return (
                <div>
                    <div onClick={() => this.handleTheme()} id="theme">theme | {this.props.theme}&nbsp;</div>
                </div>
            )
        } else {
            return (
                <div>
                    <div onClick={() => this.handleTheme()} id="theme" style={{backgroundColor: this.props.color}}>theme | {this.props.theme}&nbsp;</div>
                </div>
            )
        }
    }
}

export default ThemeButton;