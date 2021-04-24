import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import routes from './routes';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <Router routes={routes} history={createBrowserHistory()} />,
  document.getElementById('root')
);