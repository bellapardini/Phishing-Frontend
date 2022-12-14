import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SWContext from '../context/SWContext';
import { putScore } from '../services/functions';
import { totalPhases } from '../services/questions';
import Loading from './Loading';

function Modal() {
  const [isLoading, setIsLoading] = useState(false);
  const {
    isOpen,
    setIsOpen,
    phaseIndex,
    setPhaseIndex,
    feedback,
    currentScore,
    user,
    setIsGameCompleted,
    isCSCompleted,
  } = useContext(SWContext);
  const navigate = useNavigate();
  const handleClick = async () => {
    setIsOpen(false);
    if (phaseIndex === totalPhases - 1) {
      const { id, token } = user;
      setIsLoading(true);
      await putScore({ id, score: currentScore }, token);
      setIsLoading(false);
      const path = isCSCompleted ? '../aprendendo' : '../modulos';
      navigate(path);
      setIsGameCompleted(true);
      setPhaseIndex(0);
    } else {
      setPhaseIndex((prev) => prev + 1);
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

export default Modal;
