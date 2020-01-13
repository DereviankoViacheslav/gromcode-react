import React from 'react';
import Profile from './Profile';
import './app.scss';

const userData = {
  firstName: 'John',
  lastName: 'Doe',
  birthDate: '1991-01-17T11:11:11.819Z',
  birthPlace: 'London'
};

function App() {
  return (
    <Profile userData={userData} />
  );
}

export default App;