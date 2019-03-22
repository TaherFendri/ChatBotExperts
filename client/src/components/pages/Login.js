import React, { Component } from "react";
import logo from "../../logoWhite.png";
import API from '../../utils/API';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
class Login extends Component {


constructor(props) {
        super(props);
        this.state = {
            email : "",
            password: ""
        }
        this.handleChange.bind(this);
        this.send.bind(this);
    }
    send = event => {
        if(this.state.email.length === 0){
            return;
        }
        if(this.state.password.length === 0){
            return;
        }
        API.login(this.state.email, this.state.password).then(function(data){
            localStorage.setItem('token', data.data.token);
            localStorage.setItem('user',data.data.user);
            console.log(data.data.user);
            window.location = "/dashboard"
        },function(error){
            console.log(error);
            return;
        })
    }    
    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

  render() {
    return (
      <div className="landing-page">
        <div className="content-bg-wrap" />
        <div
          className="header--standard header--standard-landing"
          id="header--standard"
        >
          <div className="container">
            <div className="header--standard-wrap">
              <a href="#" className="logo">
                <div className="img-wrap">
                  <img width={200} src={logo} alt="Olympus" />
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="header-spacer--standard" />
        <div className="container">
          <div className="row display-flex">
            <div className="col col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="landing-content">
                <h1>Welcome to the Biggest Social Network in the World</h1>
                <p>
                  We are the best and biggest social network with 5 billion
                  active users all around the world. Share you thoughts, write
                  blog posts, show your favourite music via Stopify, earn badges
                  and much more!
                </p>
                <a href="#" className="btn btn-md btn-border c-white">
                  Register Now!
                </a>
              </div>
            </div>

            <div className="col col-xl-5 col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="registration-login-form">
                <div
                  className="tab-pane"
                  id="profile"
                  role="tabpanel"
                  data-mh="log-tab"
                >
                  <div className="title h6">Login to your Account</div>
                  <form className="content">
                     <div className="Login">
                <FormGroup controlId="email" bsSize="large">
                <ControlLabel>Email</ControlLabel>
                <FormControl autoFocus type="email" value={this.state.email} onChange={this.handleChange}/>
                </FormGroup>
                <FormGroup controlId="password" bsSize="large">
                <ControlLabel>Password</ControlLabel>
                <FormControl value={this.state.password} onChange={this.handleChange} type="password"/>
                </FormGroup>
                <Button
                onClick={this.send}
                block
                bsSize="large"
                type="submit"
                >
                Connexion
                </Button>
            </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
