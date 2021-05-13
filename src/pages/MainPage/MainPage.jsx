import React, { useEffect, useState } from 'react';
import './MainPage.css';
import { Route, Switch, Redirect, useLocation } from 'react-router-dom';
import MenuList from '../../components/MenuList/MenuList';
import HomeComp from '../../components/HomeComp/HomeComp.jsx';
import PortfolioPage from '../PortfolioPage/PortfolioPage';
import ContactPage from '../ContactPage/ContactPage';
import AboutPage from '../AboutPage/AboutPage';
import { AnimatePresence } from 'framer-motion';

export default function Main(props) {
  const location = useLocation();
  const [backgrounds, setBackgrounds] = useState([])
  const [index, setIndex] = useState(0)

  useEffect(() => {
    setBackgrounds([`url("/images/bg-images/TRINI3.JPG")`, `url("/images/bg-images/TRINI2.JPG")`, `url("/images/bg-images/TIMMINS.JPG")`, `url("/images/bg-images/NY2.JPG")`])
  }, [])

  const bgChooser = () => {
    let i = index
    return backgrounds[i]
  }
  
  return (
    <div 
      className="container"
      style={{backgroundImage: `${bgChooser()}`}}
    >
      <MenuList 
          username={props.userName} 
          userEmail={props.userEmail} 
          theme={props.theme}
          color={props.color}
          accentColor={props.accentColor}
          index={index}
          setIndex={setIndex}
          backgrounds={backgrounds}
      />
      <AnimatePresence initial={false}>
        <Switch location={location} key={location.pathname}>
          <Route path='/portfolio' render={() => (
              <PortfolioPage 
                portfolio={props.portfolio} 
                theme={props.theme}
                color={props.color}
                accentColor={props.accentColor}
                {...props}
              />
          )}/>
          <Route path='/contact' render={() => (
              <ContactPage 
                theme={props.theme}
                color={props.color}
                accentColor={props.accentColor}
                {...props}
              />
          )}/>
          <Route path='/about' render={() => (
              <AboutPage 
                theme={props.theme}
                color={props.color}
                accentColor={props.accentColor}
                {...props}
              />
          )}/>
          <Route path={['/home', '/']} render={() => (
              <HomeComp {...props}/>
          )}/>
          <Redirect to="/"/>
        </Switch>
      </AnimatePresence>
    </div>
  )
}