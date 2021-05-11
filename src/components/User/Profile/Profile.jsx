import React, { useContext } from 'react';
import { MessagesContext } from '../../../contexts/MessagesContext';
import { useAuth } from '../../../contexts/AuthContext';
import { useHistory, Link } from 'react-router-dom';
import logo from '../../../assets/logos/logo.svg';
import { UserDetailsContext } from '../../../contexts/UserDetailsContext';

import * as S from './style';

const Profile = () => {
  const { information, setInformation } = useContext(MessagesContext);
  const { logout, currentUser } = useAuth();
  const history = useHistory();
  const { userDetails } = useContext(UserDetailsContext);

  const handleLogout = async () => {
    try {
      await logout();
      history.push('/login');
    } catch (error) {
      setInformation({
        error: 'Failed to log out',
        haveError: true,
      });
      console.error(error.message);
    }
    setTimeout(() => {
      setInformation({ hasError: false });
    }, 2500);
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
        <S.ProfileContainer>
          <div className='card-header-pills'>
            <Link to='/'>
              <S.GoBack></S.GoBack>
            </Link>
          </div>
          <S.Header>Profile</S.Header>
          {information.hasError && (
            <div className='alert alert-danger' role='alert'>
              {information.error}
            </div>
          )}
          <S.DetailsWrapper>
            <div>
              <b>Email:</b> <S.EmailText>{currentUser.email}</S.EmailText>
            </div>
            <div>
              <b>Full Name:</b>
              <S.EmailText>{` ${userDetails.firstName} ${userDetails.lastName}`}</S.EmailText>
            </div>
          </S.DetailsWrapper>
          <S.Update>
            <Link to='/update-profile'>Update Password</Link>
          </S.Update>

          <S.Logout onClick={handleLogout}>Log Out</S.Logout>
          <S.FooterWrapper></S.FooterWrapper>
        </S.ProfileContainer>
      </S.Wrapper>
    </div>
  );
};

export default Profile;
