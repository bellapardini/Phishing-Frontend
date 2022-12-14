import React from 'react';
import { useContext } from 'react';
import SWContext from '../context/SWContext';
import { texts } from '../services/questions';

function Description() {
  const { phaseIndex } = useContext(SWContext);
  return (
    <p className="description">
      { texts[phaseIndex] }
    </p>
  );
}

export default Description;
