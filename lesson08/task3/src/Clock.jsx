import React, { Component } from 'react';

class Clock extends Component {

  render() {

    return (
      <div className="clock">
        <div className="clock__location">New York</div>
        <div className="clock__time">7:00:51 AM</div>
      </div>
    );
  };
}

export default Clock;