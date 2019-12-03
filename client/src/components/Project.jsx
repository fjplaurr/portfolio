import React from 'react';
import PropTypes from 'prop-types';

function handleHover(e) {
  const classN = e.target.className;
  /*
  if (classN.indexOf('drumMachineImgGif') !== -1) { e.target.style.backgroundImage = `url("https://res.cloudinary.com/fjplaurr/image/upload/v1568989863/Web%20Development/Images/Portfolio/Drum%20Machine/drumMachineProd.gif?p${new Date().getTime()}")`; }
  if (classN.indexOf('quoteMachineImgGif') !== -1) { e.target.style.backgroundImage = `url("https://res.cloudinary.com/fjplaurr/image/upload/v1568990523/Web%20Development/Images/Portfolio/Random%20Quote%20Machine/quoteMachineProd_oycuwz.gif?p${new Date().getTime()}")`; }
  if (classN.indexOf('markdownPreviewerGif') !== -1) { e.target.style.backgroundImage = `url("https://res.cloudinary.com/fjplaurr/image/upload/v1568997796/Web%20Development/Images/Portfolio/Mardown%20Previewer/markdownPreviewerProd_whwafa.gif?p${new Date().getTime()}")`; }
  if (classN.indexOf('personalPortfolioGif') !== -1) { e.target.style.backgroundImage = `url("https://res.cloudinary.com/fjplaurr/image/upload/v1569061401/Web%20Development/Images/Portfolio/Personal%20Portfolio/personalPortfolioGif_racnqc.gif?p${new Date().getTime()}")`; }
  */
}

function handleOut(e) {
  e.target.style.backgroundImage = 'none';
}

export default class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appearState: 'show',
    };
    this.refProject = React.createRef();
    this.handleHover = handleHover.bind(this);
    this.handleOut = handleOut.bind(this);
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
      gifImg, pngImg, projectName, projectDescription, technoUsed, repoLink, appLink,
    } = this.props;
    const { appearState } = this.state;
    return (
      <article ref={this.refProject} className={appearState}>
        <div onMouseOver={this.handleHover} onFocus={this.handleHover} onMouseOut={this.handleOut} onBlur={this.handleOut} className={`image ${pngImg}`}>
          <div className={`image imageGif ${gifImg}`} />
        </div>
        <div className="projectInfo">
          <h3>{projectName}</h3>
          <p>{projectDescription}</p>
          <ul className="technologies">
            {technoUsed.map(
              (techno, i) => <li key={techno[i]}>{techno}</li>,
            )}
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
  gifImg: PropTypes.string.isRequired,
  projectName: PropTypes.string.isRequired,
  projectDescription: PropTypes.string.isRequired,
  technoUsed: PropTypes.arrayOf(PropTypes.string).isRequired,
  appLink: PropTypes.string.isRequired,
  repoLink: PropTypes.string.isRequired,
};
