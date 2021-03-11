import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext';

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
      <div className='card'>
        <div className='card-body'>
          <h2 className='text-center mb-3'>Profile</h2>
          {error && (
            <div className='alert alert-danger' role='alert'>
              {error}
            </div>
          )}
          <strong>Email: </strong>
          {currentUser.email}

          <Link to='/update-profile' className='btn btn-success w-100 mt-3'>
            Update Password
          </Link>
        </div>
      </div>

      <div className='w-100 text-center mb-1'>
        <button className='btn btn-link' onClick={handleLogout}>
          Log Out
        </button>
      </div>
    </>
  );
};

export default Profile;
