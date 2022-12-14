import React, { useContext } from 'react';
import SWContext from '../context/SWContext';
import { titles } from '../services/csQuestions';

function CSQuestion() {
  const { csPhaseIndex } = useContext(SWContext);
  return (
    <h2 className="question">
      { titles[csPhaseIndex] }
    </h2>
  );
}

export default CSQuestion;
