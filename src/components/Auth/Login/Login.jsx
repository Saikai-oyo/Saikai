import React, { useContext } from 'react';
import AuthInput from '../../Input/AuthInput';
import { MessagesContext } from '../../../contexts/MessagesContext';
import { useAuth } from '../../../contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom';
import logo from '../../../assets/logos/logo.svg';
import SmallError from '../../Errors/SmallError';
import BigError from '../../Errors/BigError';
import { googleIcon, facebookIcon } from '../../../assets/icons/';
import * as S from './style';

const Login = () => {
  const { information, setInformation } = useContext(MessagesContext);
  const { login } = useAuth();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (e.target[0].value === '' || e.target[1].value === '') {
      setInformation({
        error: 'Fields cannot be empty',
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
              ? 'Oops! Wrong email format.'
              : error.code === 'auth/wrong-password' ||
                error.code === 'auth/user-not-found'
              ? 'Oops! Wrong email or password.'
              : 'Something went wrong!',
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
    }, 3500);
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
          <BigError show={information.hasError}>{information.error}</BigError>
          <S.Subtitle>Log in to your account</S.Subtitle>
          <form onSubmit={handleSubmit}>
            <S.InputsWrapper>
              <S.HiddenLabel htmlFor='email'>Email</S.HiddenLabel>
              <AuthInput type='text' placeholder='Email' name='email' />
              <SmallError>
                {information.hasError &&
                  information.errorCode === 0 &&
                  information.error}
              </SmallError>
              <S.HiddenLabel htmlFor='password'>Password</S.HiddenLabel>
              <AuthInput
                type='password'
                placeholder='Password'
                name='password'
              />
            </S.InputsWrapper>
            <S.LogIn type='submit'>Log in</S.LogIn>
            <S.LoginsWrappers>
              <S.LoginWith login='facebook'>
                Sign in with{' '}
                <img
                  style={{ paddingLeft: '.5rem' }}
                  src={facebookIcon}
                  alt='FaceBook Icon'
                />
              </S.LoginWith>
              <S.LoginWith login='google'>
                Sign in with{' '}
                <img
                  style={{ paddingLeft: '.5rem' }}
                  src={googleIcon}
                  alt='GOOGLE Icon'
                />
              </S.LoginWith>
            </S.LoginsWrappers>
            <S.ForgotPassword>
              <Link
                to='/forgot-password'
                onClick={() =>
                  setInformation({
                    ...information,
                    errorCode: null,
                    error: '',
                    hasError: false,
                  })
                }
              >
                Forgot password?
              </Link>
            </S.ForgotPassword>
            <S.NeedAccount>
              Need an account?
              <Link
                to='/signup'
                onClick={() =>
                  setInformation({
                    ...information,
                    errorCode: null,
                    error: '',
                    hasError: false,
                  })
                }
              >
                Sign up
              </Link>
            </S.NeedAccount>
          </form>
        </S.LoginContainer>
      </S.Wrapper>
    </div>
  );
};

export default Login;
