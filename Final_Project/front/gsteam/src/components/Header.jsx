import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = ({ isLoggedIn, user_name, handleLogout }) => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <div className='container'>
        <div className='navbar-nav ms-auto'>
          <Link className='navbar-brand' to='/Logo/preview-redirect.jpg'>
            GSteam
          </Link>
          <Link className='nav-link me-3' to='/'>
            Store
          </Link>
          <Link className='nav-link me-3' to='/mygames'>
            My Games
          </Link>
          <Link className='nav-link me-3' to='/statistics'>
            Statistics
          </Link>
          <Link className='nav-link me-3' to='/profile'>
            Profile
          </Link>
          {isLoggedIn ? (
            <div className='d-flex '>
              <span className='me-3 text-white'>Welcome, {user_name}</span>
              <button
                className='btn btn-outline-primary ms-3'
                onClick={handleLogout}
              >
                Logout
              </button>
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
