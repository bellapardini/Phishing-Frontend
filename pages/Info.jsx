import React from 'react';
import EndGameNav from '../components/EndGameNav';
import Header from '../components/Header';
import Progress from '../components/Progress';
import {
  FaGlobeAmericas,
  FaMailBulk,
  FaCommentDollar,
  FaFileWord,
  FaFacebookSquare,
} from "react-icons/fa";
import BasicModal from '../components/BasicModal';

function Info() {
  const faIcons = [
    <FaGlobeAmericas/>,
    <FaMailBulk/>,
    <FaCommentDollar/>,
    <FaFileWord/>,
    <FaFacebookSquare/>,
  ];

  return (
    <div className="info-page">
      <Header/>
      <Progress/>
      <EndGameNav path="/informatica"/>
      <main className="info-container">
        { faIcons.map((icon, index) => (
          <div className="card" key={ index }>
            { icon }
            <BasicModal index={ index }/>
          </div>
        ))}
      </main>
    </div>
  );
}

export default Info;
