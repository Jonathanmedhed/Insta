import React from 'react';
import InputEmoji from 'react-input-emoji';

const Input = ({ className, type, placeholder, value, onChange, onEnter }) => {
  return (
    <span className={`${className || ''}`}>
      {type === 'emoji' ? (
        <InputEmoji
          value={value}
          onChange={onChange}
          cleanOnEnter
          onEnter={onEnter}
          placeholder='Type a message'
        />
      ) : (
        <input
          className={`${className || ''}`}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      )}
    </span>
  );
};

export default Input;
