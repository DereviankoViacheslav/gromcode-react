import React from 'react';
import Greeting from './Greeting';
import './app.scss';

function App(props) {
  return (
    <Greeting firstName="Bobik" lastName="Dodik" birthDate={new Date('2000-01-15')} />
  );
}

export default App;