import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SWContext from '../context/SWContext';
import { putScore } from '../services/functions';
import { totalCSPhases } from '../services/csQuestions';
import Loading from './Loading';

function CSModal() {
  const [isLoading, setIsLoading] = useState(false);
  const {
    isOpen,
    setIsOpen,
    csPhaseIndex,
    setCsPhaseIndex,
    feedback,
    currentScore,
    user,
    setIsCSCompleted,
    isGameCompleted,
  } = useContext(SWContext);
  const navigate = useNavigate();
  const handleClick = async () => {
    setIsOpen(false);
    if (csPhaseIndex === totalCSPhases - 1) {
      const { id, token } = user;
      setIsLoading(true);
      await putScore({ id, score: currentScore }, token);
      setIsLoading(false);
      const path = isGameCompleted ? '../aprendendo' : '../modulos';
      navigate(path);
      setIsCSCompleted(true);
      setCsPhaseIndex(0);
    } else {
      setCsPhaseIndex((prev) => prev + 1);
    }
  }
  return (
    <section className={ isOpen ? 'openModal' : 'closedModal' }>
      <h4>{ feedback }</h4>
      <button onClick={ handleClick }>
        Próxima
      </button>
      { isLoading ? <Loading/> : null }
    </section>
  );
}

export default CSModal;
