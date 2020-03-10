import React from 'react';
import './App.css';
import Main from './components/main';
import { Link } from 'react-router-dom'
import FooterModule from './components/footer';
import {Layout, Header, Navigation, Drawer, Content, Footer, FooterSection, FooterDropDownSection, FooterLinkList} from 'react-mdl';

function App() {
  return (
    <div style={{height: '100vh', position: 'relative'}}>
    <Layout style={{background: 'url(https://images.unsplash.com/photo-1502175353174-a7a70e73b362?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1570&q=80) center / cover'}}>
        <Header transparent title="dLarrivee Portfolio" style={{color: 'white'}}>
            <Navigation>
                <Link to="/portfolio/resume">Resume</Link>
                <Link to="/portfolio/projects">Projects</Link>
                <Link to="/portfolio/">Home</Link>
            </Navigation>
        </Header>
        <Drawer title="dLarrivee Portfolio">
            <Navigation>
              <Link to="/portfolio/resume">Resume</Link>
                <Link to="/portfolio/projects">Projects</Link>
                <Link to="/portfolio/">Home</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>


</div>
  );
}

export default App;
