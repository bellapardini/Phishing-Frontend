import React from 'react';
import Description from '../components/Description';
import Header from '../components/Header';
import MainImage from '../components/MainImage';
import Question from '../components/Question';
import Buttons from '../components/Buttons';
import Modal from '../components/Modal';
import Progress from '../components/Progress';

function Game() {
  return (
    <div className="game-page">
      <Header/>
      <Progress/>
      <main className="game">
        <Description/>
        <MainImage/>
        <Question/>
        <Buttons/>
      </main>
      <Modal/>
    </div>
  );
}

export default Game;
