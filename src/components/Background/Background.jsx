import React from 'react';
import './Background.css';
import MenuList from '../MenuList/MenuList';
import { Route, Switch, Redirect } from 'react-router-dom';
import PortfolioPage from '../../pages/PortfolioPage/PortfolioPage'
import HomePage from '../../pages/HomePage/HomePage'
import ContactPage from '../../pages/ContactPage/ContactPage'
import AboutPage from '../../pages/AboutPage/AboutPage';
import PReactPage from '../../pages/PReactPage/PReactPage';
import PSocketIOPage from '../../pages/PSocketIOPage/PSocketIOPage';
import PPackDPage from '../../pages/PPackDPage/PPackDPage';
import PLeafsletPage from '../../pages/PLeafsletPage/PLeafsletPage';
import PostsPage from '../../pages/PostsPage/PostsPage';
import BlogPostPage from '../../pages/BlogPostPage/BlogPostPage';
import { TransitionGroup } from 'react-transition-group';

class Background extends React.Component {
  render() {
    return (
      <div className="container">
        <MenuList 
            username={this.props.userName} 
            userEmail={this.props.userEmail} 
            theme={this.props.theme}
            color={this.props.color}
            accentColor={this.props.accentColor}
        />
        <Switch>
          <Route path='/home' render={(props) => (
              <HomePage 
                {...props}
              />
          )}/>
          <Route path='/portfolio' render={(props) => (
              <PortfolioPage 
                portfolio={this.props.portfolio} 
                {...props}
              />
          )}/>
          <Route path='/contact' render={(props) => (
              <ContactPage 
                {...props}
              />
          )}/>
          <Route path='/about' render={(props) => (
              <AboutPage 
                {...props}
              />
          )}/>
          <Route path='/project-react-project' render={(props) => (
              <PReactPage 
              {...props}
              />
          )}/>
          <Route path='/project-socketio-project' render={(props) => (
              <PSocketIOPage 
                {...props}
              />
          )}/>
          <Route path='/project-packd' render={(props) => (
              <PPackDPage 
                {...props}
              />
          )}/>
          <Route path='/project-leafslet' render={(props) => (
              <PLeafsletPage 
                {...props}
              />
          )}/>
          <Route 
            path="/blog/:id"
            render={props => <BlogPostPage {...props}/>}
          />
          <Route path='/blog' render={(props) => (
              <PostsPage
                {...props}
              />
          )}/>
          <Redirect to="/"/>
        </Switch>
      </div>
    )
  }
}

export default Background;