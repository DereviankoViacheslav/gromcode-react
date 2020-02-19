import React, { useState, useEffect } from 'react';
import moment from 'moment'


function Clock({ offset, location }) {
  const [time, setDate] = useState(0);

  useEffect(() => {
    setDate(moment(new Date()).utcOffset(offset).format('h:mm:ss A'))

    const intervalId = setInterval(() => {
      setDate(moment(new Date()).utcOffset(offset).format('h:mm:ss A'));
    }, 1000);

    return () => clearInterval(intervalId);
  });

  return (
    <div className="clock">
      <span className="clock__location">{location}</span>
      <span className="clock__time">{time}</span>
    </div>
  )
};

export default Clock;