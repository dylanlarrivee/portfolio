import React from 'react';
import LandingPage from './landingpage';
import { Switch, Route } from 'react-router-dom';
import AboutMe from './aboutme';
import Contact from './contact';
import Projects from './projects';
import Resume from './resume';

const Main = () => (
    <Switch>
        <Route exact path="/portfolio/" component={LandingPage} />
        <Route exact path="/portfolio" component={LandingPage} />
        <Route exact path="/portfolio/aboutme" component={AboutMe} />
        <Route exact path="/portfolio/contact" component={Contact} />
        <Route exact path="/portfolio/projects" component={Projects} />
        <Route exact path="/portfolio/resume" component={Resume} />
    </Switch>
)

export default Main;