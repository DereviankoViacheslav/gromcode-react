import React from 'react';

function Spiner({ size }) {

  let style = {
    width: `${size}px`,
    height: `${size}px`,
  };

  return (
    <span className="spinner" style={style} ></span>
  );
};

export default Spiner;