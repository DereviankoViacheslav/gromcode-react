import React, { Component } from 'react';
import Pagination from './Pagination';
import User from './User'

class UsersList extends Component {

  users = this.props.users;

  state = {
    currentPage: 0,
    itemsPerPage: 3,
  };

  goPrev = () => {
    this.setState({
      currentPage: this.state.currentPage - 1,
    });
  }

  goNext = () => {
    this.setState({
      currentPage: this.state.currentPage + 1,
    });
  }

  render() {

    const { currentPage, itemsPerPage } = this.state;
    const showedUsers = [];
    let startIndex = currentPage * itemsPerPage;

    for (let i = startIndex; i < (itemsPerPage + startIndex); i++) {
      if(i === this.users.length) break;
      showedUsers.push(this.users[i]);
    }

    return (
      <div>
        <Pagination
          totalItems={this.users.length}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage + 1}
          goPrev={this.goPrev}
          goNext={this.goNext} />
        <ul className="users">
          {showedUsers.map(({ id, ...user }) => <User {...user} key={id} />)}
        </ul>
      </div>
    );
  };
}

export default UsersList;