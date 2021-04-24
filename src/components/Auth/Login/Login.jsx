import React, { useContext } from 'react';
import Input from '../Input/Input';
import { MessagesContext } from '../../../contexts/MessagesContext';
import { useAuth } from '../../../contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom';
import Footer from '../../Footer/Footer';
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
        error: error.message,
        hasError: true,
      });
      console.error(error);
      setTimeout(() => {
        setInformation({
          ...information,
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
        <S.LoginContainer>
          <S.Header>Login</S.Header>
          {information.hasError && (
            <div className='alert alert-danger' role='alert'>
              {information.error}
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <S.InputsWrapper>
              <S.HiddenLabel htmlFor='email'>Email</S.HiddenLabel>
              <Input type='text' placeholder='Your Email' name='email' />

              <S.HiddenLabel htmlFor='password'>Password</S.HiddenLabel>
              <Input
                type='password'
                placeholder='Your Password'
                name='password'
              />
            </S.InputsWrapper>
            <S.LogIn type='submit'>Log In</S.LogIn>
            <S.ForgotPassword>
              <Link to='/forgot-password'>Forgot Password?</Link>
            </S.ForgotPassword>
            <S.NeedAccount>
              Need an account ? <Link to='/signup'>Sign Up</Link>
            </S.NeedAccount>
          </form>
          <S.FooterWrapper>
            <Footer />
          </S.FooterWrapper>
        </S.LoginContainer>
      </S.Wrapper>
    </div>
  );
};

export default Login;
