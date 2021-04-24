import React from 'react';
import Cards from 'react-ui-cards';
import Button from 'react-bootstrap/Button';
import logo from './logo.svg';
import Get from './Get';
import './App.css'
//import './bootstrap.min.css';

const vars = {};

export default function Main () {
  return (
    <div className="App"  style={{'overflowwrap': 'breakword', 'width': '100%', 'height': '100%'}}>
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
            <br />
            <b><u>Bee Movie Script</u></b>
            <br />
            <span style={{'display': 'none'}}>{vars.beeMovieScript = <Get src="https://gist.githubusercontent.com/MattIPv4/045239bc27b16b2bcf7a3a9a4648c08a/raw/2411e31293a35f3e565f61e7490a806d4720ea7e/bee%2520movie%2520script" />}</span>
            <code id="beeMovieScript" style={{'whitespace': 'pre'}}>
                    <pre style={{'color': 'inherit'}}>{vars.beeMovieScript}</pre>
            </code>
            <footer style={{'backgroundColor': 'white'}}>
                <Cards.UserCard className="d-flex justify-content-center"
                    float
                    header='https://i.imgur.com/w5tX1Pn.jpg'
                    avatar='https://i.imgur.com/uDYejhJ.jpg'
                    name='Jay Jackson'
                    positionName='Software Developer'
                    stats={[
                        {
                            name: 'followers',
                            value: 21
                        },
                        {
                            name: 'following',
                            value: 37
                        },
                        {
                            name: 'posts',
                            value: 117
                        }
                    ]}
                />
            </footer>
    </div>
);
}