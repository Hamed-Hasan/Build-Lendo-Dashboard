import React from 'react';
import './header.scss'
const Header = () => {
    return (
        <nav className="navbar">
      <ul className="nav-items">
        <li className="nav-item ">Overview</li>
        <li className="nav-item">Invest</li>
        <li className="nav-item auto-invest active">Auto-Invest</li>
        <li className="nav-item">My Portfolio</li>
      </ul>
      <div className="user-settings">
        <div className="language-selector">En</div>
        <div className="notify-icon"></div>
        <div className="user-icon"></div>
      </div>
    </nav>
    );
};

export default Header;