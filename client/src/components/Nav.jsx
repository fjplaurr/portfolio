import React from 'react';


export default function Nav() {
    return (
        <div className="navDiv" id="nav">
            <nav>
                <a href="#intro" className="anchorNav">About Me</a>
                <a href="#skills" className="anchorNav">Skills</a>
                <a href="#gridWrapper" className="anchorNav">Portfolio</a>
                <a href="#footer" className="anchorNav">Contact</a>
            </nav>
        </div>
    )
}
