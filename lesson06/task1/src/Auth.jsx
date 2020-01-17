import React, { Component } from 'react';
import Greeting from './Greeting';
import Logout from './Logout';
import Login from './Login';

class Auth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false
    }
  }

  handleLogin = () => {
    this.setState({
      isLoggedIn: true
    })
  }

  handleLogout = () => {
    this.setState({
      isLoggedIn: false
    })
  }


  render() {
    return (
      <div className="panel">
        <Greeting isLoggedIn={this.state.isLoggedIn} />
        <div>
          {this.state.isLoggedIn
            ? <Logout onLogout={this.handleLogout} />
            : <Login onLogin={this.handleLogin} />}
        </div>
      </div>
    )
  }
};

export default Auth;