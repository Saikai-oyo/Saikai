import React, { useRef, useState } from 'react';
import { Card, Button, Form, Alert } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext';

import * as S from './style';

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
    <S.SignUpContainer>
      <Card>
        <Card.Body>
          <S.Header>Log in</S.Header>
          {error && <Alert variant='danger'>{error}</Alert>}

          <Form onSubmit={handleSubmit}>
            <Form.Group id='email'>
              <Form.Label>Email</Form.Label>
              <Form.Control type='email' ref={emailRef} required />
            </Form.Group>

            <Form.Group id='password'>
              <Form.Label>Password</Form.Label>
              <Form.Control type='Password' ref={passwordRef} required />
            </Form.Group>

            <Button disabled={loading} type='submit' className='w-100'>
              Log in
            </Button>
          </Form>
          <S.ForgotPassword>
            <Link to='/forgot-password'>Forgot Password?</Link>
          </S.ForgotPassword>
        </Card.Body>
      </Card>
      <S.Message>
        Need an account ? <Link to='/signup'>Sign Up</Link>
      </S.Message>
    </S.SignUpContainer>
  );
};

export default Login;
