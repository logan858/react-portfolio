import React from 'react';
import './MainPage.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import MenuList from '../../components/MenuList/MenuList';
import HomeComp from '../../components/HomeComp/HomeComp.jsx';
import PortfolioPage from '../PortfolioPage/PortfolioPage';
import ContactPage from '../ContactPage/ContactPage';
import AboutPage from '../AboutPage/AboutPage';
import PReactPage from '../PReactPage/PReactPage';
import PSocketIOPage from '../PSocketIOPage/PSocketIOPage';
import PPackDPage from '../PPackDPage/PPackDPage';
import PLeafsletPage from '../PLeafsletPage/PLeafsletPage';
import PostsPage from '../PostsPage/PostsPage';
import BlogPostPage from '../BlogPostPage/BlogPostPage';

class Main extends React.Component {
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
          <Route path='/portfolio' render={(props) => (
              <PortfolioPage 
                portfolio={this.props.portfolio} 
                color={this.props.color}
                accentColor={this.props.accentColor}
                {...props}
              />
          )}/>
          <Route path='/contact' render={(props) => (
              <ContactPage 
                theme={this.props.theme}
                color={this.props.color}
                accentColor={this.props.accentColor}
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
          )}/>+
          <Route path='/blog/signup' render={(props) => (
              <PostsPage
                {...props}
              />
          )}/>
           <Route path='/blog/login' render={(props) => (
              <PostsPage
                {...props}
              />
          )}/>
          <Route 
            path="/blog/:id"
            render={props => <BlogPostPage {...props}/>}
          />
          <Route path='/blog' 
          user={this.props.user}
          render={(props) => (
              <PostsPage
                {...props}
              />
          )}/>
          <Route path={['/home', '/']} render={(props) => (
               <HomeComp {...props}/>
          )}/>
          <Redirect to="/"/>
        </Switch>
      </div>
    )
  }
}

export default Main;