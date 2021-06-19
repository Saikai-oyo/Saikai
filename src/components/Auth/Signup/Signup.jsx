import React, { useContext, useEffect } from 'react';
import AuthInput from '../../Input/AuthInput';
import { MessagesContext } from '../../../contexts/MessagesContext';
import { useAuth } from '../../../contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom';
import GeneralNav from '../../Navbar/GeneralNav/GeneralNav';
import BigError from '../../Errors/BigError';
import { useTranslation } from 'react-i18next';

import * as S from './style';

const Signup = () => {
    const { t } = useTranslation();
    const { information, setInformation } = useContext(MessagesContext);
    const { signup } = useAuth();
    const history = useHistory();

    useEffect(() => {
        document.getElementById('footerElement').classList.add('pass-reset');
        return () => document.getElementById('footerElement').classList.remove('pass-reset');
    }, []);

    const validation = (e) => {
        let isValid = true;
        let error = t('signUpPage.errors.oops');
        if (e.target[0].value === '') {
            error += t('signUpPage.errors.empty.email');
            isValid = false;
        }
        if (e.target[1].value === '') {
            error += t('signUpPage.errors.empty.firstName');
            isValid = false;
        }
        if (e.target[2].value === '') {
            error += t('signUpPage.errors.empty.lastName');
            isValid = false;
        }

        if (e.target[3].value === '' || e.target[4].value === '') {
            error += t('signUpPage.errors.empty.password');
            isValid = false;
        } else if (e.target[3].value !== e.target[4].value) {
            error += t('signUpPage.errors.passwordDontMatch');
            isValid = false;
        } else {
            const regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@%^&*-_.]).{8,15}$/;
            if (!e.target[3].value.match(regex)) {
                error += t('signUpPage.errors.passwordContain');
                isValid = false;
            }
        }
        if (!isValid)
            setInformation({
                errorCode: 0,
                error: error,
                hasError: true,
            });

        return isValid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        let isValid = validation(e);

        if (isValid) {
            try {
                await signup({
                    email: e.target[0].value,
                    firstName: e.target[1].value,
                    lastName: e.target[2].value,
                    password: e.target[3].value,
                });
                history.push('/');
            } catch (error) {
                setInformation({
                    errorCode: 0,
                    error:
                        error.code === 'auth/email-already-in-use'
                            ? t('signUpPage.errors.exists')
                            : error.code === 'auth/invalid-email'
                            ? t('errors.emailFormat')
                            : error.code === 'auth/weak-password'
                            ? t('signUpPage.errors.passwordContain')
                            : t('errors.general'),
                    hasError: true,
                });
                console.error(error);
            }
        }
        setTimeout(() => {
            setInformation({
                errorCode: null,
                error: '',
                hasError: false,
            });
        }, 7000);
    };

    return (
        <div>
            <GeneralNav display="hide" />
            <S.Wrapper>
                <S.SignupContainer>
                    <S.Header>{t('signUpPage.title')}</S.Header>
                    <S.Subtitle>{t('signUpPage.subtitle')}</S.Subtitle>
                    <div>
                        <BigError show={information.errorCode === 0 && information.hasError}>
                            {information.error}
                        </BigError>
                    </div>
                    <S.Form onSubmit={handleSubmit}>
                        <S.InputsWrapper>
                            <S.HiddenLabel htmlFor="email">{t('email')}</S.HiddenLabel>
                            <AuthInput type="text" placeholder={t('email')} name="email" />
                            <S.HiddenLabel htmlFor="firstName">{t('signUpPage.firstName')}</S.HiddenLabel>
                            <AuthInput type="text" placeholder={t('signUpPage.firstName')} name="firstName" />
                            <S.HiddenLabel htmlFor="lastName">{t('signUpPage.lastName')}</S.HiddenLabel>
                            <AuthInput type="text" placeholder={t('signUpPage.lastName')} name="lastName" />
                            <S.HiddenLabel htmlFor="password">{t('password')}</S.HiddenLabel>
                            <AuthInput type="password" placeholder={t('signUpPage.yourPassword')} name="password" />

                            <S.HiddenLabel htmlFor="confirmPassword">{t('signUpPage.confirmPassword')}</S.HiddenLabel>
                            <AuthInput
                                type="password"
                                placeholder={t('signUpPage.confirmPassword')}
                                name="confirmPassword"
                            />
                            <S.Instructions>
                                <p
                                    style={{
                                        fontSize: '10px',
                                        width: 'max-content',
                                    }}>
                                    * {t('signUpPage.contain.passwordMustContain')}:
                                    <br />- {t('signUpPage.contain.letters')}
                                    <br />- {t('signUpPage.contain.characters')}
                                    <br />- {t('signUpPage.contain.special')}
                                </p>
                            </S.Instructions>
                        </S.InputsWrapper>
                        <S.SignUp type="submit">{t('signUp')}</S.SignUp>

                        <S.HaveAccount>
                            {t('signUpPage.haveAccount')}
                            <Link
                                to="/login"
                                onClick={() =>
                                    setInformation({
                                        errorCode: null,
                                        error: '',
                                        hasError: false,
                                    })
                                }>
                                {' '}
                                {t('signUpPage.logIn')}
                            </Link>
                        </S.HaveAccount>
                    </S.Form>
                </S.SignupContainer>
            </S.Wrapper>
        </div>
    );
};

export default Signup;
