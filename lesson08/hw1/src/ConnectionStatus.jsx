import React, { Component } from 'react';

class ConnectionStatus extends Component {

  state = {
    status: 'online',
  }

  componentDidMount() {
    window.addEventListener('online', this.statusConnection);
    window.addEventListener('offline', this.statusConnection);
  }

  componentWillUnmount() {
    window.removeEventListener('online', this.statusConnection);
    window.removeEventListener('offline', this.statusConnection);
  }

  statusConnection = event => {
    this.setState({
      status: event.type,
    });
  }

  render() {

    return (
      <div className={this.state.status === 'offline' ? 'status_offline' : ''}>{this.state.status}</div>
    );
  };
}

export default ConnectionStatus;