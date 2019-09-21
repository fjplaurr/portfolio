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
        axios.post('/add', message).then(res => {
            console.log(res);
        });
        this.setState({
            name: '',
            email: '',
            message: 'Message correctly sent! I will answer you as soon as possible.'
        });
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
        console.log(this.state);
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
        console.log("Mensaje cambiado: " + this.state.message);
    }

    render() {
        return (
            <div className="footer" id="footer">
                <h2>Get in contact</h2>
                <p>Should you want to contact me, you can either send me a message or an email.</p>
                <form method="post" action="#" onSubmit={this.onSubmit}>
                    <div className="fields">
                        <div className="nameDiv">
                            <label htmlFor="name">Name:</label>
                            <input type="text" name="name" onChange={this.onChangeName} value={this.state.name} />
                        </div>
                        <div className="emailDiv">
                            <label htmlFor="email">Email:</label>
                            <input type="email" name="email" onChange={this.onChangeEmail} value={this.state.email} />
                        </div>
                        <div className="textDiv">
                            <label htmlFor="message">Message:</label>
                            <textarea name="message" rows="4" onChange={this.onChangeMessage} value={this.state.message}></textarea>
                        </div>
                    </div>
                    <input type="submit"></input>
                </form>
                <ul className="contact">
                    <li><a href="https:www.linkedin.com/in/fcojplaza" target="_blank">
                        <i className="fab fa-linkedin"></i>
                        <p>LinkedIn</p>
                    </a></li>
                    <li><a href="https:www.github.com/fjplaurr" target="_blank">
                        <i className="fab fa-github"></i>
                        <p>GitHub</p>
                    </a></li>
                    <li><a href="mailto:fjplaurr@gmail.com" target="_blank">
                        <i className="fas fa-envelope"></i>
                        <p>Email</p>
                    </a></li>
                </ul>
            </div>
        )
    }

}