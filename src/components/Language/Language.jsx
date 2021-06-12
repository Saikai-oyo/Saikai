import React, { useState } from 'react';
import LanguageDropDown from '../LanguageDropDown/LanguageDropDown';
import { useTranslation } from 'react-i18next';
import { translation } from '../../assets/icons';

import './style.css';

const Language = () => {
    const { t } = useTranslation();
    const [isLangOpen, setLangToggle] = useState(false);

    const toggleLang = () => {
        setLangToggle(!isLangOpen);
    };
    return (
        <div className="languages" data-tooltip={t('dashboard.tooltips.language')}>
            <button className="lang-btn" onClick={() => toggleLang()}>
                <img src={translation} alt="lang" />
                {isLangOpen && <LanguageDropDown toggleLang={toggleLang} />}
            </button>
        </div>
    );
};

export default Language;
