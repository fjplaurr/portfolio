import React from 'react';


export default function Nav() {
    return (
        <div id="header">
            <div className="top">
                <div id="logo">
                    <span className="image avatar48"><img src="images/avatar.jpg" alt="" /></span>
                    <h1 id="title">Jane Doe</h1>
                    <p>Hyperspace Engineer</p>
                </div>
                <nav id="nav">
                    <ul>
                        <li><a href="#top" id="top-link"><span className="icon solid fa-home">Intro</span></a></li>
                        <li><a href="#portfolio" id="portfolio-link"><span className="icon solid fa-th">Portfolio</span></a></li>
                        <li><a href="#about" id="about-link"><span className="icon solid fa-user">About Me</span></a></li>
                        <li><a href="#contact" id="contact-link"><span className="icon solid fa-envelope">Contact</span></a></li>
                    </ul>
                </nav>
            </div>
            <div className="bottom">
                <ul className="icons">
                    <li><a href="#" className="icon brands fa-github"><span className="label">Github</span></a></li>
                    <li><a href="#" className="icon brands fa-linkedin-in"><span className="label">Email</span></a></li>
                    <li><a href="#" className="icon solid fa-envelope"><span className="label">Email</span></a></li>
                </ul>
            </div>
        </div>
    )
}
