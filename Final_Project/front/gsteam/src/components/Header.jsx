import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = ({ isLoggedIn, username }) => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <div className='container'>
        <div className='navbar-nav ms-auto'>
          <Link className='navbar-brand' to='/'>
            GSteam
          </Link>
          <Link className='nav-link me-3' to='/'>
            Store
          </Link>
          <Link className='nav-link me-3' to='/mygames'>
            My Games
          </Link>
          <Link className='nav-link me-3' to='/statistics'>
            Statistiques
          </Link>
          <Link className='nav-link me-3' to='/profile'>
            Profil
          </Link>
          {isLoggedIn ? (
            <div className="d-flex align-items-center">
              <span className="me-3">Welcome, {username}!</span>
              <Link className='btn btn-outline-primary' to='/logout'>
                Logout
              </Link>
            </div>
          ) : (
            <Link className='btn btn-outline-primary' to='/login'>
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;

