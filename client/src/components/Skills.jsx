import React from 'react';
import nodejsLogo from '../../images/nodejsLogo.svg';
import HTML5Logo from '../../images/HTML5Logo.svg';
import CSS3Logo from '../../images/CSS3Logo.svg';
import javascriptLogo from '../../images/javascriptLogo.svg';
import reactLogo from '../../images/reactLogo.svg';
import mysqlLogo from '../../images/mysqlLogo.svg';
import mongodbLogo from '../../images/mongodbLogo.svg';
import firebaseLogo from '../../images/firebaseLogo.svg';
import SQLServerLogo from '../../images/SQLServerLogo.svg';
import CSharpLogo from '../../images/CSharpLogo.svg';
import javaLogo from '../../images/javaLogo.svg';
import gitLogo from '../../images/gitLogo.svg';
import githubLogo from '../../images/githubLogo.svg';
import herokuLogo from '../../images/herokuLogo.svg';



export default function Skills() {
    return (
        <div className="skills" id="skills">
            <h2>My Skills</h2>
            <div className="skillLists">
                <div className="skillList">
                    <h3 className="listHeading">Front-End</h3>
                    <ul className="logoList">
                        <li><div><a href="https://developer.mozilla.org/docs/HTML/HTML5" target="_blank">
                            <img src={HTML5Logo} alt="HTML logo"></img>
                            <p>HTML5</p>
                        </a></div></li>
                        <li><div><a href="https://developer.mozilla.org/docs/Archive/CSS3" target="_blank">
                            <img src={CSS3Logo} alt="CSS logo"></img>
                            <p>CSS3</p>
                        </a></div></li>
                        <li><div><a href="https://developer.mozilla.org/docs/Web/JavaScript" target="_blank">
                            <img src={javascriptLogo} alt="Javascript logo"></img>
                            <p>Javascript</p>
                        </a></div></li>
                        <li><div><a href="https://reactjs.org" target="_blank">
                            <img src={reactLogo} alt="React logo"></img>
                            <p>React</p>
                        </a></div></li>
                    </ul>
                </div>
                <div className="skillList">
                    <h3 className="listHeading">Back-End</h3>
                    <ul className="logoList">
                        <li><div><a href="https://nodejs.org" target="_blank">
                            <img src={nodejsLogo} alt="Nodejs logo"></img>
                            <p>Node.js</p>
                        </a></div></li>
                        <li><div><a href="https://www.mongodb.com" target="_blank">
                            <img src={mongodbLogo} alt="MongoDB logo"></img>
                            <p>MongoDB</p>
                        </a></div></li>
                        <li><div><a href="https://firebase.google.com" target="_blank">
                            <img src={firebaseLogo} alt="Firebase logo"></img>
                            <p>Firebase</p>
                        </a></div></li>
                        <li><div><a href="https://www.mysql.com" target="_blank">
                            <img src={mysqlLogo} alt="MySQL logo"></img>
                            <p>MySQL</p>
                        </a></div></li>
                        {/* 
                        <li><div><a href="https://www.microsoft.com/sql-server" target="_blank">
                            <img src={SQLServerLogo} alt="SQL Server logo"></img>
                            <p>SQL Server</p>
                        </a></div></li>
                        */}
                    </ul>
                </div>
                <div className="skillList">
                    <h3 className="listHeading">Other Technologies</h3>
                    <ul className="logoList">
                        {/* 
                        <li><div><a href="https://docs.microsoft.com/dotnet/csharp" target="_blank">
                            <img src={CSharpLogo} alt="C# logo"></img>
                            <p>C#</p>        
                        </a></div></li>
                          */}
                        <li><div><a href="https://www.java.com" target="_blank">
                            <img src={javaLogo} alt="Java logo"></img>
                            <p>Java</p>
                        </a></div></li>
                        <li><div><a href="https://git-scm.com" target="_blank">
                            <img src={gitLogo} alt="Git logo"></img>
                            <p>Git</p>
                        </a></div></li>
                        <li><div><a href="https://github.com" target="_blank">
                            <img src={githubLogo} alt="Github logo"></img>
                            <p>GitHub</p>
                        </a></div></li>
                        <li><div><a href="https://www.heroku.com" target="_blank">
                            <img src={herokuLogo} alt="Github logo"></img>
                            <p>Heroku</p>
                        </a></div></li>
                    </ul>
                </div>
            </div>
        </div >
    )
}