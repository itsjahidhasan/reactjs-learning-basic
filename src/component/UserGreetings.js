import { useState } from 'react';
export const UserGreeting = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const logIn = () => {
    setIsLoggedIn(true);
  };
  const signOut = () => {
    setIsLoggedIn(false);
  };
  return (
    <div>
      <button onClick={logIn}>LogIn</button>
      <button onClick={signOut}>Sign out</button>
      <h1>Welcome {isLoggedIn ? 'Jahid' : 'Guest'}</h1>
      <h1>Welcome {isLoggedIn && 'Jahid'}</h1>
    </div>
  );
};
