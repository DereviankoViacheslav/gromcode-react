import React, { Component } from 'react';
import User from './User';
import Filter from './Filter';

class UsersList extends Component {

  state = {
    searchValue: '',
  }

  handelChange = (event) => {
    this.setState({
      searchValue: event.target.value,
    });
  }

  render() {

    let users = [...this.props.users];
    if (this.state.searchValue) {
      users = users.filter(({ name }) => {
        return name.toLowerCase().indexOf(this.state.searchValue.toLowerCase()) !== -1;
      });
    }
    users = users.map(({ id, ...user }) => <User key={id} {...user} />);

    return (
      <div>
        <Filter filterText={this.state.searchValue} count={users.length} onChange={this.handelChange} />
        <ul className="users">
          {users}
        </ul>
      </div>
    );
  }
}

export default UsersList;