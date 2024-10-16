import React, { Component } from 'react';
import HeaderFunc from './Heading';
import LoginPage from './LoginPage';
import './SignUpStyle.css';
class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      User: '',
      Pass: '',
      Message: '',
      SetUsername: '',
      SetPassword: '',
      IsSignedUp: false,
      LoginClicked: false,
    };
  }

  UserVal = (event) => {
    this.setState({
      User: event.target.value,
    });
  };

  PassVal = (event) => {
    this.setState({
      Pass: event.target.value,
    });
  };

  SetUserPass = () => {
    const { User, Pass } = this.state;
    if (User === '' || Pass === '') {
      this.setState({ Message: 'Please fill out both fields.' });
      return;
    }


    this.setState({
      SetUsername: User,
      SetPassword: Pass,
      IsSignedUp: true,
      Message: 'Signed up successfully!', 
    });
  };

  LoginClick = () => {
    this.setState({
      LoginClicked: true, 
    });
  };

  render() {
    const { User, Pass, Message, LoginClicked, SetUsername, SetPassword } = this.state;
    if (LoginClicked) {
      return <LoginPage UserN={SetUsername} PassW={SetPassword} />;
    }

    return (
      <div>
        <HeaderFunc title="SIGN UP "/>
        <div
        className='box-items'>
          <input
            type="text"
            placeholder="Enter your New Username"
            value={User}
            onChange={this.UserVal}
            className='user-box'
          />
          <input
            type="password"
            placeholder="Enter your New Password"
            value={Pass}
            onChange={this.PassVal}
            className='pass-box'
          />
        </div>
        <div className="button-items">
          <button onClick={this.SetUserPass}>Sign Up</button>
          <button onClick={this.LoginClick}>Go To Login Page</button>
        </div>
        <div className ="message">
          {Message && <p>{Message}</p>} 
          </div>
      </div>
    );
  }
}

export default SignUp;
