import React from 'react';
import Header from '../components/Header';
import Progress from '../components/Progress';
import UserNav from '../components/UserNav';

function Initial() {
  return (
    <div className="initial-page">
      <Header/>
      <Progress/>
      <main className="initial">
        <p>Esse site foi construído a fim de apresentar conceitos básicos de <strong>cyber segurança e lógica de programação</strong>. Há uma tela de login e uma tela de cadastro, para novos usuários. Ao acessar sua conta, é feito o redirecionamento para a tela do jogo, que conta com 5 fases. <br/><br/> <strong>Cada questão vale 50 pontos</strong> e, após o fim da partida, o jogador pode ver o ranking das 10 melhores pontuações. Há também uma seção que contém a <strong>explicação das questões</strong>, para que toda pessoa possa aprender com o jogo.</p>
      </main>
      <UserNav/>
    </div>
  );
}

export default Initial;
