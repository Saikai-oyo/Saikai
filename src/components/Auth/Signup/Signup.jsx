import React, { useContext } from 'react';
import Input from '../Input/Input';
import { MessagesContext } from '../../../contexts/MessagesContext';
import { useAuth } from '../../../contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom';
import logo from '../../../assets/logos/logo.svg';
import SmallError from '../../Errors/SmallError';
import BigError from '../../Errors/BigError';
import * as S from './style';

const Signup = () => {
  const { information, setInformation } = useContext(MessagesContext);
  const { signup } = useAuth();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let isValid = true;

    if (e.target[3].value !== e.target[4].value) {
      setInformation({
        errorCode: 4,
        error: 'Oops! Passwords don’t match.',
        hasError: true,
      });
      isValid = false;
    }

    if (e.target[1].value === '') {
      setInformation({
        errorCode: 1,
        error: 'Oops! Must fill first name.',
        hasError: true,
      });
      isValid = false;
    }
    if (e.target[2].value === '') {
      setInformation({
        errorCode: 2,
        error: 'Oops! Must fill last name.',
        hasError: true,
      });
      isValid = false;
    }
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
          errorCode:
            error.code === 'auth/email-already-in-use' ||
            error.code === 'auth/invalid-email'
              ? 0
              : 3,
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
        ...information,
        errorCode: null,
        error: '',
        hasError: false,
      });
    }, 352200);
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
          {information.errorCode === 3 && (
            <BigError show={information.hasError}>{information.error}</BigError>
          )}
          <form onSubmit={handleSubmit}>
            <S.InputsWrapper>
              <S.HiddenLabel htmlFor='email'>Email</S.HiddenLabel>
              <Input type='text' placeholder='Email' name='email' />
              <SmallError>
                {information.hasError &&
                  information.errorCode === 0 &&
                  information.error}
              </SmallError>

              <S.HiddenLabel htmlFor='firstName'>First Name</S.HiddenLabel>
              <Input type='text' placeholder='First Name' name='firstName' />
              <SmallError>
                {information.hasError &&
                  information.errorCode === 1 &&
                  information.error}
              </SmallError>

              <S.HiddenLabel htmlFor='lastName'>Last Name</S.HiddenLabel>
              <Input type='text' placeholder='Last Name' name='lastName' />
              <SmallError>
                {information.hasError &&
                  information.errorCode === 2 &&
                  information.error}
              </SmallError>

              <S.HiddenLabel htmlFor='password'>Password</S.HiddenLabel>
              <Input
                type='password'
                placeholder='Your Password'
                name='password'
              />
              <SmallError>
                {information.hasError &&
                  information.errorCode === 4 &&
                  information.error}
              </SmallError>

              <S.HiddenLabel htmlFor='confirmPassword'>
                Confirm Password
              </S.HiddenLabel>
              <Input
                type='password'
                placeholder='Confirm Password'
                name='confirmPassword'
              />
              <SmallError>
                {information.hasError &&
                  information.errorCode === 4 &&
                  information.error}
              </SmallError>
            </S.InputsWrapper>
            <S.SignUp type='submit'>Sign Up</S.SignUp>

            <S.HaveAccount>
              Already have an account?
              <Link
                to='/login'
                onClick={() =>
                  setInformation({
                    ...information,
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
