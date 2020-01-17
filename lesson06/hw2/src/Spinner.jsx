import React from 'react';

function Spiner({ size }) {

  let style = {
    padding: `${size}px`
  };

  return (
    <span className="spinner" style={style} ></span>
  );
};

export default Spiner;