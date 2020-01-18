import React from 'react';
import UsersList from './UsersList';
import './app.scss';

const users = [
  {
    id: 'id-0',
    name: 'Bob00',
    age: 27
  },
  {
    id: 'id-1',
    name: 'Bob01',
    age: 37
  },
  {
    id: 'id-2',
    name: 'Bob02',
    age: 22
  },
  {
    id: 'id-3',
    name: 'Bob03',
    age: 20
  },
  {
    id: 'id-4',
    name: 'Bob04',
    age: 37
  },
  {
    id: 'id-5',
    name: 'Bob05',
    age: 22
  },
  {
    id: 'id-6',
    name: 'Bob06',
    age: 20
  },
  {
    id: 'id-7',
    name: 'Bob07',
    age: 37
  },
  {
    id: 'id-8',
    name: 'Bob08',
    age: 22
  },
  {
    id: 'id-9',
    name: 'Bob09',
    age: 20
  },
  {
    id: 'id-10',
    name: 'Bob10',
    age: 20
  }
];

function App() {
  return (
    <UsersList users={users} />
  );
}

export default App;