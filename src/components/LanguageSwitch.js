import React from 'react';
import { useTranslation } from 'react-i18next';
import ImageComponent from './ImageComponent';
import spainIcon from '../images/spanish-icon.png';
import britishIcon from '../images/british-icon.png';

const LanguageSwitch = ({ active, onClick }) => {
  const { i18n } = useTranslation();

  const currentLanguage = () => i18n.language || window.localStorage.i18nextLng;

  const changeLanguage = () => {
    onClick();

    switch (currentLanguage()) {
      case 'en':
        i18n.changeLanguage('es');
        break;
      case 'es':
        i18n.changeLanguage('en');
        break;
      default:
        break;
    }
  };

  return (
    <div className={`switch-currency ${active ? '--active' : ''}`}>
      <span
        className={`${currentLanguage() === 'es' ? '' : '--inactive'}`}
        onClick={() => (currentLanguage() === 'en' ? changeLanguage() : '')}
        onKeyDown={() => (currentLanguage() === 'en' ? changeLanguage() : '')}
      >
        <ImageComponent className={'spanish'} src={spainIcon} alt='sp-flag' />
      </span>
      <label className='switch'>
        <input
          checked={currentLanguage() === 'en'}
          onChange={() => changeLanguage()}
          type='checkbox'
        ></input>
        <span className='slider round'></span>
      </label>
      <span
        className={`${currentLanguage() === 'en' ? '' : '--inactive'}`}
        onClick={() => currentLanguage() === 'es' && changeLanguage()}
        onKeyDown={() => currentLanguage() === 'es' && changeLanguage()}
      >
        <ImageComponent className={'british'} src={britishIcon} alt='gb-flag' />
      </span>
    </div>
  );
};

export default LanguageSwitch;
