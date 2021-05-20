import * as funcs from '../components';

export default function MainPage () {
  return (
    <div id='main'>
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload!
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <funcs.boot.Button variant="primary">Learn React</funcs.boot.Button>
          </a>
      </header>
      <footer>
        <span>This Website Is Made In: <a href="https://reactjs.org/">ReactJS</a>, And Is Open Source On: <a href="https://github.com/TheBotlyNoob/TheBotlyNoob.github.io/">GitHub</a>!</span>
      </footer>
    </div>
  );
};
