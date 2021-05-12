import React from 'react';
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
  return (
    <div className="container">
      <MenuList 
          username={props.userName} 
          userEmail={props.userEmail} 
          theme={props.theme}
          color={props.color}
          accentColor={props.accentColor}
      />
      <AnimatePresence initial={false} exitBeforeEnter onExitComplete={() => console.log("exit")}>
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