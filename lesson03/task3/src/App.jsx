import React from 'react';
import Comment from './Comment';
import './app.scss';

const userInfo = {
  name: 'Tom',
  avatarUrl: 'https://avatars1.githubusercontent.com/users'
};

function App(props) {
  return (
    <Comment user={userInfo} text="Good job!" date={new Date()} />
  );
}

export default App;