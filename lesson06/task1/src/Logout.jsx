import React from 'react';

function Logout(props) {

  return (
    <button className="logout btn" onClick={props.click}>Logout</button>
  );
};

export default Logout;