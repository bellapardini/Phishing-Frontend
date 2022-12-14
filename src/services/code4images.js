
function repetirFala(texto) {
  for (let i = 0; i < 3; i += 1) {
    for (let j = 0; j < 4; j += 1) {
      console.log(texto);
    }
  }
}

repetirFala('Oi');

function irPara(posicao) {
  return 'Ir para x: ' + posicao;
}

function mover10metros(posicaoInicial) {
  const posicaoFinal = posicaoInicial + 10;
  return 'Ir para x: ' + posicaoFinal;
}

console.log(irPara(0), mover10metros(0));

function ativarPorClique() {
  const resultado = 'Você venceu!';
  return resultado;
}

function ativarPeloTeclado(pontos) {
  const resultado = 'Sua pontuação é: ' + pontos;
  return resultado;
}

console.log(ativarPorClique(), ativarPeloTeclado(0));

function abaixarSom() {
  let volume = 100;
  volume -= 10;
  volume = 0;
  return volume;
}

console.log(abaixarSom());


function estudar(idade) {
  if (idade < 18) {
    return 'Esperar';
  } else {
    return 'Vai para a Faculdade';
  }
}

console.log(estudar(17));
