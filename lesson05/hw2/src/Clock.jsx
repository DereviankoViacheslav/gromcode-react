import React, { Component } from 'react';
import moment from "moment";
import './clock.scss';

function formatTime(offset) {
  return moment().utcOffset(offset).format('h:mm:ss A');
}

class Clock extends Component {

  constructor(props) {
    super(props);
    this.state = {
      location: props.location,
      time: formatTime(props.offset),
    };

    setInterval(() => {
      this.setState({
        time: formatTime(props.offset),
      });
    }, 1000);
  }

  render() {
    return (
      <div className="clock">
        <div className="clock__location">{this.state.location}</div>
        <div className="clock__time">{this.state.time}</div>
      </div>
    );
  };
}

export default Clock;