import React, { useContext } from 'react';
import AuthInput from '../../Input/AuthInput';
import { MessagesContext } from '../../../contexts/MessagesContext';
import { useAuth } from '../../../contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom';
import logo from '../../../assets/logos/logo.svg';

import * as S from './style';

const UpdateProfile = () => {
  const { information, setInformation } = useContext(MessagesContext);
  const { updatePassword, currentUser } = useAuth();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentUser.email === 'demo@saikai.com') {
      setInformation({
        error: 'Can not update Demo password! 😉',
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

    if (e.target[0].value !== e.target[1].value) {
      setInformation({
        error: 'Passwords do not match!',
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

    if (!e.target[0].value || !e.target[1].value) {
      setInformation({
        error: 'Must fill password!',
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
      await updatePassword(e.target[0].value);
      history.push('/profile');
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
        <S.UpdatePassContainer>
          <div className='card-header-pills'>
            <Link to='/profile'>
              <S.GoBack></S.GoBack>
            </Link>
          </div>
          <S.Header>Update Password</S.Header>
          {information.hasError && (
            <div className='alert alert-danger' role='alert'>
              {information.error}
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <S.InputsWrapper>
              <S.HiddenLabel htmlFor='password'>Password</S.HiddenLabel>
              <AuthInput
                type='password'
                placeholder='New Password'
                name='password'
              />

              <S.HiddenLabel htmlFor='confirmPassword'>
                Confirm Password
              </S.HiddenLabel>
              <AuthInput
                type='password'
                placeholder='Confirm New Password'
                name='confirmPassword'
              />
            </S.InputsWrapper>
            <S.Update type='submit'>Update</S.Update>

            <S.Cancel>
              <Link to='/profile'>Cancel</Link>
            </S.Cancel>
          </form>
          <S.FooterWrapper></S.FooterWrapper>
        </S.UpdatePassContainer>
      </S.Wrapper>
    </div>
  );
};

export default UpdateProfile;
