import React, { useRef, useState } from 'react';
import { useAuth } from '../../../contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom';

const UpdateProfile = () => {
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { updatePassword } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Passwords do not match');
    }
    if (!passwordRef.current.value || !passwordConfirmRef.current.value) {
      return setError('Must fill password');
    }

    try {
      setLoading(true);
      setError('');
      updatePassword(passwordRef.current.value);
      history.push('/profile');
    } catch (error) {
      setError('Failed to update account');
    }
    setLoading(false);
  };

  return (
    <>
      <div className='card'>
        <div className='card-body'>
          <h2 className='text-center mb-3'>Update Profile</h2>
          {error && (
            <div class='alert alert-danger' role='alert'>
              {error}
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className='form-group' id='password'>
              <label for='password'>Password</label>
              <div
                className='form-control'
                type='password'
                ref={passwordRef}
                placeholder='New password here..'
              />
            </div>
            <div className='form-group' id='password-confirm'>
              <label for='password-confirm'>Password Confirmation</label>
              <div
                className='form-control'
                type='password'
                ref={passwordConfirmRef}
                placeholder='New password here..'
              />
            </div>
            <button
              disabled={loading}
              className='w-100 btn btn-primary'
              type='submit'
            >
              Update
            </button>
          </form>
        </div>
      </div>
      <div className='w-100 text-center mt-1'>
        <Link to='/profile'>Cancel</Link>
      </div>
    </>
  );
};

export default UpdateProfile;
