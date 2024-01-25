import React, { useState } from 'react';
import './AutoInvestment.scss';

const AutoInvestment = () => {
  const [isActive, setIsActive] = useState(true); 

  const toggleSwitch = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="auto-investment-section">
      <div>
      <span className="title">Auto Investment</span>
      </div>
     <div>
     <span className="status">{isActive ? 'Active' : 'Inactive'}</span>
         <label className="switch">
        <input type="checkbox" checked={isActive} onChange={toggleSwitch} />
        <span className="slider"></span>
      </label>
     
     </div>
    </div>
  );
};

export default AutoInvestment;
