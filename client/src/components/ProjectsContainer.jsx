import React from 'react';
import drumMachine from '../../images/drumMachine.png';


export default function ProjectsContainer() {
    return (
        <div className="gridWrapper">
            <h2>Projects</h2>
            <div className="projects">
                <article>
                    <img src={drumMachine} alt="" />
                    <div className="projectInfo">
                        <h3>Drum Machine</h3>
                        <p>App that allows the user to play a virtual drum machine using different sounds and voices.</p>
                        <ul className="technologies">
                            <li>wtf</li>
                        </ul>
                        <ul className="appRepoButtons">
                            <li><a href="https://codepen.io/fjplaurr/full/GVQbQe" target="_blank" className="appAnchor">See app</a></li>
                            <li><a href="https://github.com/fjplaurr/drumMachine" className="repoAnchor">See repository</a></li>
                        </ul>
                    </div>
                </article>
                <article>
                    <img src="https://res.cloudinary.com/fjplaurr/image/upload/v1565777165/Web%20Development/Images/beach_woly2t.jpg" alt="" />
                    <div className="projectInfo">
                        <h3>Nisl placerat</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id nulla dignissim dapibus ultrices.</p>
                        <ul className="appRepoButtons">
                            <li><a href="#" className="appAnchor">See app</a></li>
                            <li><a href="#" className="repoAnchor">See repository</a></li>
                        </ul>
                    </div>
                </article>
                <article>
                    <img src="https://res.cloudinary.com/fjplaurr/image/upload/v1565777165/Web%20Development/Images/beach_woly2t.jpg" alt="" />
                    <div className="projectInfo">
                        <h3>Ante fermentum</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id nulla dignissim dapibus ultrices.</p>
                        <ul className="appRepoButtons">
                            <li><a href="#" className="appAnchor">See app</a></li>
                            <li><a href="#" className="repoAnchor">See repository</a></li>
                        </ul>
                    </div>
                </article>
                <article>
                    <img src="https://res.cloudinary.com/fjplaurr/image/upload/v1565777165/Web%20Development/Images/beach_woly2t.jpg" alt="" />
                    <div className="projectInfo">
                        <h3>Fusce consequat</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id nulla dignissim dapibus ultrices.</p>
                        <ul className="appRepoButtons">
                            <li><a href="#" className="appAnchor">See app</a></li>
                            <li><a href="#" className="repoAnchor">See repository</a></li>
                        </ul>
                    </div>
                </article>
            </div>
        </div>
    )
}