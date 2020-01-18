import React from 'react';

function User({ name, age }) {

  return (
    <li className="user" key={name}>
      <span className="user__name">{name}</span>
      <span className="user__age">{age}</span>
    </li>
  );
}

export default User;