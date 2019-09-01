import React from 'react';
import drumMachine from '../../images/drumMachine.png';


export default function ProjectsContainer() {
    return (
        <div className="gridWrapper">
            <h2>Vitae phasellus</h2>
            <p>Cras mattis ante fermentum, malesuada neque vitae, eleifend erat. Phasellus non pulvinar erat. Fusce tincidunt, nisl eget mattis egestas, purus ipsum consequat orci, sit amet lobortis lorem lacus in tellus. Sed ac elementum arcu. Quisque placerat auctor laoreet.</p>
            <div className="projects">
                <article>
                    <a href="#" className="image"><img src={drumMachine} alt="" /></a>
                    <h3>Sed feugiat lorem</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id nulla dignissim dapibus ultrices.</p>
                    <a href="#" className="special">Learn more</a>
                </article>
                <article>
                    <a href="#" className="image"><img src="https://res.cloudinary.com/fjplaurr/image/upload/v1565777165/Web%20Development/Images/beach_woly2t.jpg" alt="" /></a>
                    <h3>Nisl placerat</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id nulla dignissim dapibus ultrices.</p>
                    <a href="#" className="special">Learn more</a>
                </article>
                <article>
                    <a href="#" className="image"><img src="https://res.cloudinary.com/fjplaurr/image/upload/v1565777165/Web%20Development/Images/beach_woly2t.jpg" alt="" /></a>
                    <h3>Ante fermentum</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id nulla dignissim dapibus ultrices.</p>
                    <a href="#" className="special">Learn more</a>
                </article>
                <article>
                    <a href="#" className="image"><img src="https://res.cloudinary.com/fjplaurr/image/upload/v1565777165/Web%20Development/Images/beach_woly2t.jpg" alt="" /></a>
                    <h3>Fusce consequat</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id nulla dignissim dapibus ultrices.</p>
                    <a href="#" className="special">Learn more</a>
                </article>
            </div>
        </div>
    )
}