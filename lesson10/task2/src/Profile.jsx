import React from 'react';
import UserForm from './UserForm';

function Profile({ userData, handleChange }) {
  return (
    <div className="column">
      <UserForm userData={userData} handleChange={handleChange} />
    </div>
  );
}

export default Profile;