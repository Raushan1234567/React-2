import React, { useState } from 'react';

const Button = ({ defaultMessage}) => {
  const [message, setMessage] = useState('');

  const handleClick = () => {
    // Toggle the message
    setMessage(message ? '' :defaultMessage);
  };

  return (
    <div className='ButtonContainer'>
      <button onClick={handleClick}>Click1</button>
      <p>{message}</p>
    </div>
  );
}

export default Button;
