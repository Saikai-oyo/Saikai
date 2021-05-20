import React from 'react';
import logo from '../../../assets/logos/logo.svg';
import goBack from '../../../assets/icons/goBack.svg';
import './style.css';
import { Link } from 'react-router-dom';

const GeneralNav = () => {
  return (
    <div className='nav-wrapper'>
      <Link to='/profile'>
        <div className='go-back'>
          <img src={goBack} alt='Go Back' />
        </div>
      </Link>
      <a className='navbar-brand' style={{ marginBottom: '34px' }} href='/'>
        <img src={logo} width='265' height='80' alt='Saikai' />
      </a>
    </div>
  );
};

export default GeneralNav;
