import React from 'react';

function JavaScriptText() {
  return (
    <div className="js-container">
      <h1>JavaScript Básico</h1>
      <p className="js-txt">
        <strong>IF/ELSE:</strong> Utilizamos "if" sempre que queremos verificar alguma condição e, se for verdadeira, executar determinada ação. Em situações em que também querermos executar uma ação caso a condição seja falsa, utilizamos o "else".
      </p>
      <p className="js-txt">
        <strong>LET/CONST:</strong> Utilizamos "let" para criar uma variável que pode ter seu valor reatribuído. Um exemplo é a pontuação de um jogo, começando com "let pontos = 0" e depois a pontuação pode mudar com "pontos = 10". Já o "const" é utilizado para declarar constantes, ou seja, valores não alterados.
      </p>
      <p className="js-txt">
        <strong>FUNCTION:</strong> As funções podem ser resumidas em três etapas: receber uma entrada, executar uma ação e retornar uma saída. A adição é um exemplo de função, pois recebe dois números, executa o cálculo e retorna a soma.
      </p>
      <p className="js-txt">
        <strong>CONSOLE.LOG: </strong> Uma das primeiras funções que aprendemos em JavaScript é a função console.log, pois com ela é possível visualizar o que está sendo construído no código. Quando você desenvolve uma função, por exemplo, você executa essa função dentro de um console.log e pode ver se o resultado está de acordo com o esperado.
      </p>
    </div>
  );
}

export default JavaScriptText;
