import React from 'react';
import Mailbox from './Mailbox';
import './app.scss';

function App() {
  return (
      <Mailbox unreadMessages={['A', 'B']} />
  );
}

export default App;