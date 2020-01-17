import React, { Component } from 'react';
import Login from './Login';
import Logout from './Logout';
import Spinner from './Spinner';


class Auth extends Component {

  state = {
    isLoggedIn: false,
    isVisibleSpinner: false,
  }

  login = () => {
    this.setState({
      isLoggedIn: true,
    });
    this.showSpinner();
  }

  logout = () => {
    this.setState({
      isLoggedIn: false,
    });
  };

  showSpinner = () => {
    this.setState({
      isVisibleSpinner: true
    });
    setTimeout(() => {
      this.setState({
        isVisibleSpinner: false
      });
    }, 2000)
  };

  render() {

    let button = this.state.isLoggedIn
      ? <Logout onLogout={this.logout} />
      : <Login onLogin={this.login} />;

    return <div className="main">
      {this.state.isVisibleSpinner ? <Spinner size={20} /> : button}
    </div>
  };
}

export default Auth;