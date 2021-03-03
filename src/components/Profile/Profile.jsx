import React, { useState } from 'react';
import { Card, Button, Alert } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import * as S from './style';

const Profile = () => {
  const [error, setError] = useState('');
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  const handleLogout = async () => {
    setError('');
    try {
      await logout();
      history.push('/login');
    } catch (error) {
      setError('Failed to log out.');
    }
  };

  return (
    <>
      <Card>
        <Card.Body>
          <S.Header>Profile</S.Header>
          {error && <Alert variant='danger'>{error}</Alert>}
          <strong>Email: </strong>
          {currentUser.email}

          <Link to='/update-profile' className='btn btn-primary w-100 mt-3'>
            Update Profile
          </Link>
        </Card.Body>
      </Card>

      <div className='w-100 text-center mt-2'>
        <Button variant='link' onClick={handleLogout}>
          Log Out
        </Button>
      </div>
    </>
  );
};

export default Profile;
