import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import axios from 'axios';

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
    };
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeMessage = this.onChangeMessage.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  async onSubmit(e) {
    e.preventDefault();
    const res = await axios.post('http://localhost:5000/add', this.state);
    if (res.status === 200) {
      this.setState({
        name: '',
        email: '',
        message: 'Message correctly sent! I will answer you as soon as possible.',
      });
    } else {
      this.setState({
        name: '',
        email: '',
        message: 'There was an error and the message could not be sent.',
      });
    }
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  onChangeMessage(e) {
    this.setState({
      message: e.target.value,
    });
  }

  render() {
    const { name, email, message } = this.state;
    return (
      <div className="footer" id="footer">
        <h2>Get in contact</h2>
        <p>Should you want to contact me, you can either send me a message or an email.</p>
        <form method="post" action="#" onSubmit={this.onSubmit}>
          <div className="fields">
            <div className="nameDiv">
              <label htmlFor="name">
                Name:
                <input id="name" onChange={this.onChangeName} value={name} type="text" />
              </label>
            </div>
            <div className="emailDiv">
              <label htmlFor="email">
                Email:
                <input type="email" id="email" onChange={this.onChangeEmail} value={email} />
              </label>
            </div>
            <div className="textDiv">
              <label htmlFor="message">
                Message:
                <textarea id="message" rows="4" onChange={this.onChangeMessage} value={message} />
              </label>
            </div>
          </div>
          <input type="submit" value="Send" />
        </form>
        <ul className="contact">
          <li>
            <a href="https://www.linkedin.com/in/fcojplaza" target="_blank" rel="noreferrer noopener">
              <i className="fab fa-linkedin" />
              <p>LinkedIn</p>
            </a>
          </li>
          <li>
            <a href="https://www.github.com/fjplaurr" target="_blank" rel="noreferrer noopener">
              <i className="fab fa-github" />
              <p>GitHub</p>
            </a>
          </li>
          <li>
            <a href="mailto:fjplaurr@gmail.com" target="_blank" rel="noreferrer noopener">
              <i className="fas fa-envelope" />
              <p>Email</p>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
