// Dados fixos da Sprint 1. Trechos, quilômetros e situações são simulados.
// As rodovias aparecem na apresentação da Motiva, mas nada aqui é boletim oficial.
// TODO Sprint 2: este array deixa de alimentar a tela direto.
// Ele vira o valor inicial do useState de trechos no App.jsx
// (ou a lista começa vazia e o agente cadastra pelo formulário).
export const trechos = [
  {
    id: 't-sp348-128',
    rodovia: 'SP-348',
    nome: 'Rodovia dos Bandeirantes',
    kmInicial: 128,
    kmFinal: 136,
    sentido: 'capital',
    situacao: 'Atendimento encerrado, veículo removido do acostamento',
    atencao: false,
    atualizadoEm: '2026-10-13T08:55:00',
  },
  {
    id: 't-sp330-095',
    rodovia: 'SP-330',
    nome: 'Rodovia Anhanguera',
    kmInicial: 95,
    kmFinal: 102,
    sentido: 'interior',
    situacao: 'Pneu solto na faixa da esquerda, relato incompleto',
    atencao: true,
    atualizadoEm: '2026-10-14T15:12:00',
  },
  {
    id: 't-br116-210',
    rodovia: 'BR-116',
    nome: 'Rodovia Presidente Dutra',
    kmInicial: 210,
    kmFinal: 218,
    sentido: 'Rio de Janeiro',
    situacao: 'Sinalização provisória de obra, relato aguardando confirmação',
    atencao: true,
    atualizadoEm: '2026-10-14T10:05:00',
  },
  {
    id: 't-rj124-030',
    rodovia: 'RJ-124',
    nome: 'Rodovia dos Lagos',
    kmInicial: 30,
    kmFinal: 38,
    sentido: 'Região dos Lagos',
    situacao: 'Atendimento encerrado, pista liberada',
    atencao: false,
    atualizadoEm: '2026-10-12T17:40:00',
  },
  {
    id: 't-sp348-064',
    rodovia: 'SP-348',
    nome: 'Rodovia dos Bandeirantes',
    kmInicial: 64,
    kmFinal: 70,
    sentido: 'interior',
    situacao: 'Sem ocorrência aberta',
    atencao: false,
    atualizadoEm: '2026-10-14T06:30:00',
  },
]
