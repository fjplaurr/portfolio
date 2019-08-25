import React, { Component } from 'react';
import './App.css';
//import Banner from './Banner';
//import Wrapper from './Wrapper';
import Footer from './Footer';
//import Nav from './Nav';


class App extends Component {
  render() {
    return (
      <div className="App">
         {/*<div id="page-wrapper">
          <div className='navWrapper'>
            <Nav></Nav>
          </div>
          */}
        {/*   <div mainWrapper> */}
        {/*<Banner></Banner>
        <Wrapper></Wrapper>*/}
        <Footer></Footer>
        {/*     </div>  */}
        {/*   </div> */}
      </div>
    );
  }
}

export default App;
