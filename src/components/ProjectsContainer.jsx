import React from 'react';
import Project from './Project';
import './ProjectsContainer.css';

const ProjectsContainer = () => (
  <div className="gridWrapper">
    <h2>Projects</h2>
    <div className="projects">
      <Project
        pngImg="flyFlowersImgPng"
        projectName="Fly-Flowers online shop"
        projectDescription="Online shop made with React and Redux"
        technoUsed={['React', 'Redux', 'Javascript', 'CSS', 'HTML', 'ESLint']}
        appLink="https://flyflowers-shop.herokuapp.com"
        repoLink="https://github.com/fjplaurr/flowersShop"
      />
      <Project
        pngImg="portfolioImgPng"
        projectName="Personal Portfolio"
        projectDescription="Current Website"
        technoUsed={['React', 'Javascript', 'CSS', 'HTML', 'Node.js', 'MongoDB']}
        appLink=""
        repoLink="https://github.com/fjplaurr/personal-portfolio"
      />
    </div>
  </div>
);

export default ProjectsContainer;
