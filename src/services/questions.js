export const texts = [
  'A função a seguir será executada com as idades da Vilma e do Miguel',
  'A declaração de variável com "let" permite que seu valor seja reatribuído.',
  'Após o código a seguir, cada personagem executou uma função',
  'Serão executadas as funções "irPara(50)" e "mover10metros(40)".',
  'A função "console.log()" imprime o texto nela inserido.',
];

export const titles = [
  'Com a idade de quem a função estudar retorna "Vai para a Faculdade"?',
  'De quem é a afirmação correta?',
  'Quem recebeu a mensagem da vitória?',
  'De quem é a afirmação correta?',
  'De quem é a afirmação correta?',
];

export const totalPhases = titles.length;

export const playerInfos = [
  ['Vilma, 21 anos', 'Miguel, 17 anos'],
  [
    'Vilma: "A função retornará 90"',
    'Miguel: "A função retornará 0"',
  ],
  ['Vilma executou "ativarPeloTeclado(4)"', 'Miguel executou "ativarPorClique()"'],
  [
    'Vilma: "No fim, as duas funções têm o mesmo retorno"',
    'Miguel: "As funções têm tipos de retorno diferentes"',
  ],
  [
    'Vilma: "O texto será impresso 12 vezes"',
    'Miguel: "O texto será impresso 7 vezes"',
  ],
];

export const answers = [
  [
    'Isso mesmo! Como Miguel tem menos de 18 anos, "estudar(17)" retornaria "Esperar".',
    'Que pena, você errou. Como Miguel tem menos de 18 anos, "estudar(17)" retornaria "Esperar"',
  ],
  [
    'Infelizmente não... O último comando vai zerar o volume.',
    'Isso mesmo! O último comando vai zerar o volume.',
  ],
  [
    'Errado. Neste caso, é a função ativarPorClique que está retornando a mensagem "Você venceu!".',
    'Certo! Neste caso, é a função ativarPorClique que está retornando a mensagem "Você venceu!".',
  ],
  [
    'Perfeito! Nos dois casos o retorno é "Ir para x: 50"',
    'Errado... Nos dois casos o retorno é "Ir para x: 50"',
  ],
  [
    'Isso mesmo! Quando há uma repetição dentro da outra, o número de repetições é multiplicado.',
    'Que pena, você errou. Quando há uma repetição dentro da outra, o número de repetições é multiplicado.',
  ],
];

export const answerScores = [
  [50, 0],
  [0, 50],
  [0, 50],
  [50, 0],
  [50, 0],
];
