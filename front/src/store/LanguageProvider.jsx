import React, { createContext, useState, useEffect } from 'react';
import { node } from 'prop-types';

export const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
  const [lang, changeLanguage] = useState(localStorage.getItem('current_lang') || 'fr');
  useEffect(() => localStorage.setItem('current_lang', lang));

  return (
    <LanguageContext.Provider value={{ lang, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

LanguageProvider.propTypes = {
  children: node.isRequired,
};

export default LanguageProvider;
