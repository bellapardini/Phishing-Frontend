import React, { useContext } from 'react';
import SWContext from '../context/SWContext';
import c1image from '../images/c1image.png';
import c2image from '../images/c2image.png';
import c3image from '../images/c3image.png';
import c4image from '../images/c4image.png';
import c5image from '../images/c5image.png';
import player1 from '../images/player1.png';
import player2 from '../images/player2.png';
import { CHAR_NAMES } from '../services/constants';
import { playerInfos } from '../services/csQuestions';

const images = [c1image, c2image, c3image, c4image, c5image];
const playerImages = [player1, player2];

function CSMainImage() {
  const { csPhaseIndex } = useContext(SWContext);
  return (
    <section className="main-container">
      <div className="playerInfo">
        {
          playerImages.map((src, index) => (
            <div key={ index }>
              <img src={ src } alt={ CHAR_NAMES[index] }/>
              <h4>{ playerInfos[csPhaseIndex][index] }</h4>
            </div>
          ))
        }
      </div>
      <img className="main-image" src={ images[csPhaseIndex] } alt="pergunta"/>
    </section>
  );
}

export default CSMainImage;
