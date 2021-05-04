import React, { useContext } from 'react';
import Input from '../Input/Input';
import { MessagesContext } from '../../../contexts/MessagesContext';
import { useAuth } from '../../../contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom';
import logo from '../../../assets/logos/logo.svg';

import * as S from './style';

const Signup = () => {
  const { information, setInformation } = useContext(MessagesContext);
  const { signup } = useAuth();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (e.target[3].value !== e.target[4].value) {
      setInformation({
        error: 'Oops! Passwords don’t match.',
        hasError: true,
      });
      return setTimeout(() => {
        setInformation({
          ...information,
          error: '',
          hasError: false,
        });
      }, 2500);
    }

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
        error:
          error.code === 'auth/email-already-in-use'
            ? 'Oops! Email already exists. '
            : 'Something went wrong!',
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
        <S.SignupContainer>
          <S.Header>Join Saikai</S.Header>
          <S.Subtitle>Create an account to manage your way to work</S.Subtitle>
          {information.hasError && (
            <div className='alert alert-danger text-center' role='alert'>
              {information.error}
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <S.InputsWrapper>
              <S.HiddenLabel htmlFor='email'>Email</S.HiddenLabel>
              <Input type='text' placeholder='Email' name='email' />

              <S.HiddenLabel htmlFor='firstName'>First Name</S.HiddenLabel>
              <Input type='text' placeholder='First Name' name='firstName' />

              <S.HiddenLabel htmlFor='lastName'>Last Name</S.HiddenLabel>
              <Input type='text' placeholder='Last Name' name='lastName' />

              <S.HiddenLabel htmlFor='password'>Password</S.HiddenLabel>
              <Input
                type='password'
                placeholder='Your Password'
                name='password'
              />

              <S.HiddenLabel htmlFor='confirmPassword'>
                Confirm Password
              </S.HiddenLabel>
              <Input
                type='password'
                placeholder='Confirm Password'
                name='confirmPassword'
              />
            </S.InputsWrapper>
            <S.SignUp type='submit'>Sign Up</S.SignUp>

            <S.HaveAccount>
              Already have an account? <Link to='/login'>Log in</Link>
            </S.HaveAccount>
          </form>
        </S.SignupContainer>
      </S.Wrapper>
    </div>
  );
};

export default Signup;
