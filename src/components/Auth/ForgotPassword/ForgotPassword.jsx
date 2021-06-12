import React, { useContext, useEffect } from 'react';
import AuthInput from '../../Input/AuthInput';
import { MessagesContext } from '../../../contexts/MessagesContext';
import { useAuth } from '../../../contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom';
import GeneralNav from '../../Navbar/GeneralNav/GeneralNav';
import BigError from '../../Errors/BigError';
import { useTranslation } from 'react-i18next';

import * as S from './style';

const ForgotPassword = () => {
    const { t } = useTranslation();
    const { information, setInformation } = useContext(MessagesContext);
    const { resetPassword } = useAuth();
    const history = useHistory();

    useEffect(() => {
        document.getElementById('footerElement').classList.add('pass-reset');
        return () => document.getElementById('footerElement').classList.remove('pass-reset');
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (e.target[0].value === 'demo@saikai.com') {
            setInformation({
                errorCode: 0,
                error: t('errors.resetDemo'),
                hasError: true,
            });
            return setTimeout(() => {
                setInformation({
                    errorCode: null,
                    error: '',
                    hasError: false,
                });
            }, 5000);
        }

        try {
            await resetPassword(e.target[0].value);
            setInformation({
                message: t('errors.resetSent'),
                hasMessage: true,
            });
            history.push('/login');
        } catch (error) {
            setInformation({
                errorCode: 0,
                error:
                    error.code === 'auth/invalid-email'
                        ? t('errors.emailFormat')
                        : error.code === 'auth/user-not-found'
                        ? t('errors.emailOrPassword')
                        : t('errors.general'),
                hasError: true,
            });
            console.error(error);
            setTimeout(() => {
                setInformation({
                    message: '',
                    hasMessage: false,
                    error: '',
                    hasError: false,
                });
            }, 7000);
        }
    };

    return (
        <div>
            <GeneralNav display="hide" />
            <S.Wrapper>
                <S.ResetPassContainer>
                    <S.Header>{t('forgotPassword.title')}</S.Header>
                    <BigError show={information.errorCode === 0 && information.hasError}>{information.error}</BigError>
                    <form onSubmit={handleSubmit}>
                        <S.InputsWrapper>
                            <S.HiddenLabel htmlFor="email">{t('email')}</S.HiddenLabel>
                            <AuthInput type="text" placeholder={t('email')} name="email" />
                        </S.InputsWrapper>

                        <S.ResetPassword type="submit">{t('forgotPassword.title')}</S.ResetPassword>

                        <S.NeedAccount>
                            {t('needAccount')}{' '}
                            <Link
                                to="/signup"
                                onClick={() =>
                                    setInformation({
                                        errorCode: null,
                                        error: '',
                                        hasError: false,
                                    })
                                }>
                                {t('signUp')}
                            </Link>
                        </S.NeedAccount>
                        <S.HaveAccount>
                            {t('forgotPassword.rememberPassword')}{' '}
                            <Link
                                to="/login"
                                onClick={() =>
                                    setInformation({
                                        errorCode: null,
                                        error: '',
                                        hasError: false,
                                    })
                                }>
                                {t('forgotPassword.logIn')}
                            </Link>
                        </S.HaveAccount>
                    </form>
                </S.ResetPassContainer>
            </S.Wrapper>
        </div>
    );
};

export default ForgotPassword;
