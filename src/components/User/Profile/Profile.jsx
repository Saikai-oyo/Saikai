import React, { useContext } from 'react';
import { MessagesContext } from '../../../contexts/MessagesContext';
import { useAuth } from '../../../contexts/AuthContext';
import { useHistory, Link } from 'react-router-dom';
import { UserDetailsContext } from '../../../contexts/UserDetailsContext';
import GeneralNav from '../../Navbar/GeneralNav/GeneralNav';
import { useTranslation } from 'react-i18next';

import * as S from './style';

const Profile = () => {
    const { t } = useTranslation();
    const { information, setInformation } = useContext(MessagesContext);
    const { logout, currentUser } = useAuth();
    const history = useHistory();
    const { userDetails } = useContext(UserDetailsContext);

    const handleLogout = async () => {
        try {
            await logout();
            history.push('/login');
        } catch (error) {
            setInformation({
                error: t('profile.errors.logout'),
                haveError: true,
            });
            console.error(error.message);
        }
        setTimeout(() => {
            setInformation({ hasError: false });
        }, 5000);
    };
    return (
        <div>
            <GeneralNav />

            <S.Wrapper>
                <S.ProfileContainer>
                    <div className="card-header-pills">
                        <Link to="/">
                            <S.GoBack />
                        </Link>
                    </div>
                    <S.Header>{t('profile.title')}</S.Header>
                    {information.hasError && (
                        <div className="alert alert-danger" role="alert">
                            {information.error}
                        </div>
                    )}
                    <S.DetailsWrapper>
                        <div>
                            <b>{t('profile.email')}:</b> <S.EmailText>{currentUser.email}</S.EmailText>
                        </div>
                        <div>
                            <b>{t('profile.fullName')}:</b>
                            <S.EmailText>{` ${userDetails.firstName} ${userDetails.lastName}`}</S.EmailText>
                        </div>
                    </S.DetailsWrapper>
                    <S.Update>
                        <Link to="/update-profile">{t('profile.updatePassword')}</Link>
                    </S.Update>

                    <S.Logout onClick={handleLogout}>{t('profile.logout')}</S.Logout>
                    <S.FooterWrapper></S.FooterWrapper>
                </S.ProfileContainer>
            </S.Wrapper>
        </div>
    );
};

export default Profile;
