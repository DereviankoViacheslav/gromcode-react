import React, { Component } from 'react';

class User extends Component {

  state = {
    user: null,
  }

  componentDidMount() {
    this.fetchUser(this.props.userId);
  }

  fetchUser = userId => {
    fetch(`https://api.github.com/users/${userId}`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          user: data,
        });
      })
  }

  render() {

    const { user } = this.state;
    if (!this.state.user) return null;
    const { name, location, avatar_url } = user;

    return (
      <div className="user">
        <img className="user__avatar" alt="User Avatar"
          src={avatar_url} />
        <div className="user__info">
          <span className="user__name">{name}</span>
          <span className="user__location">{location}</span>
        </div>
      </div>
    );
  }
}

export default User;