import React from 'react';
import UserGreeting from './UserGreeting';
import GuestGreeting from './GuestGreeting';

function Greeting({ isLoggedIn }) {

  if (isLoggedIn) {
    return (
      <UserGreeting />
    );
  };

  return (
    <GuestGreeting />
  );
};

export default Greeting;