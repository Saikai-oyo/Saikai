import React, { useState } from 'react';

const initialState = {
    lang: 'en',
    // consider add language to setting and save it to the DB.
    // Then import the lang from there.
};

export const LanguageContext = React.createContext(initialState);

export const LanguageContextProvider = ({ children }) => {
    const [lang, setLang] = useState(initialState);
    return <LanguageContext.Provider value={{ lang, setLang }}>{children}</LanguageContext.Provider>;
};
