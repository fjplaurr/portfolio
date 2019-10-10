import React from 'react';
import personalLogo from '../../images/personalLogo.svg';


export default function Nav() {
  return (
    <div className="navDiv" id="nav">
      <nav>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href="#" className="anchorNav">About Me</a>
        <a href="#skills" className="anchorNav">Skills</a>
        <a href="#gridWrapper" className="anchorNav">Portfolio</a>
        <a href="#footer" className="anchorNav">Contact</a>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a className="anchorNav logoNav"><img src={personalLogo} alt="Personal logo from Francisco Plaza" /></a>
      </nav>
    </div>
  );
}
