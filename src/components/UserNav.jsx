import React from 'react';
import { Link } from 'react-router-dom';

function UserNav() {
  return (
    <nav className='usernav'>
      <Link to="/login">Fazer Login</Link>
      <Link to="/cadastro">Registrar-se</Link>
    </nav>
  );
}

export default UserNav;
