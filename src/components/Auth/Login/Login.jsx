import React, { useContext } from 'react';
import AuthInput from '../../Input/AuthInput';
import { MessagesContext } from '../../../contexts/MessagesContext';
import { useAuth } from '../../../contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom';
import BigError from '../../Errors/BigError';
import { facebookLogin } from './FacebookLogin/facebookLogin';
import { googleLogin } from './GoogleLogin/googleLogin';
import * as S from './style';
import GeneralNav from '../../Navbar/GeneralNav/GeneralNav';

const Login = () => {
    const { information, setInformation } = useContext(MessagesContext);
    const { login } = useAuth();
    const history = useHistory();

    const handleSubmit = async (e) => {
        console.info('going to email login');
        e.preventDefault();
        if (e.target[0].value === '' || e.target[1].value === '') {
            setInformation({
                error: 'Fields cannot be empty',
                hasError: true,
            });
        } else {
            try {
                await login(e.target[0].value, e.target[1].value);
                history.push('/');
            } catch (error) {
                setInformation({
                    errorCode: error.code === 'auth/invalid-email' && 0,
                    error:
                        error.code === 'auth/invalid-email'
                            ? 'Oops! Wrong email format.'
                            : error.code === 'auth/wrong-password' || error.code === 'auth/user-not-found'
                            ? 'Oops! Wrong email or password.'
                            : 'Something went wrong!',
                    hasError: true,
                });
            }
        }
        setTimeout(() => {
            setInformation({
                ...information,
                errorCode: null,
                error: '',
                hasError: false,
            });
        }, 7000);
    };

    const handleClick = async (e) => {
        e.preventDefault();
        let buttonId = e.target.id;
        if (buttonId === 'google-login') {
            console.info('going to google login');
            googleLogin(history);
        }
        if (buttonId === 'facebook-login') {
            console.info('going to facebook login');
            facebookLogin(history);
        }
    };

    return (
        <div>
            <GeneralNav />
            <S.Wrapper>
                <S.LoginContainer>
                    <S.Header>Welcome!</S.Header>
                    <BigError show={information.hasError}>{information.error}</BigError>
                    <S.Subtitle>Log in to your account</S.Subtitle>
                    <form onSubmit={handleSubmit}>
                        <S.InputsWrapper>
                            <S.HiddenLabel htmlFor="email">Email</S.HiddenLabel>
                            <AuthInput type="text" placeholder="Email" name="email" />
                            <S.HiddenLabel htmlFor="password">Password</S.HiddenLabel>
                            <AuthInput type="password" placeholder="Password" name="password" />
                        </S.InputsWrapper>
                        <S.LogIn type="submit">Log in</S.LogIn>
                        <S.LoginsWrappers>
                            <S.LoginWith
                                login="facebook"
                                id="facebook-login"
                                type="button"
                                onClick={(e) => handleClick(e)}>
                                Sign in with
                            </S.LoginWith>
                            <S.LoginWith login="google" id="google-login" type="button" onClick={(e) => handleClick(e)}>
                                Sign in with
                            </S.LoginWith>
                        </S.LoginsWrappers>
                        <S.ForgotPassword>
                            <Link
                                to="/forgot-password"
                                onClick={() =>
                                    setInformation({
                                        ...information,
                                        errorCode: null,
                                        error: '',
                                        hasError: false,
                                    })
                                }>
                                Forgot password?
                            </Link>
                        </S.ForgotPassword>
                        <S.NeedAccount>
                            Need an account?
                            <Link
                                to="/signup"
                                onClick={() =>
                                    setInformation({
                                        ...information,
                                        errorCode: null,
                                        error: '',
                                        hasError: false,
                                    })
                                }>
                                Sign up
                            </Link>
                        </S.NeedAccount>
                    </form>
                </S.LoginContainer>
            </S.Wrapper>
        </div>
    );
};

export default Login;
