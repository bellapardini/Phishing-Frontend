import React from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import SWContext from '../context/SWContext';
import { localLogout } from '../services/functions';

function EndGameNav({ path }) {
  const navigate = useNavigate();
  const { setUser, setCurrentScore } = useContext(SWContext);
  const handleLogout = () => {
    localLogout();
    setUser({ name: '', id: '', token: '' });
    setCurrentScore(0);
    navigate('../');
  };

  return (
    <nav className="endgame">
      <button
        disabled={ path === '/aprendendo' }
        onClick={ () => navigate('../aprendendo') }
      >
        O que aprendemos
      </button>
      <button
        disabled={ path === '/ranking' }
        onClick={ () => navigate('../ranking') }
      >
        Ranking
      </button>
      <button
        disabled={ path === '/informatica' }
        onClick={ () => navigate('../informatica') }
      >
        Informática
      </button>
      <button
        onClick={ handleLogout }
      >
        Sair
      </button>
    </nav>
  );
}

export default EndGameNav;
