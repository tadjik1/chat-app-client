import React, { useState } from 'react';

import Login from './Login';
import Register from './Register';

export default function Form() {
  const [page, setPage] = useState('login');
  
  function switchToLogin() { setPage('login'); }
  function switchToRegister() { setPage('register'); }
  
  if (page === 'login') return <Login switchToRegister={switchToRegister} />;
  
  return <Register switchToLogin={switchToLogin} />;
}
