import React, { Component } from 'react';
import Pagination from './Pagination';
import User from './User'

class UsersList extends Component {

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
    let startIndex = currentPage * itemsPerPage;
    const showedUsers = this.props.users
      .slice(startIndex, itemsPerPage + startIndex)
      .map(({ id, ...user }) => (
        <li className="user" key={id}>
          <User {...user} />
        </li>
      ));

    return (
      <div>
        <Pagination
          totalItems={this.props.users.length}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage + 1}
          goPrev={this.goPrev}
          goNext={this.goNext} />
        <ul className="users">
          {showedUsers}
        </ul>
      </div>
    );
  };
}

export default UsersList;