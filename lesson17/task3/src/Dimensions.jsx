import React, { useEffect, useState } from 'react';

function Dimensions() {
  const [demensions, setDimensions] = useState({
    widht: 0,
    height: 0
  });

  useEffect(() => {
    const { innerWidth, innerHeight } = window;
    setDimensions({ width: innerWidth, height: innerHeight });

    const handleResize = (event) => {
      const { innerHeight, innerWidth } = event.target;
      setDimensions({ width: innerWidth, height: innerHeight });
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, []);

  const { width, height } = demensions;
  document.title = `${width}px - ${height}px`;

  return (
    <div className="dimensions">{`${width}px - ${height}px`}</div>
  );
}

export default Dimensions;