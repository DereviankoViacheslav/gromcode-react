import React from 'react';

function UserMenu({ userData }) {
  if (!userData) return null;

  return (
    <div className="menu">
      <span className="menu__greeting">{userData.name}</span>
      <img src={userData.avatar_url} alt="User Avatar" className="menu__avatar" />
    </div>
  );
}

export default UserMenu;