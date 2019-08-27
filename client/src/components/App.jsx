import React, { Component } from 'react';
import './ProjectsContainer.css';
import './Footer.css';
import './App.css'
import Banner from './Banner';
import ProjectsContainer from './ProjectsContainer';
import Footer from './Footer';
//import Nav from './Nav';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Banner></Banner>
        <ProjectsContainer></ProjectsContainer>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
