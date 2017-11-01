import * as React from 'react';
import './About.css';
const logo = require('./logo.svg');

export default class About extends React.Component {
  render() {
    return (
      <div className="About">
        <div className="About-header">
          <img src={logo} className="About-logo" alt="logo" />
          <h2>About</h2>
        </div>
      </div>
    );
  }
}
