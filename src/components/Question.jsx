import React, { useContext } from 'react';
import SWContext from '../context/SWContext';
import { titles } from '../services/questions';

function Question() {
  const { phaseIndex } = useContext(SWContext);
  return (
    <h2 className="question">
      { titles[phaseIndex] }
    </h2>
  );
}

export default Question;
