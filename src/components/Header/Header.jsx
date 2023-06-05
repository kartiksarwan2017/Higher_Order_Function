import React from 'react';
import "./Header.css";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
     <Link to="/" className='navlinks'>Coins</Link>
     <Link to="/exchange" className='navlinks'>Exchanges</Link>
    </>
  )
}

export default Header;