import React from 'react';

const Header = () => {
  return (
    <header>
      <nav>
        <div className="logo">GitGud(gui)</div>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/repositories">Repositories</a></li>
          <li><a href="/settings">Settings</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header; 