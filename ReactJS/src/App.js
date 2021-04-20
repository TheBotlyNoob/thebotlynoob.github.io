import logo from './logo.svg';
import Get from './get';
import './bootstrap.min.css';
import { Button } from 'reactstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
          <Button color="primary">
            Learn React
          </Button>
        </a>
        <br />
        <Get style={{color: 'white'}} src="https://gist.githubusercontent.com/MattIPv4/045239bc27b16b2bcf7a3a9a4648c08a/raw/2411e31293a35f3e565f61e7490a806d4720ea7e/bee%2520movie%2520script" />
      </header>
    </div>
  );
}

export default App;
