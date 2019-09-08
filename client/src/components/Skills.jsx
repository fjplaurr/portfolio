import React from 'react';
import nodejsLogo from '../../images/nodejsLogo.svg';
import HTML5Logo from '../../images/HTML5Logo.svg';
import CSS3Logo from '../../images/CSS3Logo.svg';
import javascriptLogo from '../../images/javascriptLogo.svg';
import reactLogo from '../../images/reactLogo.svg';
import mysqlLogo from '../../images/mysqlLogo.svg';
import mongodbLogo from '../../images/mongodbLogo.svg';
import figmaLogo from '../../images/figmaLogo.svg';
import adobexdLogo from '../../images/adobexdLogo.svg';




export default function Skills() {
    return (
        <div className="skills">
            <h2>My Skills</h2>
            <div className="skillLists">
                <div className="skillList">
                    <h3 className="listHeading">Front-End</h3>
                    <ul className="logoList logoListFront">
                        <li>
                            <div>
                                <a href="https://developer.mozilla.org/docs/HTML/HTML5" target="_blank">
                                    <figure>
                                        <img src={HTML5Logo} alt="HTML logo"></img>
                                        <figcaption>HTML5</figcaption>
                                    </figure>
                                </a>
                            </div>
                        </li>
                        <li>
                            <div>
                                <a href="https://developer.mozilla.org/docs/Archive/CSS3" target="_blank">
                                    <figure>
                                        <img src={CSS3Logo} alt="CSS logo"></img>
                                        <figcaption>CSS3</figcaption>
                                    </figure>
                                </a>
                            </div>
                        </li>
                        <li>
                            <div>
                                <a href="https://developer.mozilla.org/docs/Web/JavaScript" target="_blank">
                                    <figure>
                                        <img src={javascriptLogo} alt="Javascript logo"></img>
                                        <figcaption>Javascript</figcaption>
                                    </figure>
                                </a>
                            </div>
                        </li>
                        <li>
                            <div>
                                <a href="https://reactjs.org" target="_blank">
                                    <figure>
                                        <img src={reactLogo} alt="React logo"></img>
                                        <figcaption>React</figcaption>
                                    </figure>
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="skillList">
                    <h3 className="listHeading">Back-End</h3>
                    <ul className="logoList logoListBack">
                        <li>
                            <div>
                                <a href="https://nodejs.org" target="_blank">
                                    <figure>
                                        <img src={nodejsLogo} alt="Nodejs logo"></img>
                                        <figcaption>Node.js</figcaption>
                                    </figure>
                                </a>
                            </div>
                        </li>
                        <li>
                            <div>
                                <a href="https://www.mongodb.com" target="_blank">
                                    <figure>
                                        <img src={mongodbLogo} alt="MongoDB logo"></img>
                                        <figcaption>MongoDB</figcaption>
                                    </figure>
                                </a>
                            </div>
                        </li>
                        <li>
                            <div>
                                <a href="https://www.mysql.com" target="_blank">
                                    <figure>
                                        <img src={mysqlLogo} alt="MySQL logo"></img>
                                        <figcaption>MySQL</figcaption>
                                    </figure>
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="skillList">
                    <h3 className="listHeading">Design</h3>
                    <ul className="logoList logoListDesign">
                        <li>
                            <div>
                                <a href="https://www.figma.com" target="_blank">
                                    <figure>
                                        <img src={figmaLogo} alt="Figma logo"></img>
                                        <figcaption>Figma</figcaption>
                                    </figure>
                                </a>
                            </div>
                        </li>
                        <li>
                            <div>
                                <a href="https://www.adobe.com/products/xd.html" target="_blank">
                                    <figure>
                                        <img src={adobexdLogo} alt="Adobe Xd logo"></img>
                                        <figcaption>Adobe Xd</figcaption>
                                    </figure>
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div >
    )
}