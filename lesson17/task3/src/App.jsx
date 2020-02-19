import React, { useState } from 'react';
import Dimension from './Dimension.jsx';
import './app.scss';

function App() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div>
      <div>
        <button className="btn" onClick={() => setIsVisible(true)}>Show</button>
        <button className="btn" onClick={() => setIsVisible(false)}>Hide</button>
      </div>
      {isVisible && <Dimension />}
    </div>
  );
}

export default App;