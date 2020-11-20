import React from 'react';
import './App.css';
import Intro from './Intro';
import ProjectsContainer from './ProjectsContainer';
import Skills from './SkillsContainer';
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
