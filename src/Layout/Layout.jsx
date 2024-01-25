import React from 'react';
import './Layout.scss'; 

const Layout = ({ sidebar, children }) => {
  return (
    <div className="layout">
      <div className="sidebar">
        {sidebar}
      </div>
      <div className="main-content">
        {children}
      </div>
    </div>
  );
};

export default Layout;
