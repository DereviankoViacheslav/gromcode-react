import React from 'react';
import moment from "moment";

function getFullYears(birthDate) {
  return moment(new Date()).diff(moment(birthDate), "years")
}

function Profile(props) {
  return (
    <div className="greeting">
      {`My name is ${props.firstName} ${props.lastName}. I'm ${getFullYears(props.birthDate)} years old`}
    </div>
  );
}

export default Profile;