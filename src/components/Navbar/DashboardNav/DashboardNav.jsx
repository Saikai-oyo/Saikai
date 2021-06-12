import React, { useContext, useEffect } from 'react';
import { settingIcon, logoutIcon } from '../../../assets/icons';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext';
import { UserDetailsContext } from '../../../contexts/UserDetailsContext';
import { MessagesContext } from '../../../contexts/MessagesContext';
import SearchBar from '../../Dashboard/SearchBar/SearchBar';
import logo from '../../../assets/logos/logo.svg';
import { useMediaQuery } from 'react-responsive';
import Language from '../../Language/Language';
import { useTranslation } from 'react-i18next';

import * as S from './style.js';

const DashboardNav = (props) => {
    const { t } = useTranslation();
    const { logout } = useAuth();
    const history = useHistory();
    const { userDetails } = useContext(UserDetailsContext);
    const { information, setInformation } = useContext(MessagesContext);

    const isMobile = useMediaQuery({ query: '(max-width: 850px)' }, undefined);
    useEffect(() => {}, [isMobile]);
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
                error: t('dashboard.navbar.errors.failed'),
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
            <S.NavbarWrapper>
                <S.NavbarLogo href="/">
                    <img src={logo} width="265" height="80" alt="Logo" />
                </S.NavbarLogo>
                <S.NavbarItemsWrapper>
                    <S.NavbarAlerts className="mr-5 ">
                        {information.errorLine === 'navbar' ? (
                            information.haveError ? (
                                <div className="alert alert-danger" role="alert">
                                    {information.error}
                                </div>
                            ) : information.haveMessage ? (
                                <div className="alert alert-success" role="alert">
                                    {information.message}
                                </div>
                            ) : (
                                ''
                            )
                        ) : (
                            ''
                        )}
                    </S.NavbarAlerts>
                    <S.NavbarGroup>
                        <S.NavbarSearch responsive={isMobile ? 'hide' : ''}>
                            <SearchBar onSearch={props.onSearch} />
                        </S.NavbarSearch>

                        <S.NavbarWelcomeText>
                            {t('dashboard.navbar.welcome')}
                            {!userDetails.loading ? (
                                ', ' + userDetails.firstName + ' ' + userDetails.lastName
                            ) : (
                                <div className="ml-2 mr-2 spinner-grow spinner-grow-sm text-dark" role="status"></div>
                            )}
                            !
                        </S.NavbarWelcomeText>
                        <S.NavbarIcons>
                            <S.NavbarItem aria-label="Language">
                                <Language />
                            </S.NavbarItem>

                            <S.NavbarItem aria-label="Settings" data-tooltip={t('dashboard.tooltips.setting')}>
                                <Link to="/profile">
                                    <img src={settingIcon} alt="setting icon" />
                                </Link>
                            </S.NavbarItem>
                            <S.NavbarItem
                                onClick={handleLogout}
                                aria-label="Logout"
                                data-tooltip={t('dashboard.tooltips.logout')}>
                                <img src={logoutIcon} alt="logout icon" />
                            </S.NavbarItem>
                        </S.NavbarIcons>
                    </S.NavbarGroup>
                </S.NavbarItemsWrapper>
            </S.NavbarWrapper>
            <S.NavbarSearch responsive={isMobile ? 'show' : 'hide'}>
                <SearchBar onSearch={props.onSearch} />
            </S.NavbarSearch>
        </div>
    );
};

export default DashboardNav;
