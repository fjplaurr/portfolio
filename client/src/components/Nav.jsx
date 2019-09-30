import React from 'react';
import personalLogo from '../../images/personalLogo.svg';


export default function Nav() {
    return (
        <div className="navDiv" id="nav">
            <nav>
                <a href="" className="anchorNav">About Me</a>
                <a href="#skills" className="anchorNav">Skills</a>
                <a href="#gridWrapper" className="anchorNav">Portfolio</a>
                <a href="#footer" className="anchorNav">Contact</a>
                <a className="anchorNav logoNav"><img src={personalLogo}></img></a>
            </nav>
        </div>
    )
}
