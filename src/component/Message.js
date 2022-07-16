import { useState } from 'react';

export const Message = () => {
  const [message, setMessage] = useState('Hello Visitor');
  return (
    <div>
      <h1>{message}</h1>
      <button onClick={() => setMessage('Thank you')}>Subscribe</button>
    </div>
  );
};
