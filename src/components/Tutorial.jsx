import React from 'react';
import { Link } from 'react-router-dom';

function Tutorial () {
  return (
    <section className="tutorial usernav">
      <p>Neste jogo você encontrará perguntas sobre lógica de programação e cyber segurança. Tenha <strong>atenção</strong> nas informações dos personagens Vilma e Miguel, isso te ajudará a encontrar a resposta correta.<br/><br/>Para fazer sua escolha, basta <strong>clicar nos botões</strong> que aparecerão embaixo da tela. Caso você não acerte, não se preocupe, você receberá uma explicação da questão após sua tentativa.</p>
      <Link to="../modulos">Próximo</Link>
    </section>
  );
}

export default Tutorial;
