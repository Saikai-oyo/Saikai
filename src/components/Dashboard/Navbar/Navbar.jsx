import React, { useContext } from 'react';
import { settingIcon, logoutIcon } from '../../../assets/icons';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext';
import { UserDetailsContext } from '../../../contexts/UserDetailsContext';
import { MessagesContext } from '../../../contexts/MessagesContext';
import SearchBar from '../SearchBar/SearchBar';
import logo from '../../../assets/logos/logo.svg';
import './style.css';

const Navbar = () => {
  const { logout } = useAuth();
  const history = useHistory();
  const { userDetails } = useContext(UserDetailsContext);
  const { information, setInformation } = useContext(MessagesContext);

  const handleLogout = async () => {
    setInformation({
      errorLine: null,
      error: '',
      message: '',
      haveError: false,
      haveMessage: false,
    });

    try {
      await logout();
      history.push('/login');
    } catch (error) {
      setInformation({
        errorLine: 'navbar',
        error: 'Failed to logout.',
        hasError: true,
      });
      console.error(error.message);
    }

    setTimeout(() => {
      setInformation({
        errorLine: null,
        error: '',
        message: '',
        haveError: false,
        haveMessage: false,
      });
    }, 3500);
  };

  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <a className='navbar-brand' href='/'>
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
            {information.errorLine === 'navbar' ? (
              information.haveError ? (
                <div className='alert alert-danger' role='alert'>
                  {information.error}
                </div>
              ) : information.haveMessage ? (
                <div className='alert alert-success' role='alert'>
                  {information.message}
                </div>
              ) : (
                ''
              )
            ) : (
              ''
            )}
          </div>
          <span className='navbar-text navResponsive'>
            <SearchBar />

            <span className='mr-4 navResponsive'>
              Welcome back
              {!userDetails.loading ? (
                ', ' + userDetails.firstName + ' ' + userDetails.lastName
              ) : (
                <div
                  className='ml-2 mr-2 spinner-grow spinner-grow-sm text-dark'
                  role='status'
                ></div>
              )}
              !
            </span>
            <span className='mr-3 navLink navResponsive'>
              <Link to='/profile'>
                <img
                  src={settingIcon}
                  alt='setting icon'
                  className='userIcon mr-3'
                ></img>
              </Link>
            </span>
            <span className='mr-3 navLink' onClick={handleLogout}>
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
