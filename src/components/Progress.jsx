import React from 'react';
import { useContext } from 'react';
import SWContext from '../context/SWContext';
import { titles, totalPhases } from '../services/questions';
import { csTitles, totalCSPhases } from '../services/csQuestions';
import { tools } from '../services/basicInfo';

const calculateProgress = (value, isCompleted) => {
  if (isCompleted) return 100;
  return Math.round(value * 100);
};

function Progress() {
  const {
    phaseIndex,
    csPhaseIndex,
    isGameCompleted,
    isCSCompleted,
    basicPhases,
  } = useContext(SWContext);
  return (
    <header className="progress-header">
      <section>
        <div className="progress">
          <div className="progress-bar">
            { titles.map((_item, index) => (
              <div
                className={ 
                  phaseIndex > index || isGameCompleted ? 'done' : 'todo'
                }
                key={ index }
              />
            )) }
          </div>
          <span>{ `${calculateProgress(phaseIndex / totalPhases, isGameCompleted)}%`}</span>
        </div>
        <h5>Programação</h5>
      </section>
      <section>
        <div className="progress">
          <div className="progress-bar">
            { csTitles.map((_item, index) => (
              <div
                className={
                  csPhaseIndex > index || isCSCompleted ? 'done' : 'todo'
                }
                key={ index }
              />
            )) }
          </div>
          <span>
            { `${calculateProgress(csPhaseIndex / totalCSPhases, isCSCompleted)}%` }
          </span>
        </div>
        <h5>Cyber Segurança</h5>
      </section>
      <section>
        <div className="progress">
          <div className="progress-bar">
            { tools.map((_item, index) => (
              <div
                className={ basicPhases.length > index ? 'done' : 'todo' }
                key={ index }
              />
            )) }
          </div>
          <span>{ `${calculateProgress(basicPhases.length / tools.length)}%` }</span>
        </div>
        <h5>Informática</h5>
      </section>
    </header>
  );
}

export default Progress;
