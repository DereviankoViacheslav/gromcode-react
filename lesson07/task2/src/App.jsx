import React from 'react';
import UserList from './UserList';
import './app.scss';

const users = [
  {
    id: 'id-0',
    name: 'Bob',
    age: 27
  },
  {
    id: 'id-1',
    name: 'Nick',
    age: 37
  },
  {
    id: 'id-2',
    name: 'Bob',
    age: 22
  },
  {
    id: 'id-3',
    name: 'Tom',
    age: 20
  }
];

function App() {
  return (
      <UserList users={users} />
  );
}

export default App;