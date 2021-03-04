import React, { useRef, useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { useAuth } from '../../../contexts/AuthContext';
import { Link } from 'react-router-dom';

import * as S from './style';

const ForgotPassword = () => {
  const emailRef = useRef();
  const { resetPassword } = useAuth();
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setMessage('');
      setError('');
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage('Check your inbox for further instructions');
    } catch {
      setError('Failed to reset password');
    }

    setLoading(false);
  };

  return (
    <>
      <Card>
        <Card.Body>
          <S.Header>Password Reset</S.Header>
          {error && <Alert variant='danger'>{error}</Alert>}
          {message && <Alert variant='success'>{message}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id='email'>
              <Form.Label>Email</Form.Label>
              <Form.Control type='email' ref={emailRef} required />
            </Form.Group>
            <Button disabled={loading} className='w-100' type='submit'>
              Reset Password
            </Button>
          </Form>
          <S.Login>
            <Link to='/login'>Login</Link>
          </S.Login>
        </Card.Body>
      </Card>
      <S.SignUp>
        Need an account? <Link to='/signup'>Sign Up</Link>
      </S.SignUp>
    </>
  );
};

export default ForgotPassword;
