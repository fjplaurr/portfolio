import React from 'react';



export default class ProjectsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.handleHover = this.handleHover.bind(this);
    }

    handleHover = (e) => {
        var classN = e.target.className;
        if (classN.includes('drumMachineImgGif'))
            e.target.style.backgroundImage = `url("https://res.cloudinary.com/fjplaurr/image/upload/v1568989863/Web%20Development/Images/Portfolio/Drum%20Machine/drumMachineProd.gif?p${new Date().getTime()}")`;

        if (classN.includes('quoteMachineImgGif'))
            e.target.style.backgroundImage = `url("https://res.cloudinary.com/fjplaurr/image/upload/v1568990523/Web%20Development/Images/Portfolio/Random%20Quote%20Machine/quoteMachineProd_oycuwz.gif?p${new Date().getTime()}")`;

        if (classN.includes('markdownPreviewerGif'))
            e.target.style.backgroundImage = `url("https://res.cloudinary.com/fjplaurr/image/upload/v1568997796/Web%20Development/Images/Portfolio/Mardown%20Previewer/markdownPreviewerProd_whwafa.gif?p${new Date().getTime()}")`;

        if (classN.includes('personalPortfolioGif'))
            e.target.style.backgroundImage = `url("https://res.cloudinary.com/fjplaurr/image/upload/v1569061401/Web%20Development/Images/Portfolio/Personal%20Portfolio/personalPortfolioGif_racnqc.gif?p${new Date().getTime()}")`;
    }

    handleOut = (e) => {
        e.target.style.backgroundImage = "none";
    }

    render() {
        return (
            <div className="gridWrapper" id="gridWrapper">
                <h2>Projects</h2>
                <div className="projects">
                    <article>
                        <div onMouseOver={this.handleHover} onMouseOut={this.handleOut} className="image portfolioImgPng">
                            <div className="image imageGif personalPortfolioGif"></div>
                        </div >
                        <div className="projectInfo">
                            <h3>Personal Portfolio</h3>
                            <p>Current Website.</p>
                            <ul className="technologies">
                                <li>React</li>
                                <li>Javascript</li>
                                <li>CSS Flexbox</li>
                                <li>CSS Grid Layout</li>
                                <li>HTML5</li>
                                <li>Node.js</li>
                                <li>MongoDB</li>
                            </ul>
                            <ul className="appRepoButtons">
                                <li><a href="https://github.com/fjplaurr/personal-portfolio" target="_blank" className="repoAnchor">See Code</a></li>
                            </ul>
                        </div>
                    </article>
                    <article>
                        <div onMouseOver={this.handleHover} onMouseOut={this.handleOut} className="image drumMachineImgPng">
                            <div className="image imageGif drumMachineImgGif"></div>
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
                                <li><a href="https://github.com/fjplaurr/drumMachine" target="_blank" className="repoAnchor">See code</a></li>
                            </ul>
                        </div>
                    </article>
                    <article>
                        <div onMouseOver={this.handleHover} onMouseOut={this.handleOut} className="image markdownPreviewerPng">
                            <div className="image imageGif markdownPreviewerGif"></div>
                        </div >
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
                                <li><a href="https://github.com/fjplaurr/reactMarkdownPreviewer" target="_blank" className="repoAnchor">See code</a></li>
                            </ul>
                        </div>
                    </article>
                    <article>
                        <div onMouseOver={this.handleHover} onMouseOut={this.handleOut} className="image quoteMachineImgPng">
                            <div className="image imageGif quoteMachineImgGif"></div>
                        </div >
                        <div className="projectInfo">
                            <h3>Quote Machine</h3>
                            <p>App that delivers quotes that can be shared in social media.</p>
                            <ul className="technologies">
                                <li>React</li>
                                <li>Javascript</li>
                                <li>CSS3</li>
                                <li>HTML5</li>
                            </ul>
                            <ul className="appRepoButtons">
                                <li><a href="https://codepen.io/fjplaurr/full/pmwQWz" target="_blank" className="appAnchor">See app</a></li>
                                <li><a href="https://github.com/fjplaurr/quoteMachine" target="_blank" className="repoAnchor">See code</a></li>
                            </ul>
                        </div>
                    </article>
                </div>
            </div>
        )
    }
}