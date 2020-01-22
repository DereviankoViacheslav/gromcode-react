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

    const users = this.props.users
      .filter(({ name }) => {
        if(!this.state.searchValue) return true;
        return name.toLowerCase().indexOf(this.state.searchValue.toLowerCase()) !== -1;
      })
      .map(({ id, ...user }) => <User key={id} {...user} />);

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