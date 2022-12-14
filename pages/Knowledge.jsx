import React from 'react';
import EndGameNav from '../components/EndGameNav';
import Header from '../components/Header';
import Progress from '../components/Progress';
import { fstParagraph, sndParagraph } from '../services/theory';

function Knowledge() {
  return (
    <div className="knowledge-page">
      <Header/>
      <Progress/>
      <EndGameNav path="/aprendendo"/>
      <main>
        <h1>O que aprendemos?</h1>
        <p>{ fstParagraph }</p>
        <p>{ sndParagraph }</p>
      </main>
    </div>
  );
}

export default Knowledge;
