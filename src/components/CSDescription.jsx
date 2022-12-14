import React from 'react';
import { useContext } from 'react';
import SWContext from '../context/SWContext';
import { texts } from '../services/csQuestions';

function CSDescription() {
  const { csPhaseIndex } = useContext(SWContext);
  return (
    <p className="description">
      { texts[csPhaseIndex] }
    </p>
  );
}

export default CSDescription;
