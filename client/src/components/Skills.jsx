import React from 'react';
import nodejsLogo from '../../images/nodejsLogo.svg';
import HTML5Logo from '../../images/HTML5Logo.svg';
import CSS3Logo from '../../images/CSS3Logo.svg';
import javascriptLogo from '../../images/javascriptLogo.svg';
import reactLogo from '../../images/reactLogo.svg';
import mysqlLogo from '../../images/mysqlLogo.svg';
import mongodbLogo from '../../images/mongodbLogo.svg';
import firebaseLogo from '../../images/firebaseLogo.svg';
import javaLogo from '../../images/javaLogo.svg';
import gitLogo from '../../images/gitLogo.svg';
import githubLogo from '../../images/githubLogo.svg';
import herokuLogo from '../../images/herokuLogo.svg';

export default function Skills() {
  function createSkill(link, logo, alt, label) {
    const obj = {
      link, logo, alt, label,
    };
    return obj;
  }
  const html = createSkill('https://developer.mozilla.org/docs/HTML/HTML5', HTML5Logo, 'HTML logo', 'HTML5');
  const css = createSkill('https://developer.mozilla.org/docs/Archive/CSS3', CSS3Logo, 'CSS logo', 'CSS3');
  const javascript = createSkill('https://developer.mozilla.org/docs/Web/JavaScript', javascriptLogo, 'Javascript logo', 'Javascript');
  const react = createSkill('https://reactjs.org', reactLogo, 'ReactJS logo', 'React.js');
  const frontSkills = [html, css, javascript, react];
  const node = createSkill('https://nodejs.org', nodejsLogo, 'Nodejs logo', 'Node.js');
  const mongodb = createSkill('https://www.mongodb.com', mongodbLogo, 'MongoDB logo', 'MongoDB');
  const firebase = createSkill('https://firebase.google.com', firebaseLogo, 'Firebase logo', 'Firebase');
  const mysql = createSkill('https://www.mysql.com', mysqlLogo, 'MySQL logo', 'MySQL');
  const backSkills = [node, mongodb, firebase, mysql];
  const java = createSkill('https://www.java.com', javaLogo, 'Java logo', 'Java');
  const git = createSkill('https://git-scm.com', gitLogo, 'Git logo', 'Git');
  const github = createSkill('https://github.com', githubLogo, 'GitHub logo', 'GitHub');
  const heroku = createSkill('https://www.heroku.com', herokuLogo, 'Heroku logo', 'Heroku');
  const otherTechnoSkills = [java, git, github, heroku];
  const frontSkillsContent = (
    <ul className="logoList">
      {frontSkills.map((x, index) => (
        <li key={x[index]}>
          <div>
            <a href={x.link} target="_blank" rel="noopener noreferrer">
              <img src={x.logo} alt={x.alt} />
              <p>{x.label}</p>
            </a>
          </div>
        </li>
      ))}
    </ul>
  );
  const backSkillsContent = (
    <ul className="logoList">
      {backSkills.map((x, index) => (
        <li key={x[index]}>
          <div>
            <a href={x.link} target="_blank" rel="noopener noreferrer">
              <img src={x.logo} alt={x.alt} />
              <p>{x.label}</p>
            </a>
          </div>
        </li>
      ))}
    </ul>
  );
  const otherSkillsContent = (
    <ul className="logoList">
      {otherTechnoSkills.map((x, index) => (
        <li key={x[index]}>
          <div>
            <a href={x.link} target="_blank" rel="noopener noreferrer">
              <img src={x.logo} alt={x.alt} />
              <p>{x.label}</p>
            </a>
          </div>
        </li>
      ))}
    </ul>
  );
  return (
    <div className="skills" id="skills">
      <h2>My Skills</h2>
      <div className="skillLists">
        <div className="skillList">
          <h3 className="listHeading">Front-End</h3>
          {frontSkillsContent}
        </div>
        <div className="skillList">
          <h3 className="listHeading">Back-End</h3>
          {backSkillsContent}
        </div>
        <div className="skillList">
          <h3 className="listHeading">Other Technologies</h3>
          {otherSkillsContent}
        </div>
      </div>
    </div>
  );
}
