import React from 'react';

function UserProfile({ userData }) {
  if (!userData) return null;

  return (
    <div className="user">
      <img className="user__avatar" alt="User Avatar" src={userData.avatar_url} />
      <div className="user__info">
        <span className="user__name">{userData.name}</span>
        <span className="user__location">{userData.location}</span>
      </div>
    </div>
  );
}

export default UserProfile;