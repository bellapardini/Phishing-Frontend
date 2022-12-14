import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SWContext from './SWContext';

function SWProvider({ children }) {
  const [user, setUser] = useState({ name: '', id: '', token: '' });
  const [currentScore, setCurrentScore] = useState(0);
  const [phaseIndex, setPhaseIndex] = useState(0);
  const [csPhaseIndex, setCsPhaseIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [isTutorialOpen, setIsTutorialOpen] = useState(false);
  const [isGameCompleted, setIsGameCompleted] = useState(false);
  const [isCSCompleted, setIsCSCompleted] = useState(false);
  const [basicPhases, setBasicPhases] = useState([]);

  const globalState = {
    user,
    setUser,
    currentScore,
    setCurrentScore,
    phaseIndex,
    setPhaseIndex,
    isOpen,
    setIsOpen,
    isTutorialOpen,
    setIsTutorialOpen,
    feedback,
    setFeedback,
    csPhaseIndex,
    setCsPhaseIndex,
    isGameCompleted,
    setIsGameCompleted,
    isCSCompleted,
    setIsCSCompleted,
    basicPhases,
    setBasicPhases,
  };

  return (
    <SWContext.Provider value={ globalState }>
      { children }
    </SWContext.Provider>
  );
}

SWProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default SWProvider;
