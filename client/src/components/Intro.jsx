import React from 'react';
import personalLogo from '../../images/personalLogo.svg';
import './Intro.css';

export default function intro() {
  return (
    <div className="intro" id="intro">
      <div className="introDescription">
        <div className="introSentence">
          <h1>
            Hello,
            <br />
            I am
            <span className="name"> F</span>
            rancisco
            <span className="surname"> P</span>
            laza,
            <br />
            web developer.
          </h1>
        </div>
        <p>
          I make useful products that provide a nice user experience following
          three principles: simplicity, responsive design and attention to detail.
        </p>
      </div>
      <img src={personalLogo} className="personalLogo" alt="Personal logo from Francisco Plaza" />
    </div>
  );
}
