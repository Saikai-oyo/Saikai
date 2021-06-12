import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import * as S from './style';

const LanguageDropDown = ({ toggleLang }) => {
    useEffect(() => {
        const toggleLangListener = () => document.addEventListener('click', toggleLang);
        toggleLangListener();

        return () => {
            document.removeEventListener('click', toggleLang);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const { i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <S.container onClick={() => toggleLang()}>
            <S.title> Select Language</S.title>
            <S.item
                onClick={() => {
                    changeLanguage('en');
                    toggleLang();
                }}>
                English
            </S.item>
            <S.item
                onClick={() => {
                    changeLanguage('he');
                    toggleLang();
                }}>
                Hebrew
            </S.item>
        </S.container>
    );
};

export default LanguageDropDown;
