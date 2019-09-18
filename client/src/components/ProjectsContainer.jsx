import React from 'react';


export default function ProjectsContainer() {
    return (
        <div className="gridWrapper" id="gridWrapper">
            <h2>Projects</h2>
            <div className="projects">
                <article>
                    <div className="image drumMachineImg"></div >
                    <div className="projectInfo">
                        <h3>Drum Machine</h3>
                        <p>App that allows the user to play a virtual drum machine using different sounds and voices.</p>
                        <ul className="technologies">
                            <li>React</li>
                            <li>Javascript</li>
                            <li>CSS Flexbox</li>
                            <li>CSS Grid Layout</li>
                            <li>HTML5</li>
                        </ul>
                        <ul className="appRepoButtons">
                            <li><a href="https://codepen.io/fjplaurr/full/GVQbQe" target="_blank" className="appAnchor">See app</a></li>
                            <li><a href="https://github.com/fjplaurr/drumMachine" className="repoAnchor">See repository</a></li>
                        </ul>
                    </div>
                </article>
                <article>
                    <div className="image markdownPreviewer"></div >
                    <div className="projectInfo">
                        <h3>Markdown Previewer</h3>
                        <p>App that allows the user to write Markdown language easily.</p>
                        <ul className="technologies">
                            <li>React</li>
                            <li>Javascript</li>
                            <li>CSS3</li>
                            <li>HTML5</li>
                        </ul>
                        <ul className="appRepoButtons">
                            <li><a href="https://codepen.io/fjplaurr/full/qzwxPy" target="_blank" className="appAnchor">See app</a></li>
                            <li><a href="https://github.com/fjplaurr/reactMarkdownPreviewer" className="repoAnchor">See repository</a></li>
                        </ul>
                    </div>
                </article>
                <article>
                    <div className="image quoteMachineImg"></div >
                    <div className="projectInfo">
                        <h3>Quote Machine</h3>
                        <p>App that deliveres quotes that can be shared in social media.</p>
                        <ul className="technologies">
                            <li>React</li>
                            <li>Javascript</li>
                            <li>CSS3</li>
                            <li>HTML5</li>
                        </ul>
                        <ul className="appRepoButtons">
                            <li><a href="https://codepen.io/fjplaurr/full/GVQbQe" target="_blank" className="appAnchor">See app</a></li>
                            <li><a href="https://github.com/fjplaurr/quoteMachine" className="repoAnchor">See repository</a></li>
                        </ul>
                    </div>
                </article>
                <article>
                    <div className="image drumMachineImg"></div >
                    <div className="projectInfo">
                        <h3>Drum Machine</h3>
                        <p>App that allows the user to play a virtual drum machine using different sounds and voices.</p>
                        <ul className="technologies">
                            <li>React</li>
                            <li>Javascript</li>
                            <li>CSS Flexbox</li>
                            <li>CSS Grid Layout</li>
                            <li>HTML5</li>
                        </ul>
                        <ul className="appRepoButtons">
                            <li><a href="https://codepen.io/fjplaurr/full/GVQbQe" target="_blank" className="appAnchor">See app</a></li>
                            <li><a href="https://github.com/fjplaurr/drumMachine" className="repoAnchor">See repository</a></li>
                        </ul>
                    </div>
                </article>
            </div>
        </div>
    )
}