import React, { useContext } from 'react';
import SWContext from '../context/SWContext';
import q1image from '../images/q1image.png';
import q2image from '../images/q2image.png';
import q3image from '../images/q3image.png';
import q4image from '../images/q4image.png';
import q5image from '../images/q5image.png';
import player1 from '../images/player1.png';
import player2 from '../images/player2.png';
import { CHAR_NAMES } from '../services/constants';
import { playerInfos } from '../services/questions';

const images = [q1image, q2image, q3image, q4image, q5image];
const playerImages = [player1, player2];
function MainImage() {
  const { phaseIndex } = useContext(SWContext);
  return (
    <section className="main-container">
      <div className="playerInfo">
        {
          playerImages.map((src, index) => (
            <div key={ index }>
              <img src={ src } alt={ CHAR_NAMES[index] }/>
              <h4>{ playerInfos[phaseIndex][index] }</h4>
            </div>
          ))
        }
      </div>
      <img className="main-image" src={ images[phaseIndex] } alt="fluxograma"/>
    </section>
  );
}

export default MainImage;
