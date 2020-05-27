import React from 'react';

function Submit({ value, handle }) {
  return (
    <input type="submit" value={value} onClick={handle}/>

  );
}

export default Submit;
