import React from 'react';
import personalLogo from '../../images/personalLogo.svg';



export default function intro() {
    return (
        <div className="intro" id="intro">
            <div className="introDescription">
                <div className="introSentence">
                    {/*<h1 >Hello, <br />I am <span><img src={personalLogoF}></img>rancisco </span><span><img src={personalLogoP}></img>laza</span><br />, web developer.</h1>*/}
                    <h1 >Hello, <br />I am <span className="name">F</span>rancisco<span className="surname"> P</span>laza<br />, web developer.</h1>
                </div>
                <p>Hello, I am an engineer with passion for programming. I try to make products that provide a good user experience following two principles: responsivness and simplicity.</p>
            </div>
            <img className="personalLogo" src={personalLogo}></img>
        </div>
    )
}
