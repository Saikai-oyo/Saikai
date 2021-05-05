import React, { useContext } from 'react';
import AuthInput from '../../Input/AuthInput';
import { MessagesContext } from '../../../contexts/MessagesContext';
import { useAuth } from '../../../contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom';
import logo from '../../../assets/logos/logo.svg';

import * as S from './style';

const ForgotPassword = () => {
  const { information, setInformation } = useContext(MessagesContext);
  const { resetPassword } = useAuth();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (e.target[0].value === 'demo@saikai.com') {
      setInformation({
        error: 'Can not reset Demo password! 😉',
        hasError: true,
      });
      return setTimeout(() => {
        setInformation({
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
      }, 2500);
    }
  };

  return (
    <div>
      <a
        className='navbar-brand'
        style={{ marginBottom: '34px' }}
        href='/Saikai/'
      >
        <img src={logo} width='265' height='80' alt='Saikai' />
      </a>
      <S.Wrapper>
        <S.ResetPassContainer>
          <S.Header>Reset Password</S.Header>
          {information.hasError && (
            <div className='alert alert-danger' role='alert'>
              {information.error}
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <S.InputsWrapper>
              <S.HiddenLabel htmlFor='email'>Email</S.HiddenLabel>
              <AuthInput type='text' placeholder='Email' name='email' />
            </S.InputsWrapper>

            <S.ResetPassword type='submit'>Reset Password</S.ResetPassword>

            <S.NeedAccount>
              Need an account ?{' '}
              <Link
                to='/signup'
                onClick={() =>
                  setInformation({
                    errorCode: null,
                    error: '',
                    hasError: false,
                  })
                }
              >
                Sign Up
              </Link>
            </S.NeedAccount>
            <S.HaveAccount>
              Remember the password?{' '}
              <Link
                to='/login'
                onClick={() =>
                  setInformation({
                    errorCode: null,
                    error: '',
                    hasError: false,
                  })
                }
              >
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
