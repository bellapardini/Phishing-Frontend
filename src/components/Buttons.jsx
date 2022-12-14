import React, { useContext } from 'react';
import { CHAR_NAMES } from '../services/constants';
import herPicture from '../images/herPicture.png';
import hisPicture from '../images/hisPicture.png';
import SWContext from '../context/SWContext';
import { answers, answerScores } from '../services/questions';

const pics = [herPicture, hisPicture];

function Buttons() {
  const { setIsOpen, setCurrentScore, phaseIndex, setFeedback } = useContext(SWContext);
  const handleClick = (answer) => {
    setCurrentScore((prev) => prev + answerScores[phaseIndex][answer]);
    setFeedback(answers[phaseIndex][answer])
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

export default Buttons;
