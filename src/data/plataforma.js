// Textos que mais de uma tela usa. O problema e a persona vêm do
// Blueprint MOV.AI e das User Stories entregues pela Motiva.
export const plataforma = {
  marca: 'MOV.AI',
  complemento: 'Ocorrências de campo por voz',
  curso: 'Challenge Motiva, FIAP 2TIAPR',
  problemaTitulo: 'Registrar a ocorrência sem tirar a atenção da via',
  problemaTexto:
    'O Agente de Inspeção de Tráfego precisa registrar e manter atualizada uma ocorrência enquanto está na rodovia. Hoje isso exige digitação e navegação por telas justamente quando a atenção deveria estar no trânsito. O resultado são registros incompletos, informação que demora a chegar ao CCO e risco de perder o relato quando o sinal cai.',
  proposta:
    'A proposta do grupo é um agente de voz que transforma o relato falado em registro estruturado, pergunta o que faltou e pede confirmação antes de gravar ou enviar. Nesta sprint a plataforma só consulta dados fixos e mostra um histórico simulado de comandos. O agente de voz ainda não existe.',
  usuario: 'Agente de Inspeção de Tráfego da Motiva',
  usuarioTexto:
    'Patrulha a rodovia, identifica situações, inicia registros e acompanha a evolução do atendimento no local, na viatura ou à beira da via, com ruído e sinal instável.',
}

// Ciclo de uma ocorrência que o grupo escolheu atacar primeiro.
// As referências são as User Stories oficiais da Persona 1.
export const cicloOcorrencia = [
  {
    id: 'relatar',
    titulo: 'Relatar',
    texto: 'Falar o que aconteceu, onde, em que sentido e em que condições.',
    historias: 'US1 e US3',
  },
  {
    id: 'atualizar',
    titulo: 'Atualizar',
    texto: 'Avisar por voz a mudança de status durante o atendimento.',
    historias: 'US5',
  },
  {
    id: 'encerrar',
    titulo: 'Encerrar',
    texto: 'Descrever as providências e confirmar o fim da atuação.',
    historias: 'US8',
  },
]
