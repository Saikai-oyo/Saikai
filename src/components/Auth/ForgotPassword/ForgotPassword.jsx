import React, { useContext, useEffect } from 'react';
import AuthInput from '../../Input/AuthInput';
import { MessagesContext } from '../../../contexts/MessagesContext';
import { useAuth } from '../../../contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom';
import GeneralNav from '../../Navbar/GeneralNav/GeneralNav';
import BigError from '../../Errors/BigError';

import * as S from './style';

const ForgotPassword = () => {
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
                error: 'Can not reset Demo password! 😉',
                hasError: true,
            });
            return setTimeout(() => {
                setInformation({
                    errorCode: null,
                    error: '',
                    hasError: false,
                });
            }, 2500);
        }

        try {
            await resetPassword(e.target[0].value);
            setInformation({
                message: 'Check your inbox for further instructions.',
                hasMessage: true,
            });
            history.push('/login');
        } catch (error) {
            setInformation({
                errorCode: 0,
                error:
                    error.code === 'auth/invalid-email'
                        ? 'Oops! Wrong email format.'
                        : error.code === 'auth/user-not-found'
                        ? 'Oops! Wrong email or password.'
                        : 'Something went wrong!',
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
                    <S.Header>Reset Password</S.Header>
                    <BigError show={information.errorCode === 0 && information.hasError}>{information.error}</BigError>
                    <form onSubmit={handleSubmit}>
                        <S.InputsWrapper>
                            <S.HiddenLabel htmlFor="email">Email</S.HiddenLabel>
                            <AuthInput type="text" placeholder="Email" name="email" />
                        </S.InputsWrapper>

                        <S.ResetPassword type="submit">Reset Password</S.ResetPassword>

                        <S.NeedAccount>
                            Need an account?{' '}
                            <Link
                                to="/signup"
                                onClick={() =>
                                    setInformation({
                                        errorCode: null,
                                        error: '',
                                        hasError: false,
                                    })
                                }>
                                Sign Up
                            </Link>
                        </S.NeedAccount>
                        <S.HaveAccount>
                            Remember the password?{' '}
                            <Link
                                to="/login"
                                onClick={() =>
                                    setInformation({
                                        errorCode: null,
                                        error: '',
                                        hasError: false,
                                    })
                                }>
                                Log in
                            </Link>
                        </S.HaveAccount>
                    </form>
                </S.ResetPassContainer>
            </S.Wrapper>
        </div>
    );
};

export default ForgotPassword;
