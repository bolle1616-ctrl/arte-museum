import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';



export default function Header() {

  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
  <header className={`header ${
  isHome && !scrolled ? 'home-header' : 'sub-header'} ${scrolled ? 'header-scrolled' : ''}`}>
    <div className="header-inner">

      <h1>
        <Link to="/">
          <img src={isHome && !scrolled
             ? `${process.env.PUBLIC_URL}/images/common/logo_white.png` 
             : `${process.env.PUBLIC_URL}/images/common/logo_black.png`} 
             alt="ARTE MUSEUM"/>
        </Link>
      </h1>

      <nav>
        <Link to="/exhibition">EXHIBITION</Link>
        <Link to="/location">LOCATION</Link>
        <Link to="/ticket">TICKET</Link>
        <Link to="/about">ABOUT</Link>
      </nav>

      <div className="header-util">
        <span className="material-symbols-outlined">search</span>

        <div className="language">
          <span className="material-symbols-outlined">language</span>
          <span className="material-symbols-outlined arrow">
            arrow_drop_down
          </span>
        </div>
      </div>

    </div>
  </header>
  )
}
