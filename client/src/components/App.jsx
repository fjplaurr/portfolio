import React, { Component } from 'react';
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


class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav></Nav>
        <div className="contentWrapper">
          <Intro></Intro>
          <Skills></Skills>
          <ProjectsContainer></ProjectsContainer>
          <Footer></Footer>
        </div>
      </div>
    );
  }
}

export default App;
