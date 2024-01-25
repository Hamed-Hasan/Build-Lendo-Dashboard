
import React, { useState } from 'react';
import './AutoInvestment.scss';

const ToggleSwitch = ({ isActive, toggleSwitch }) => (
  <label className="switch">
    <input type="checkbox" checked={isActive} onChange={toggleSwitch} />
    <span className="slider"></span>
  </label>
);

const AutoInvestmentSection = ({ isActive, toggleSwitch }) => (
  <div className="auto-investment-section">
    <div>
      <span className="title">Auto Investment</span>
    </div>
    <div>
      <span className="status">{isActive ? 'Active' : 'Inactive'}</span>
      <ToggleSwitch isActive={isActive} toggleSwitch={toggleSwitch} />
    </div>
  </div>
);

const AutoInvestment = () => {
  const [isActive, setIsActive] = useState(true);

  const toggleSwitch = () => {
    setIsActive(!isActive);
  };

  return <AutoInvestmentSection isActive={isActive} toggleSwitch={toggleSwitch} />;
};

export default AutoInvestment;
