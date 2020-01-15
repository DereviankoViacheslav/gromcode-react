import React, { Component } from 'react';
import './toggler.scss';

class Toggler extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isOff: false,
    };
  }

  toggler = () => {
    this.setState({
      isOff: !this.state.isOff,
    });
  }

  render() {
    return (
      <button onClick={this.toggler} className="toggler">{this.state.isOff ? 'On' : 'Off'}</button>
    );
  };
}

export default Toggler;