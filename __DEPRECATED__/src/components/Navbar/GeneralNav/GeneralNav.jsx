import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logos/logo.svg';
import { goBack } from '../../../assets/icons';
import Language from '../../Language/Language';
import './style.css';

const GeneralNav = ({ path = '', display }) => {
    return (
        <div className="nav-wrapper">
            <Link to={`/${path}`}>
                <div className={`${display === 'hide' ? 'hide' : 'go-back'}`}>
                    <img src={goBack} alt="Go Back" />
                </div>
            </Link>
            <div className="body-wrapper">
                <div>
                    <a className="navbar-brand" style={{ marginBottom: '34px' }} href="/">
                        <img src={logo} width="265" height="80" alt="Saikai" />
                    </a>
                </div>
                <Language />
            </div>
        </div>
    );
};

export default GeneralNav;
