import React, { useState } from 'react';
import Clock from './Clock';
import './app.scss';

function App() {
  const [visible, setVisible] = useState(true);

  return (
    <>
      <button onClick={() => setVisible(visible ? false : true)}>toggle</button>
      <div className="main">
        {visible && <>
          <Clock location="New York" offset={0} />
          <Clock location="Kiyv" offset={2} />
          <Clock location="London" offset={-5} />
        </>
        }
      </div>
    </>
  );
}

export default App;