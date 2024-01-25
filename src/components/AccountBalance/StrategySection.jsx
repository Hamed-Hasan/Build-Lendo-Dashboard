import React from 'react';
import './StrategySection.scss'
const StrategySection = () => {
  return (
    <div className='strategy-container'>
      <div className='strategy-row'>
        <div className="conservative">
        <div className="tag">Conservative</div>
        <div className="rate">10-14%</div>
        <div className="description">Interest Rate</div>
      </div>
        
      <div className='card-details-main'>
        <div  className="card-details">
        <div className="active">
          <div className="title">Active</div>
          <div className="status">Status</div>
        </div>
        <div className="investment">
          <div className="amount">1500 SAR</div>
          <div className="description">Max. Investment</div>
          </div>
         
        </div>


        <div className="note">* Strategy started at 20th March 2021</div>
        </div>


        <div className='actions-text'>
           <div className="loans">
          <div className="number">26</div>
          <div className="description">Loans Funded</div>
        </div>

        <div className="buttons">
          <button className="stop">Stop</button>
          <button className="change">Change Settings</button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default StrategySection;