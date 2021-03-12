import React, { useRef, useState } from 'react';
import { useAuth } from '../../../contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom';
import { app } from '../../../config/firebase';

const Signup = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const { signup } = useAuth();

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Passwords do not match');
    }

    try {
      setError('');
      setLoading(true);
      await signup({
        email: emailRef.current.value,
        password: passwordRef.current.value,
        firstName: firstNameRef.current.value,
        lastName: lastNameRef.current.value,
      });
      history.push('/');
    } catch (error) {
      setError(error.message);
      console.error(error);
    }

    setLoading(false);
  };

  return (
    <>
      <div className='card'>
        <div className='card-body'>
          <h2 className='text-center mb-3'>Sing Up</h2>
          {error && (
            <div className='alert alert-danger' role='alert'>
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
            <div className='form-group' id='firstName'>
              <label htmlFor='firstName'>First Name</label>
              <input
                className='form-control'
                type='text'
                ref={firstNameRef}
                required
              />
            </div>
            <div className='form-group' id='lastName'>
              <label htmlFor='lastName'>Last Name</label>
              <input
                className='form-control'
                type='text'
                ref={lastNameRef}
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
              className='w-100 btn btn-success'
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
