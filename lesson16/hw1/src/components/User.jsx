import React from "react";

class User extends React.Component {
  state = { user: '' };

  componentDidMount() {
    this.fetchUser(this.props.match.params.userId)
  }

  componentDidUpdate(nextProps) {
    if (this.props.match.params.userId !== nextProps.match.params.userId) {
      this.fetchUser(this.props.match.params.userId)
    }
  }

  fetchUser = userId => {
    fetch(`https://api.github.com/users/${userId}`)
      .then(response => response.json())
      .then(userData => {
        this.setState({
          user: userData
        })
      });
  }

  render() {
    return (
      <div className="user">
        <img className="user__avatar" src={this.state.user.avatar_url} alt="User Avatar" />
        <div className="user__info">
          <span className="user__name">{this.state.user.name}</span>
          <span className="user__location">{this.state.user.location}</span>
        </div>
      </div>
    );
  }


}

export default User;