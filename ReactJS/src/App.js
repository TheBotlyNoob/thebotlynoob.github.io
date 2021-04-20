import logo from './logo.svg';
import './App.css';
import './get';

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
          Learn React
        </a>
        <get src="https://www.googleapis.com/youtube/v3/search?key=AIzaSyB5rUUrK222E9xTv_nd4cX1y87JP7t0z70&channelId=UCBpQy7-ZNMHhRBQ0gcHGcBw&part=snippet,id&order=date&maxResults=20" item="kind" />
      </header>
    </div>
  );
}

export default App;
