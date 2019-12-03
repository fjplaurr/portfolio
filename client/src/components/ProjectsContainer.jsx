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
        <div className="projects">
          <Project
            pngImg="flyFlowersImgPng"
            gifImg=""
            projectName="Fly-Flowers online shop"
            projectDescription="Online shop made with React and Redux"
            technoUsed={['React', 'Redux', 'Javascript', 'CSS', 'HTML', 'ESLint']}
            appLink="https://flyflowers-shop.herokuapp.com"
            repoLink="https://github.com/fjplaurr/flowersShop"
          />
          <Project
            pngImg="portfolioImgPng"
            gifImg="personalPortfolioGif"
            projectName="Personal Portfolio"
            projectDescription="Current Website"
            technoUsed={['React', 'Javascript', 'CSS', 'HTML', 'Node.js', 'MongoDB']}
            appLink=""
            repoLink="https://github.com/fjplaurr/personal-portfolio"
          />
        </div>
      </div>
    );
  }
}
