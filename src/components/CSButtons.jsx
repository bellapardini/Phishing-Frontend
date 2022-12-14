import React, { useContext } from 'react';
import { CHAR_NAMES } from '../services/constants';
import herPicture from '../images/herPicture.png';
import hisPicture from '../images/hisPicture.png';
import SWContext from '../context/SWContext';
import { answers, answerScores } from '../services/csQuestions';

const pics = [herPicture, hisPicture];

function CSButtons() {
  const { setIsOpen, setCurrentScore, csPhaseIndex, setFeedback } = useContext(SWContext);
  const handleClick = (answer) => {
    setCurrentScore((prev) => prev + answerScores[csPhaseIndex][answer]);
    setFeedback(answers[csPhaseIndex][answer])
    setIsOpen(true);
  };
  return (
    <section className="buttons">
      {
        CHAR_NAMES.map((charName, index) => (
          <button
            type="button"
            key={ charName }
            onClick={ () => handleClick(index) }
          >
            <h3>{ charName }</h3>
            <img src={ pics[index] } alt="player"/>
          </button>
        ))
      }
    </section>
  );
}

export default CSButtons;
