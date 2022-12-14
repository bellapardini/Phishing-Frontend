import React from 'react';
import CSDescription from '../components/CSDescription';
import Header from '../components/Header';
import CSMainImage from '../components/CSMainImage';
import CSQuestion from '../components/CSQuestion';
import CSButtons from '../components/CSButtons';
import CSModal from '../components/CSModal';
import Progress from '../components/Progress';

function CSGame() {
  return (
    <div className="game-page">
      <Header/>
      <Progress/>
      <main className="game">
        <CSDescription/>
        <CSMainImage/>
        <CSQuestion/>
        <CSButtons/>
      </main>
      <CSModal/>
    </div>
  );
}

export default CSGame;
