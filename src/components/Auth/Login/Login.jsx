import React, { useContext } from 'react';
import AuthInput from '../../Input/AuthInput';
import { MessagesContext } from '../../../contexts/MessagesContext';
import { useAuth } from '../../../contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom';
import BigError from '../../Errors/BigError';
import { facebookLogin } from './FacebookLogin/facebookLogin';
import { googleLogin } from './GoogleLogin/googleLogin';
import * as S from './style';
import GeneralNav from '../../Navbar/GeneralNav/GeneralNav';

import { useTranslation } from 'react-i18next';

const Login = () => {
    const { t } = useTranslation();
    const { information, setInformation } = useContext(MessagesContext);
    const { login } = useAuth();
    const history = useHistory();

    const handleSubmit = async (e) => {
        console.info('going to email login');
        e.preventDefault();
        if (e.target[0].value === '' || e.target[1].value === '') {
            setInformation({
                error: t('errors.empty'),
                hasError: true,
            });
        } else {
            try {
                await login(e.target[0].value, e.target[1].value);
                history.push('/');
            } catch (error) {
                setInformation({
                    errorCode: error.code === 'auth/invalid-email' && 0,
                    error:
                        error.code === 'auth/invalid-email'
                            ? t('errors.emailFormat')
                            : error.code === 'auth/wrong-password' || error.code === 'auth/user-not-found'
                            ? t('errors.emailOrPassword')
                            : t('errors.general'),
                    hasError: true,
                });
            }
        }
        setTimeout(() => {
            setInformation({
                ...information,
                errorCode: null,
                error: '',
                hasError: false,
            });
        }, 7000);
    };

    const handleClick = async (e) => {
        e.preventDefault();
        let buttonId = e.target.id;
        if (buttonId === 'google-login') {
            console.info('going to google login');
            googleLogin(history);
        }
        if (buttonId === 'facebook-login') {
            console.info('going to facebook login');
            facebookLogin(history);
        }
    };

    return (
        <div>
            <GeneralNav display="hide" />
            <S.Wrapper>
                <S.LoginContainer>
                    <S.Header>{t('login.title')}</S.Header>
                    <BigError show={information.hasError}>{information.error}</BigError>
                    <S.Subtitle>{t('login.subtitle')}</S.Subtitle>
                    <form onSubmit={handleSubmit}>
                        <S.InputsWrapper>
                            <S.HiddenLabel htmlFor="email">{t('email')}</S.HiddenLabel>
                            <AuthInput type="text" placeholder={t('email')} name="email" />
                            <S.HiddenLabel htmlFor="password">{t('password')}</S.HiddenLabel>
                            <AuthInput type="password" placeholder={t('password')} name="password" />
                        </S.InputsWrapper>
                        <S.LogIn type="submit">{t('login.login')}</S.LogIn>
                        <S.LoginsWrappers>
                            <S.LoginWith
                                login="facebook"
                                id="facebook-login"
                                type="button"
                                onClick={(e) => handleClick(e)}>
                                {t('login.signInWith')}
                            </S.LoginWith>
                            <S.LoginWith login="google" id="google-login" type="button" onClick={(e) => handleClick(e)}>
                                {t('login.signInWith')}
                            </S.LoginWith>
                        </S.LoginsWrappers>
                        <S.ForgotPassword>
                            <Link
                                to="/forgot-password"
                                onClick={() =>
                                    setInformation({
                                        ...information,
                                        errorCode: null,
                                        error: '',
                                        hasError: false,
                                    })
                                }>
                                {t('login.forgotPassword')}
                            </Link>
                        </S.ForgotPassword>
                        <S.NeedAccount>
                            {t('needAccount')}
                            <Link
                                to="/signup"
                                onClick={() =>
                                    setInformation({
                                        ...information,
                                        errorCode: null,
                                        error: '',
                                        hasError: false,
                                    })
                                }>
                                {' '}
                                {t('signUp')}
                            </Link>
                        </S.NeedAccount>
                    </form>
                </S.LoginContainer>
            </S.Wrapper>
        </div>
    );
};

export default Login;
