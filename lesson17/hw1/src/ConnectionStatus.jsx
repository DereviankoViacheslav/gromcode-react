import React, { useState, useEffect } from 'react';

const ConnectionStatus = () => {
  const [networkStatus, setNetworkStatus] = useState({
    type: 'online'
  });

  useEffect(() => {
    const changeNetworkStatus = ({ type }) => {
      setNetworkStatus({ type })
    };

    window.addEventListener('offline', changeNetworkStatus);
    window.addEventListener('online', changeNetworkStatus);

    return () => {
      window.removeEventListener('offline', changeNetworkStatus);
      window.removeEventListener('online', changeNetworkStatus);
    }
  }, [networkStatus.type])

  const slassNames = `status status_${networkStatus.type}`;

  return (
    <div className={slassNames} >{networkStatus.type}</div>
  );
};

export default ConnectionStatus;