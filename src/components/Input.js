import React from 'react';

function Input({ handle, value, placeholder, name }) {
  return (
    <input className="input" name={name} value={value} placeholder={placeholder} onChange={handle} />
  );
}

export default Input;
