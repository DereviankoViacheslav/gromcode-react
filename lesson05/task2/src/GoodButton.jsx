import React, { Component } from 'react';
import './button.scss';

class Clock extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button
        className="fancy-button"
        onClick={() => alert('Good job!')}>
        Click me!
      </button>
    );
  };
}

export default Clock;