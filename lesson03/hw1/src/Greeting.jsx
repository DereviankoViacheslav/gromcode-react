import React from 'react';
import moment from "moment";
import './greeting.scss';

function getFullYears(birthDate) {
  return moment(new Date()).diff(moment(birthDate), "years")
}

function Comment(props) {
  return (
    <div className="greeting">
      {`My name is ${props.firstName} ${props.lastName}. I'm ${getFullYears(props.birthDate)} years old`}
    </div>
  );
}

export default Comment;