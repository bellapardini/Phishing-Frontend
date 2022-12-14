export const texts = [
  'A partir de agora as questões são de Cyber Segurança. Imagina que você recebeu a seguinte mensagem:',
  'Ter uma senha segura é um dos cuidados que devemos ter na internet. Analise as senhas a seguir:',
  'Vilma e Miguel receberam e-mails e precisam da sua ajuda para saber qual deles apresenta maior risco.',
  'Em um dos e-mails havia um botão. Observe as decisões que cada personagem tomou.',
  'Você recebeu uma mensagem no whatsapp de um número desconhecido.',
];

export const titles = [
  'De quem é o melhor conselho?',
  'Quem tem a senha mais segura?',
  'Quem recebeu um e-mail suspeito?',
  'De quem é a melhor escolha?',
  'De quem é o melhor conselho?',
];

export const csTitles = titles;

export const totalCSPhases = titles.length;

export const playerInfos = [
  [
    'Vilma: "Jamais compartilhe seus dados, pode ser um golpe!"',
    'Miguel: "Aproveita! É sua chance de ganhar dinheiro fácil!"',
  ],
  ['Vilma, senha: 07071995', 'Miguel, senha: $5Ru.9i%'],
  ['Vilma recebeu o e-mail 1', 'Miguel recebeu o e-mail 2'],
  [
    'Vilma passou o cursor do mouse por cima do botão para ver o link da página de destino',
    'Miguel clicou imediatamente.',
  ],
  [
    'Vilma: "Adiciona sua mãe no whatsapp, logo!"',
    'Miguel: "Cuidado, pode ser alguém se passando por ela pra pedir dinheiro."',
  ],
];

export const answers = [
  [
    'Isso mesmo! Pedir dados em troca de uma recompensa é uma forma comum de golpe.',
    'Errado! Pedir dados em troca de uma recompensa é uma forma comum de golpe.',
  ],
  [
    'Não foi desta vez... A senha da Vilma contém apenas números, o que a torna mais vulnerável.',
    'Exatamente!! Essa senha tem letras maiúsculas e minúsculas, letras e caracteres especiais.',
  ],
  [
    'Errado. Por ser um remetente conhecido e não conter links externos, o risco do e-mail 1 é menor.',
    'Certa resposta!! Suspeite de todo link que receber, principalmente com remetente desconhecido.',
  ],
  [
    'Perfeito! Quando passamos o cursor do mouse por cima de um botão, podemos ver para onde o elemento nos levaria',
    'Errado. Clicar sem saber o destino é perigoso e pode levar a páginas maliciosas.',
  ],
  [
    'Não!! Esse é um golpe comum. Verifique através de um outro canal se a pessoa mudou de número.',
    'Isso mesmo!! Esse é um golpe comum. Verifique através de um outro canal se a pessoa mudou de número.',
  ],
];

export const answerScores = [
  [50, 0],
  [0, 50],
  [0, 50],
  [50, 0],
  [0, 50],
];
