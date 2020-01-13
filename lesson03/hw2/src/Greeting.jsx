import React from 'react';
import moment from "moment";
import './greeting.scss';

const formatDate = date => moment(date).format("DD MMM YYYY");

function Comment(props) {
  return (
    <>
      <div className="greeting__name">
        {`${props.userData.firstName} ${props.userData.lastName}`}
      </div>
      <div className="greeting__birth">
        {`Was born ${formatDate(props.userData.birthDate)} in ${props.userData.birthPlace}`}
      </div>
    </>
  );
}

export default Comment;