import React from 'react';

export default function Nav() {
  return (
    <div className="navDiv" id="nav">
      <nav>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href="#" className="anchorNav">About Me</a>
        <a href="#skills" className="anchorNav">Skills</a>
        <a href="#gridWrapper" className="anchorNav">Portfolio</a>
        <a href="#footer" className="anchorNav">Contact</a>
      </nav>
    </div>
  );
}
