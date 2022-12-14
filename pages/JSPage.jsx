import React from 'react';
import Header from '../components/Header';
import Progress from '../components/Progress';
import JavaScriptText from '../components/JavaScriptText';
import { Link } from 'react-router-dom';

function JSPage() {

  return (
    <div className="info-page">
      <Header/>
      <Progress/>
      <JavaScriptText/>
      <div className="js-jogar">
        <Link to="../jogo">Jogar</Link>
      </div>
    </div>
  );
}

export default JSPage;
