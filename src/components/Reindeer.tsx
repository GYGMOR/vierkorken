import React, { useState, useEffect } from 'react';
import './Reindeer.css';

const Reindeer: React.FC = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 5000); // Animation duration is 5s

    return () => clearTimeout(timer);
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div className="reindeer-container">
      <img src="/images/reindeer.svg" alt="Reindeer" className="reindeer" />
    </div>
  );
}

export default Reindeer;
