import React from 'react';
import './button.scss';

function GoodButton() {

  return (
    <button
      className="fancy-button"
      onClick={() => alert('Good job!')}>
      Click me!
      </button>
  );
}

export default GoodButton;