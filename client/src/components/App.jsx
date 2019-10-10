import React from 'react';
import './ProjectsContainer.css';
import './Footer.css';
import './App.css';
import './Nav.css';
import './Intro.css';
import './Skills.css';
import Intro from './Intro';
import ProjectsContainer from './ProjectsContainer';
import Skills from './Skills';
import Footer from './Footer';
import Nav from './Nav';


const App = () => (
  <div className="App">
    <Nav />
    <div className="contentWrapper">
      <Intro />
      <Skills />
      <ProjectsContainer />
      <Footer />
    </div>
  </div>
);


export default App;
