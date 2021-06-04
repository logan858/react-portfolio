import './App.css';
import React, { useState } from 'react';
import MainPage from '../MainPage/MainPage';
import ThemeButton from '../../components/ThemeButton/ThemeButton';

export default function App() {
  const [theme, setTheme] = useState("Dark")
  const [color, setColor] = useState("rgba(25, 25, 25, 0.9)")
  const [accentColor, setAccentColor] = useState("rgba(255, 255, 255, 1)")
  
  return (
    <main>
      <MainPage 
        theme={theme}
        color={color}
        accentColor={accentColor}
      />
      <ThemeButton 
        setTheme={setTheme} 
        setColor={setColor} 
        setAccentColor={setAccentColor}
        theme={theme} 
        color={color}
        accentColor={accentColor}
      />
    </main>
  )
}