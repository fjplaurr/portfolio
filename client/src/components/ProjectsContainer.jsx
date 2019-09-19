import React from 'react';
import drumMachine from '../../images/drumMachine1.png';
import drumMachineGif from '../../images/drumMachine.gif';



export default class ProjectsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.handleHover = this.handleHover.bind(this);
        var lol;
    }

    handleHover = (e) => {

        console.log(e.target);
        e.target.style.backgroundImage = `url("https://res.cloudinary.com/fjplaurr/image/upload/v1568827322/Web%20Development/Images/Portfolio/Drum%20Machine/drumMachine_g0jyhf.gif?p${new Date().getTime()}")`;

        console.log("HOVER")
    }

    handleOut = (e) => {
        console.log(e.target);

        e.target.style.backgroundImage = "none";
        console.log(e.target.style.backgroundImage);

        console.log("OUT");
    }

    render() {
        return (
            <div className="gridWrapper" id="gridWrapper">

                <h2>Projects</h2>
                <div className="projects">
                    <article>
                        <div onMouseOver={this.handleHover} onMouseOut={this.handleOut} className="image drumMachineImg">
                            <div className="image drumMachineImg2"></div>
                        </div >
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
}