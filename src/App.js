import React from 'react';
import './App.css';
import Main from './components/main';
import { Link } from 'react-router-dom'
import FooterModule from './components/footer';
import {Layout, Header, Navigation, Drawer, Content, Footer, FooterSection, FooterDropDownSection, FooterLinkList} from 'react-mdl';

const windowSize = (props) => {
  window.addEventListener("resize", function() {
    return window.innerWidth;
  });
}

const MobileNav = (props) => {

  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    return (
      <Drawer className="mobile-nav" title="dLarrivee">
            <Navigation>
              <Link to="/portfolio/resume">Resume</Link>
                <Link to="/portfolio/projects">Projects</Link>
                <Link to="/portfolio/">Home</Link>
            </Navigation>
        </Drawer>
    )
   } else if( windowSize < 800) {
    return (
      <Drawer className="mobile-nav" title="dLarrivee">
            <Navigation>
              <Link to="/portfolio/resume">Resume</Link>
                <Link to="/portfolio/projects">Projects</Link>
                <Link to="/portfolio/">Home</Link>
            </Navigation>
        </Drawer>
    )
   } else {
     return (
       <div>
       </div>
     )
   }
}

function App() {
  console.log(" window.innerWidth ",  window.innerWidth )
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    return (
      <div style={{height: '100vh', position: 'relative'}}>
      <Layout  style={{background: 'url(http://static.cdn.responsys.net/i2/responsysimages/content/omcprtnr003z/seattle-waterline3-mobile.jpg) center / cover'}}>
          <Header transparent title="dLarrivee" style={{color: 'black'}}>
              <Navigation >
                <Link style={{color: 'black'}} to="/portfolio/">Home</Link>
                <Link style={{color: 'black'}} to="/portfolio/resume">Resume</Link>
                <Link style={{color: 'black'}} to="/portfolio/projects">Projects</Link>
              </Navigation>
          </Header>
          <Drawer className="mobile-nav" title="dLarrivee">
              <Navigation>
                <Link to="/portfolio/">Home</Link>
                <Link to="/portfolio/resume">Resume</Link>
                <Link to="/portfolio/projects">Projects</Link>
              </Navigation>
          </Drawer>
          <Content>
              <div className="page-content" />
              <Main/>
          </Content>
      </Layout>
  </div>
    )
  } else {
    return (
      <div style={{height: '100vh', position: 'relative'}}>
      <Layout  style={{background: 'url(http://static.cdn.responsys.net/i2/responsysimages/content/omcprtnr003z/seattle-waterline2.jpg) center / cover'}}>
          <Header transparent title="dLarrivee" style={{color: 'black'}}>
              <Navigation >
                <Link style={{color: 'black'}} to="/portfolio/">Home</Link>
                <Link style={{color: 'black'}} to="/portfolio/resume">Resume</Link>
                <Link style={{color: 'black'}} to="/portfolio/projects">Projects</Link>
              </Navigation>
          </Header>
          <Drawer className="mobile-nav" title="dLarrivee">
              <Navigation>
                <Link to="/portfolio/">Home</Link>
                <Link to="/portfolio/resume">Resume</Link>
                <Link to="/portfolio/projects">Projects</Link>
              </Navigation>
          </Drawer>
          <Content>
              <div className="page-content" />
              <Main/>
          </Content>
      </Layout>
  </div>
    )
  }

}

export default App;
