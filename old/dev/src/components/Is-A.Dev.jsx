import React from "react";
import Button from "react-bootstrap/Button";
import logo from "./logo.svg";
import "./bootstrap.min.css";
import "./App.css";

export default function isADev () {
  return (
    <div className="App"  style={{"overflowwrap": "breakword", "width": "100%", "height": "100%"}}>
        <img src={logo} className="App-logo" alt="logo" />
        <span id="Header">
          Edit <code>src/App.js</code> and save to reload.
        </span>
        <br />
        <a
          className="App-link"
          href="https://www.is-a.dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="btn btn-primary">
            Check It Out!
          </Button>
        </a>
    </div>
  );
}
