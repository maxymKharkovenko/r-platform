import React, { Component } from "react";
import "./LoginComponent.scss";

class LoginComponent extends Component {
  handleOnSubmit = (e: any) => {
    e.preventDefault();
    console.log("Submitted!");
  };
  render() {
    return (
      <div className="LoginComponent col-md-6 mx-auto">
        <form onSubmit={this.handleOnSubmit}>
          <h4>Welcome Back!</h4>
          <div className="form-group row">
            <input className="input" type="text" placeholder="Email" />
          </div>
          <div className="form-group row">
            <input className="input" type="password" placeholder="Password" />
          </div>
          <div className="form-group row">
            <button className="custom-btn" type="submit">
              Log In
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginComponent;
