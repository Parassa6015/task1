import React from 'react';
import './header.css';

const Header = () => (
  <header className="site-header" role="banner">
    <div className="site-header__inner">
      <div className="site-header__logo">Shining Lives</div>
      <nav className="site-header__nav" aria-label="Main navigation">
        <a href="#home">Home</a>
        <a href="#projects">Projects</a>
        <a href="#donations">Donations</a>
        <a href="#about">About</a>
      </nav>
    </div>
  </header>
);

export default Header;