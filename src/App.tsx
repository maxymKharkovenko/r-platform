import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.scss";

class App extends Component {
  handleClick = () => {
    import("./TestModule")
      .then(({ moduleTest }) => {
        // Use moduleA
      })
      .catch((err) => {
        // Handle failure
      });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <div>
            <button onClick={this.handleClick}>Load</button>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
