import * as React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import App from 'components/App/App';
import About from 'components/About/About';

export default () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>

      <hr />

      <Route exact={true} path="/" component={App} />
      <Route path="/about" component={About} />
    </div>
  </Router>
);
