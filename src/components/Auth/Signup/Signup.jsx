import React, { useRef, useState } from 'react';
import { useAuth } from '../../../contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom';

const Signup = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Passwords do not match');
    }

    try {
      setError('');
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push('/profile');
    } catch {
      setError('Failed to create an account');
    }

    setLoading(false);
  }

  return (
    <>
      <div className='card'>
        <div className='card-body'>
          <h2 className='text-center mb-3'>Sing Up</h2>
          {error && (
            <div class='alert alert-danger' role='alert'>
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className='form-group' id='email'>
              <label htmlFor='email'>Email</label>
              <input
                className='form-control'
                type='email'
                ref={emailRef}
                required
              />
            </div>

            <div className='form-group' id='password'>
              <label htmlFor='password'>Password</label>
              <input
                className='form-control'
                type='Password'
                ref={passwordRef}
                required
              />
            </div>

            <div className='form-group' id='password-confirm'>
              <label htmlFor='password-confirm'>Password Confirmation</label>
              <input
                className='form-control'
                type='password'
                ref={passwordConfirmRef}
                required
              />
            </div>

            <button
              disabled={loading}
              type='submit'
              className='w-100 btn btn-primary'
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
      <div className='w-100 text-center mt-1'>
        Already have an account? <Link to='/login'>Log in</Link>
      </div>
    </>
  );
};

export default Signup;
