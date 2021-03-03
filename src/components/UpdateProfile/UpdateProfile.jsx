import React, { useRef, useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { useAuth } from '../../contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom';

import * as S from './style';

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
      <Card>
        <Card.Body>
          <S.Header>Update Profile</S.Header>
          {error && <Alert variant='danger'>{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id='password'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                ref={passwordRef}
                placeholder='New password here..'
              />
            </Form.Group>
            <Form.Group id='password-confirm'>
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control
                type='password'
                ref={passwordConfirmRef}
                placeholder='New password here..'
              />
            </Form.Group>
            <Button disabled={loading} className='w-100' type='submit'>
              Update
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <S.Cancel>
        <Link to='/profile'>Cancel</Link>
      </S.Cancel>
    </>
  );
};

export default UpdateProfile;
