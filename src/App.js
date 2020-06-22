import React from 'react';
import './App.css';
import Main from './components/main';
import { Link } from 'react-router-dom'
import FooterModule from './components/footer';
import {Layout, Header, Navigation, Drawer, Content, Footer, FooterSection, FooterDropDownSection, FooterLinkList} from 'react-mdl';

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
   } else {
     return (
       <div>
       </div>
     )
   }
}

function App() {
  return (
    <div style={{height: '100vh', position: 'relative'}}>
    <Layout  style={{background: 'url(https://images.unsplash.com/photo-1531335773500-23410807365a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1867&q=80) center / cover'}}>
        <Header transparent title="dLarrivee" style={{color: 'black'}}>
            <Navigation >
                <Link style={{color: 'black'}} to="/portfolio/resume">Resume</Link>
                <Link style={{color: 'black'}} to="/portfolio/projects">Projects</Link>
                <Link style={{color: 'black'}} to="/portfolio/">Home</Link>
            </Navigation>
        </Header>
        <MobileNav />
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>


</div>
  );
}

export default App;
