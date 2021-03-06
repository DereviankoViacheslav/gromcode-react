import React, { Component } from 'react';
import User from './User'

class UserList extends Component {

  state = {
    sorting: null,
  };

  toggleSorting = () => {
    const newSorting = this.state.sorting === 'asc'
      ? 'desc'
      : 'asc';
    this.setState({
      sorting: newSorting,
    });
  }

  render() {

    let userList = this.props.users;

    if (this.state.sorting) {
      userList = [...this.props.users]
        .sort((a, b) => this.state.sorting === 'asc' ? a.age - b.age : b.age - a.age);
    }

    return (
      <div>
        <button className="btn" onClick={this.toggleSorting}>{this.state.sorting || '-'}</button>
        <ul className="users">
          {userList.map(({ id, ...user }) => <User {...user} key={id} />)}
        </ul>
      </div>
    );
  };
}

export default UserList;