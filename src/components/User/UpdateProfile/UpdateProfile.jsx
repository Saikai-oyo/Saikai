import React, { useContext } from 'react';
import AuthInput from '../../Input/AuthInput';
import { MessagesContext } from '../../../contexts/MessagesContext';
import { useAuth } from '../../../contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom';
import GeneralNav from '../../Navbar/GeneralNav/GeneralNav';
import BigError from '../../Errors/BigError';
import { useTranslation } from 'react-i18next';

import * as S from './style';

const UpdateProfile = () => {
    const { t } = useTranslation();
    const { information, setInformation } = useContext(MessagesContext);
    const { updatePassword, currentUser } = useAuth();
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (currentUser.email === 'demo@saikai.com') {
            setInformation({
                errorCode: 0,
                error: t('errors.resetDemo'),
                hasError: true,
            });
            return setTimeout(() => {
                setInformation({
                    errorCode: null,
                    error: '',
                    hasError: false,
                });
            }, 2500);
        }

        if (e.target[0].value !== e.target[1].value) {
            setInformation({
                errorCode: 0,
                error: t('updatePassword.passwordDoNotMatch'),
                hasError: true,
            });
            return setTimeout(() => {
                setInformation({
                    errorCode: null,
                    error: '',
                    hasError: false,
                });
            }, 7000);
        }

        if (!e.target[0].value || !e.target[1].value) {
            setInformation({
                errorCode: 0,
                error: t('updatePassword.errors.fillPassword'),
                hasError: true,
            });

            return setTimeout(() => {
                setInformation({
                    errorCode: null,
                    error: '',
                    hasError: false,
                });
            }, 7000);
        }

        try {
            await updatePassword(e.target[0].value);
            history.push('/profile');
        } catch (error) {
            setInformation({
                errorCode: 0,
                error: error.message,
                hasError: true,
            });
            console.error(error);
            setTimeout(() => {
                setInformation({
                    errorCode: null,
                    error: '',
                    hasError: false,
                });
            }, 7000);
        }
    };

    return (
        <div>
            <GeneralNav path="profile" />
            <S.Wrapper>
                <S.UpdatePassContainer>
                    <div className="card-header-pills">
                        <Link to="/profile">
                            <S.GoBack />
                        </Link>
                    </div>
                    <S.Header>{t('updatePassword.title')}</S.Header>
                    <BigError show={information.errorCode === 0 && information.hasError}>{information.error}</BigError>
                    <form onSubmit={handleSubmit}>
                        <S.InputsWrapper>
                            <S.HiddenLabel htmlFor="password">{t('password')}</S.HiddenLabel>
                            <AuthInput type="password" placeholder={t('updatePassword.newPassword')} name="password" />

                            <S.HiddenLabel htmlFor="confirmNewPassword">
                                {t('updatePassword.confirmNewPassword')}
                            </S.HiddenLabel>
                            <AuthInput
                                type="password"
                                placeholder={t('updatePassword.confirmNewPassword')}
                                name="confirmPassword"
                            />
                        </S.InputsWrapper>
                        <S.ButtonsWrapper>
                            <S.Update type="submit">{t('updatePassword.update')}</S.Update>

                            <Link to="/profile">
                                <S.Cancel type="button">{t('updatePassword.cancel')}</S.Cancel>
                            </Link>
                        </S.ButtonsWrapper>
                    </form>
                    <S.FooterWrapper />
                </S.UpdatePassContainer>
            </S.Wrapper>
        </div>
    );
};

export default UpdateProfile;
