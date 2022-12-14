import React from 'react';
import Header from '../components/Header';
import Progress from '../components/Progress';
import { Link } from 'react-router-dom';

function Modules() {

  return (
    <div className="info-page">
      <Header/>
      <Progress/>
      <div className="modules">
        <Link to="../javascript">Programação</Link>
        <Link to="../seguranca">Cyber Segurança</Link>
        <Link to="../informatica">Informática</Link>
      </div>
    </div>
  );
}

export default Modules;
