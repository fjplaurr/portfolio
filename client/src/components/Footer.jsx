import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import axios from 'axios';

export default class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        }
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeMessage = this.onChangeMessage.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
        const message = {
            name: this.state.name,
            email: this.state.email,
            textMessage: this.state.message
        }
        console.log(message);
        axios.post('/add', message).then(res => console.log(res.data));
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    onChangeMessage(e) {
        this.setState({
            message: e.target.value
        });
    }

    render() {
        return (
            <section id="footer">
                <h2 className="major">Get in touch</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <form method="post" action="#" onSubmit={this.onSubmit}>
                    <div className="fields">
                        <div className="nameDiv">
                            <label htmlFor="name">Name:</label>
                            <input type="text" name="name" id="name" onChange={this.onChangeName} />
                        </div>
                        <div className="emailDiv">
                            <label htmlFor="email">Email:</label>
                            <input type="email" name="email" id="email" onChange={this.onChangeEmail} />
                        </div>
                        <div className="textDiv">
                            <label htmlFor="message">Message:</label>
                            <textarea name="message" id="message" rows="4" onChange={this.onChangeMessage}></textarea>
                        </div>
                    </div>
                    <input type="submit"></input>
                </form>
                <ul className="contact">
                    <li><a href="https:www.linkedin.com/in/fcojplaza" target="_blank"><i className="fab fa-linkedin"></i></a></li>
                    <li><a href="https:www.github.com/fjplaurr" target="_blank"><i className="fab fa-github"></i></a></li>
                    <li><a href="mailto:fjplaurr@gmail.com" target="_blank"><i className="fas fa-envelope"></i></a></li>
                </ul>
            </section>
        )
    }

}