import React from 'react';
import PropTypes from 'prop-types';
import './Project.css';

class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appearState: 'show',
    };
    this.refProject = React.createRef();
  }

  componentDidMount() {
    window.addEventListener('scroll', this.calcScroll.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.calcScroll);
  }

  calcScroll() {
    const diffHeight = this.refProject.current.getBoundingClientRect().top - window.innerHeight;
    if (diffHeight < -200) {
      this.setState({
        appearState: 'show',
      });
    } else {
      this.setState({
        appearState: 'hide',
      });
    }
  }

  render() {
    const {
      pngImg, projectName, projectDescription, technoUsed, repoLink, appLink,
    } = this.props;
    const { appearState } = this.state;
    return (
      <article ref={this.refProject} className={appearState}>
        <a aria-label="openLink" href={appLink} target="_blank" rel="noopener noreferrer" className={`image ${pngImg}`} />
        <div className="projectInfo">
          <h3>{projectName}</h3>
          <p>{projectDescription}</p>
          <ul className="technologies">
            {technoUsed.map((techno) => <li key={techno}>{techno}</li>)}
          </ul>
          <ul className="appRepoButtons">
            <li><a href={repoLink} target="_blank" rel="noopener noreferrer" className="repoAnchor">See Code</a></li>
            {appLink !== ''
              && <li><a href={appLink} target="_blank" rel="noopener noreferrer" className="appAnchor" style={{ visibility: appLink === '' ? 'hidden' : 'visible' }}>See app</a></li>}
          </ul>
        </div>
      </article>
    );
  }
}

Project.propTypes = {
  pngImg: PropTypes.string.isRequired,
  projectName: PropTypes.string.isRequired,
  projectDescription: PropTypes.string.isRequired,
  technoUsed: PropTypes.arrayOf(PropTypes.string).isRequired,
  appLink: PropTypes.string.isRequired,
  repoLink: PropTypes.string.isRequired,
};

export default Project;
