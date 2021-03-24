import React from 'react';
import { userIcon, settingIcon, logoutIcon } from '../../../assets/icons';
import logo from '../../../assets/logos/logo.png';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext';
import './style.css';

const Navbar = ({ error, message, userDetails, setError, setMessage }) => {
  const { logout } = useAuth();
  const history = useHistory();

  const handleLogout = async () => {
    setError('');
    setMessage('');
    try {
      await logout();
      history.push('/login');
    } catch (error) {
      setError('Failed to log out.');
      console.error(error.message);
    }
  };

  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <a className='navbar-brand' href='/Saikai/'>
          <img src={logo} width='170' height='50' alt='' />
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarTogglerSaikai'
          aria-controls='navbarTogglerSaikai'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div
          className='collapse navbar-collapse justify-content-between'
          id='navbarTogglerSaikai'
        >
          <div className='mr-5 '>
            {error && (
              <div className='alert alert-danger' role='alert'>
                {error}
              </div>
            )}
            {message && (
              <div className='alert alert-success' role='alert'>
                {message}
              </div>
            )}
          </div>
          <span className='navbar-text navResponsive'>
            <span className='mr-5 navResponsive'>
              <img
                src={userIcon}
                alt='user icon'
                className='userIcon mr-2'
              ></img>
              Welcome back
              {userDetails ? (
                ', ' + userDetails.firstName + ' ' + userDetails.lastName
              ) : (
                <div
                  className='ml-2 mr-2 spinner-grow spinner-grow-sm text-success'
                  role='status'
                ></div>
              )}
              !
            </span>
            <span className='mr-2 navLink navResponsive'>
              <Link to='/profile'>
                <img
                  src={settingIcon}
                  alt='setting icon'
                  className='userIcon mr-3'
                ></img>
              </Link>
            </span>
            <span className='mr-2 navLink' onClick={handleLogout}>
              <img
                src={logoutIcon}
                alt='logout icon'
                className='userIcon mr-1'
              ></img>
            </span>
          </span>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
