import React from 'react';
import NumberList from './NumberList';
import './app.scss';

const numbers = [1, 2, 3, 4, 5];

function App() {
  return (
    <NumberList numbers={numbers} />
  );
}

export default App;