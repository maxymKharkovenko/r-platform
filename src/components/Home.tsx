import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <h3>Home</h3>
        <a href="/login">go to Login</a>
        <a href="/game">go to Game</a>
      </div>
    );
  }
}

export default Home;
