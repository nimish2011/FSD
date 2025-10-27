import React, { useState, useEffect } from 'react';
import './Header.css';

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-content">
        <h1 className="logo">NETFLIX</h1>
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#tvshows">TV Shows</a>
          <a href="#movies">Movies</a>
          <a href="#mylist">My List</a>
        </nav>
        <div className="header-right">
          <input type="text" placeholder="Search" className="search-box" />
          <div className="user-profile">👤</div>
        </div>
      </div>
    </header>
  );
}

export default Header;
