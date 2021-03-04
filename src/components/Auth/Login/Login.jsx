import React, { useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext';

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const { login } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push('/profile');
    } catch (error) {
      setError('Failed to sign in');
    }
    setLoading(false);
  };

  return (
    <div>
      <div className='card'>
        <div className='card-body'>
          <h2 className='text-center mb-3'>Log in</h2>
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

            <button
              disabled={loading}
              type='submit'
              className='w-100 btn btn-primary'
            >
              Log in
            </button>
          </form>
          <div className='w-100 text-center mt-2'>
            <Link to='/forgot-password'>Forgot Password?</Link>
          </div>
        </div>
      </div>
      <div className='w-100 text-center mt-1'>
        Need an account ? <Link to='/signup'>Sign Up</Link>
      </div>
    </div>
  );
};

export default Login;
