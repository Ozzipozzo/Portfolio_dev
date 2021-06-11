import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavMenu from './components/NavMenu';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';

export default function App() {
  return (
    <>
      <Router>
        <NavMenu />
        <Switch>
          <Route path="/Portfolio_dev" exact>
            <Home />
          </Route>
          <Route path="/Portfolio_dev/about">
            <About />
          </Route>
          <Route path="/Portfolio_dev/projets">
            <Projects />
          </Route>
          <Route path="/Portfolio_dev/contact">
            <Contact />
          </Route>
        </Switch>
      </Router>
    </>
  );
}