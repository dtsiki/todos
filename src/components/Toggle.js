import React from 'react';

function Toggle({ handle, value, placeholder, name, completed }) {
  return (
    <input className={`button button--toggle ${completed && `button--toggle-completed`}`} onChange={handle} type="checkbox" name="toggle" />
  );
}

export default Toggle;
