import React from 'react';
import personalLogo from '../../images/personalLogo.svg';
import personalLogoF from '../../images/personalLogoF.png';




export default function intro() {
    return (
        <div className="intro" id="intro">
            <div className="introDescription">
                <div className="introSentence">
                    <h1 >Hello, <br />I am <span><img src={personalLogoF}></img>rancisco</span> Plaza, <br />web developer.</h1>
                </div>
                <p>Hello, I am an engineer with passion for programming. I try to make products that provide a good user experience following two principles: responsivness and simplicity.</p>
            </div>
            <img className="personalLogo" src={personalLogo}></img>
        </div>
    )
}
