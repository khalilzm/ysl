import React, { Component } from 'react';
import { FACEBOOK_AUTH_URL, GITHUB_AUTH_URL, GOOGLE_AUTH_URL } from '../../constants';
import './Login.css';
import fbLogo from '../../image/fb-logo.png';
import googleLogo from '../../image/google-logo.png';
import githubLogo from '../../image/github-logo.png';

export default class Login extends Component {
  componentDidMount() {

  }

  render() {
    return(
      <div className = "login-container">
        <div className = "login-content">
          <h1 className="login-title">登陆界面</h1>
          <SocialLogin/>
          <div className="or-separator">
              <span className="or-text">或</span>
          </div>
          <LoginForm {...this.props} />
          <span className="signup-link">新用户注册</span>
        </div>
      </div>
    )
  }
}


class SocialLogin extends Component {
  render() {
    return (
        <div className="social-login">
            <a className="btn btn-block social-btn google" href={GOOGLE_AUTH_URL}>
              <img src={googleLogo} alt="Google" /> Log in with Google</a>
            <a className="btn btn-block social-btn facebook" href={FACEBOOK_AUTH_URL}>
              <img src={fbLogo} alt="Facebook" /> Log in with Facebook</a>
            <a className="btn btn-block social-btn github" href={GITHUB_AUTH_URL}>
              <img src={githubLogo} alt="Github" /> Log in with Github</a>
        </div>
    );
  }
}

class LoginForm extends Component {
  constructor(props: {} | Readonly<{}>) {
      super(props);
      this.state = {
          email: '',
          password: ''
      };
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event: { target: any; }) {
      const target = event.target;
      const inputName = target.name;        
      const inputValue = target.value;

      this.setState({
          [inputName] : inputValue
      });        
  }

  handleSubmit(event: { preventDefault: () => void; }) {
      event.preventDefault();   

      const loginRequest = Object.assign({}, this.state);

      // login(loginRequest)
      // .then(response => {
      //     localStorage.setItem(ACCESS_TOKEN, response.accessToken);
      //     Alert.success("You're successfully logged in!");
      //     this.props.history.push("/");
      // }).catch(error => {
      //     Alert.error((error && error.message) || 'Oops! Something went wrong. Please try again!');
      // });
  }
  
  render() {
      return (
          <form onSubmit={this.handleSubmit}>
              <div className="form-item">
                  <input type="email" name="email" 
                      className="form-control" placeholder="Email"
                      value={''} onChange={this.handleInputChange} required/>
              </div>
              <div className="form-item">
                  <input type="password" name="password" 
                      className="form-control" placeholder="Password"
                      value={''} onChange={this.handleInputChange} required/>
              </div>
              <div className="form-item">
                  <button type="submit" className="btn btn-block btn-primary">登陆</button>
              </div>
          </form>                    
      );
  }
}
