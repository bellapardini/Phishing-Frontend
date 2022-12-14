import React from 'react';
import { useContext } from 'react';
import SWContext from '../context/SWContext';

function Header() {
  const { user, currentScore } = useContext(SWContext);
  return (
    <header className="header-container">
      <div className="header">
        <h2 className="header-title">Cyber Game</h2>
        <h2 className="header-score">{ currentScore || '' }</h2>
        <h2 className="header-username">{ user.name }</h2>
      </div>
    </header>
  );
}

export default Header;
