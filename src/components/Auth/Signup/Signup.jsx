import React, { useContext } from 'react';
import AuthInput from '../../Input/AuthInput';
import { MessagesContext } from '../../../contexts/MessagesContext';
import { useAuth } from '../../../contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom';
import logo from '../../../assets/logos/logo.svg';
import BigError from '../../Errors/BigError';
import * as S from './style';

const Signup = () => {
  const { information, setInformation } = useContext(MessagesContext);
  const { signup } = useAuth();
  const history = useHistory();

  const validation = (e) => {
    let isValid = true;
    let error = 'Oops!';
    if (e.target[0].value === '') {
      error += '  Email is empty.';
      isValid = false;
    }
    if (e.target[1].value === '') {
      error += '  First Name is empty.';
      isValid = false;
    }
    if (e.target[2].value === '') {
      error += '  Last Name is empty.';
      isValid = false;
    }

    if (e.target[3].value === '' || e.target[4].value === '') {
      error += '  Passwords is empty.';
      isValid = false;
    } else if (e.target[3].value !== e.target[4].value) {
      error += '  Passwords don’t match.';
      isValid = false;
    } else {
      if (!e.target[3].value.match(process.env.REACT_APP_REGEX_PASSWORD)) {
        error +=
          '  Password must have 8 to 15 characters, which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character.';
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
              ? 'Oops! Email already exists. '
              : error.code === 'auth/invalid-email'
              ? 'Oops! Wrong email format.'
              : error.code === 'auth/weak-password'
              ? 'Password must have 8 to 15 characters, which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character.'
              : 'Something went wrong!',
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
        <S.SignupContainer>
          <S.Header>Join Saikai</S.Header>
          <S.Subtitle>Create an account to manage your way to work</S.Subtitle>
          <S.ErrorWrapper>
            <BigError
              show={information.errorCode === 0 && information.hasError}
            >
              {information.error}
            </BigError>
          </S.ErrorWrapper>
          <form onSubmit={handleSubmit}>
            <S.InputsWrapper>
              <S.HiddenLabel htmlFor='email'>Email</S.HiddenLabel>
              <AuthInput type='text' placeholder='Email' name='email' />

              <S.HiddenLabel htmlFor='firstName'>First Name</S.HiddenLabel>
              <AuthInput
                type='text'
                placeholder='First Name'
                name='firstName'
              />

              <S.HiddenLabel htmlFor='lastName'>Last Name</S.HiddenLabel>
              <AuthInput type='text' placeholder='Last Name' name='lastName' />

              <S.HiddenLabel htmlFor='password'>Password</S.HiddenLabel>
              <AuthInput
                type='password'
                placeholder='Your Password'
                name='password'
              />

              <S.HiddenLabel htmlFor='confirmPassword'>
                Confirm Password
              </S.HiddenLabel>
              <AuthInput
                type='password'
                placeholder='Confirm Password'
                name='confirmPassword'
              />
            </S.InputsWrapper>
            <S.SignUp type='submit'>Sign Up</S.SignUp>

            <S.HaveAccount>
              Already have an account?
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
        </S.SignupContainer>
      </S.Wrapper>
    </div>
  );
};

export default Signup;
