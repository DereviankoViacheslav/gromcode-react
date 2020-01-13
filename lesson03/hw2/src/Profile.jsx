import React from 'react';
import Greeting from './Greeting';

function Profile(props) {
  return (
    <Greeting userData={props.userData}/>
  );
}

export default Profile;