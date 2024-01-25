import React from 'react';
import './Sidebar.scss';
import Logo from '../../assets/images/Logo.png'
import Man from '../../assets/images/man.png.svg'
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src={Logo} alt='Logo' />
      </div>
      <div className="account-balance-container">
        <div className="icon-left"></div>
        <div className="balance-info">
          <div className="balance-amount">62,540 SAR</div>
          <div className="balance-label">Account Balance</div>
        </div>
        <div className="icon-right"></div>
      </div>
      <div>
        <div className="button-group">
          <button className="button deposit">Deposit</button>
          <button className="button withdraw">Withdraw</button>
        </div>

        <div className="notification">
          <div className="icon"></div>
          <span>To withdraw more than <b> 10,000 SAR </b> you need to <b>verify</b>  your banking account.</span>
        </div>
      </div>
      <div className="illustration">
        <img src={Man} alt='man' />
      </div>
      <div className="trust-section">
        <div className="trust-header">
          Why Should You Trust It?
        </div>
        {/* Any additional content */}
      </div>
    </div>
  );
};

export default Sidebar;
