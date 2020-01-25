import React, { Component } from 'react';
import UserProfile from './UserProfile';
import UserMenu from './UserMenu';
import './app.scss';

class App extends Component {
  state = {
    userData: null,
  }

  componentDidMount() {
    this.fetchUser(this.props.userId);
  }

  fetchUser = userId => {
    fetch(`https://api.github.com/users/${userId}`)
      .then(response => response.json())
      .then(userData => {
        this.setState({
          userData,
        });
      })
  }

  render() {
    if (!this.state.userData) return null;
    const { name, location, avatar_url } = this.state.userData;

    return (
      <div className="page">
        <header className="header">
          <UserMenu userData={this.state.userData} />
        </header>
        <UserProfile userData={this.state.userData} />
      </div>
    );
  }
}

export default App;