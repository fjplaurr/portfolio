import React from 'react';
import Project from './Project';



export default class ProjectsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.refProject = React.createRef();
    }

    render() {
        return (
            <div className="gridWrapper" id="gridWrapper">
                <h2>Projects</h2>
                <div className="projects" >
                    <Project pngImg={"portfolioImgPng"} gifImg='personalPortfolioGif' projectName='Personal Portfolio' projectDescription='Current Website.'
                        technoUsed={['React', 'Javascript', 'CSS Flexbox', 'CSS Grid Layout', 'HTML5', 'Node.js', 'MongoDB']} appLink='' repoLink='https://github.com/fjplaurr/personal-portfolio'></Project>
                    <Project pngImg={"drumMachineImgPng"} gifImg='drumMachineImgGif' projectName='Drum Machine' projectDescription='App that allows the user to play a virtual drum machine using different sounds and voices.'
                        technoUsed={['React', 'Javascript', 'CSS Flexbox', 'CSS Grid Layout', 'HTML5']} appLink='https://codepen.io/fjplaurr/full/GVQbQe' repoLink='https://github.com/fjplaurr/drumMachine'></Project>
                    <Project pngImg={"markdownPreviewerPng"} gifImg='markdownPreviewerGif' projectName='Markdown Previewer' projectDescription='App that allows the user to write Markdown language easily.'
                        technoUsed={['React', 'Javascript', 'CSS3', 'HTML5']} appLink='https://codepen.io/fjplaurr/full/qzwxPy' repoLink='https://github.com/fjplaurr/reactMarkdownPreviewer'></Project>
                    <Project pngImg={"quoteMachineImgPng"} gifImg='quoteMachineImgGif' projectName='Quote Machine' projectDescription='App that delivers quotes that can be shared in social media.'
                        technoUsed={['React', 'Javascript', 'CSS3', 'HTML5']} appLink='https://codepen.io/fjplaurr/full/pmwQWz' repoLink='https://github.com/fjplaurr/quoteMachine'></Project>
                </div>
            </div >
        )
    }
}