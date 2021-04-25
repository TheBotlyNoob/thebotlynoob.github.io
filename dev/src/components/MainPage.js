import React from "react";
import Button from "react-bootstrap/Button";
import logo from "./logo.svg";
//import Get from "./Get";
import "./bootstrap.min.css";
import "./App.css";

//const vars = {};

export default function Main () {
  return (
    <div className="App"  style={{"overflowwrap": "breakword", "width": "100%", "height": "100%"}}>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="btn btn-primary">
            Learn React
          </Button>
        </a>
    </div>
  );
}