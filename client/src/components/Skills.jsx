import React from 'react';
import nodejsLogo from '../../images/nodejsLogo.svg';
import HTML5Logo from '../../images/HTML5Logo.svg';
import CSS3Logo from '../../images/CSS3Logo.svg';
import javascriptLogo from '../../images/javascriptLogo.svg';
import reactLogo from '../../images/reactLogo.svg';
import mysqlLogo from '../../images/mysqlLogo.svg';
import mongodbLogo from '../../images/mongodbLogo.svg';


export default function Skills() {
    return (
        <div className="skills">
            <h2>My <span>Skills</span></h2>
            <div className="skillLists">
                <div className="skillList">
                    <h3 className="listHeading">Front-End</h3>
                    <ul className="logoList">
                        <li><div><img src={HTML5Logo}></img></div></li>
                        <li><div><img src={CSS3Logo}></img></div></li>
                        <li><div><img src={javascriptLogo}></img></div></li>
                        <li><div><img src={reactLogo}></img></div></li>
                    </ul>
                </div>
                <div className="skillList">
                    <h3 className="listHeading">Back-End</h3>
                    <ul className="logoList">
                        <li><div><img src={nodejsLogo}></img></div></li>
                        <li><div><img src={mysqlLogo}></img></div></li>
                        <li><div><img src={mongodbLogo}></img></div></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}