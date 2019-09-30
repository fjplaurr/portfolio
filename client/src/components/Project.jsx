import React from 'react';


export default class Project extends React.Component {
    constructor(props) {
        super(props);
        this.handleHover = this.handleHover.bind(this);
        this.state = {
            appearState: 'show'
        }
        this.refProject = React.createRef();
    }


    componentDidMount() {
        window.addEventListener('scroll', this._calcScroll.bind(this));
    }

    _calcScroll() {
        var diffHeight = this.refProject.current.getBoundingClientRect().top - window.innerHeight;
        if (diffHeight < -200) {
            this.setState({
                appearState: 'show'
            });
        } else {
            this.setState({
                appearState: 'hide'
            });
        }
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this._calcScroll)
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
            <article ref={this.refProject} className={this.state.appearState}>
                <div onMouseOver={this.handleHover} onMouseOut={this.handleOut} className={`image ${this.props.pngImg}`}  >
                    <div className={`image imageGif ${this.props.gifImg}`}></div>
                </div >
                <div className="projectInfo">
                    <h3>{this.props.projectName}</h3>
                    <p>{this.props.projectDescription}</p>
                    <ul className="technologies">
                        {this.props.technoUsed.map(
                            (techno, i) => <li key={i}>{techno}</li>
                        )}
                    </ul>
                    <ul className="appRepoButtons">
                        <li><a href={this.props.repoLink} target="_blank" className="repoAnchor">See Code</a></li>
                        {this.props.appLink !== '' &&
                            <li><a href={this.props.appLink} target="_blank" className="appAnchor" style={{ visibility: this.props.appLink == '' ? "hidden" : "visible" }}>See app</a></li>
                        }
                    </ul>
                </div>
            </article>
        )
    }
}