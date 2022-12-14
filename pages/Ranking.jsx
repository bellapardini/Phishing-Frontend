import React from 'react';
import EndGameNav from '../components/EndGameNav';
import Header from '../components/Header';
import LeaderBoard from '../components/LeaderBoard';
import Progress from '../components/Progress';

function Knowledge() {
  return (
    <div className="knowledge-page">
      <Header/>
      <Progress/>
      <EndGameNav path="/ranking"/>
      <main>
        <LeaderBoard/>
      </main>
    </div>
  );
}

export default Knowledge;
