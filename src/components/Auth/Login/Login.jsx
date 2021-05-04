import React, { useContext } from 'react';
import Input from '../Input/Input';
import { MessagesContext } from '../../../contexts/MessagesContext';
import { useAuth } from '../../../contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom';
import logo from '../../../assets/logos/logo.svg';

import * as S from './style';

const Login = () => {
  const { information, setInformation } = useContext(MessagesContext);
  const { login } = useAuth();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(e.target[0].value, e.target[1].value);
      history.push('/');
    } catch (error) {
      setInformation({
        error:
          error.code === 'auth/invalid-email'
            ? 'Oops! Wrong email format.'
            : error.code === 'auth/wrong-password' ||
              error.code === 'auth/user-not-found'
            ? 'Oops! Wrong email or password.'
            : 'Something went wrong!',
        hasError: true,
      });
      setTimeout(() => {
        setInformation({
          ...information,
          error: '',
          hasError: false,
        });
      }, 3500);
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
        <S.LoginContainer>
          <S.Header>Welcome!</S.Header>
          <S.Subtitle>Sign in to your account</S.Subtitle>
          {information.hasError && (
            <div className='alert alert-danger text-center' role='alert'>
              {information.error}
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <S.InputsWrapper>
              <S.HiddenLabel htmlFor='email'>Email</S.HiddenLabel>
              <Input type='text' placeholder='Email' name='email' />

              <S.HiddenLabel htmlFor='password'>Password</S.HiddenLabel>
              <Input type='password' placeholder='Password' name='password' />
            </S.InputsWrapper>
            <S.LogIn type='submit'>Log in</S.LogIn>
            <S.ForgotPassword>
              <Link to='/forgot-password'>Forgot password?</Link>
            </S.ForgotPassword>
            <S.NeedAccount>
              Need an account? <Link to='/signup'>Sign up</Link>
            </S.NeedAccount>
          </form>
        </S.LoginContainer>
      </S.Wrapper>
    </div>
  );
};

export default Login;
