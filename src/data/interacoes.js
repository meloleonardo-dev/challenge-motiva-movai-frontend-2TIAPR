// Histórico simulado. O agente de voz ainda não existe.
// Cada item é um comando que o Agente de Inspeção teria falado, com data
// e uma resposta escrita à mão. Nenhum microfone, API ou modelo é usado.
// Todo comando aponta para um trecho que aparece na tela de Consultas.
// O array já está do mais recente para o mais antigo.
// tipo: relato, confirmação, atualização, encerramento ou falha de entendimento.
export const interacoes = [
  {
    id: 'i-8',
    tipo: 'relato',
    rodovia: 'SP-330',
    km: 98,
    texto: 'Pneu solto na faixa da esquerda, km 98 da Anhanguera, sentido interior',
    data: '2026-10-14T15:12:00',
    resposta:
      'Faltou uma informação para o registro: há vítimas? Responda sim, não ou não sei.',
  },
  {
    id: 'i-7',
    tipo: 'relato',
    rodovia: 'BR-116',
    km: 214,
    texto: 'Km 214 da Dutra, sentido Rio, sinalização provisória de obra no acostamento',
    data: '2026-10-14T10:05:00',
    resposta:
      'Entendi: sinalização provisória de obra na BR-116, km 214, sentido Rio de Janeiro, no acostamento. Confirma o registro?',
  },
  {
    id: 'i-6',
    tipo: 'falha de entendimento',
    rodovia: 'BR-116',
    km: 214,
    texto: 'Obra no km dois... (ruído de caminhão) ...acostamento sinalizado',
    data: '2026-10-14T10:03:00',
    resposta: 'Não entendi o quilômetro. Pode repetir?',
  },
  {
    id: 'i-5',
    tipo: 'encerramento',
    rodovia: 'SP-348',
    km: 134,
    texto: 'Encerrar atendimento no km 134. Veículo removido, acostamento liberado',
    data: '2026-10-13T08:55:00',
    resposta:
      'Resumo: veículo removido pelo guincho e acostamento liberado na SP-348, km 134, sentido capital. Confirma o encerramento da sua atuação?',
  },
  {
    id: 'i-4',
    tipo: 'atualização',
    rodovia: 'SP-348',
    km: 134,
    texto: 'Atualizar o km 134 da Bandeirantes: guincho chegou no local',
    data: '2026-10-13T08:20:00',
    resposta:
      'Status do relato no km 134 da SP-348: guincho no local. Confirma a atualização?',
  },
  {
    id: 'i-3',
    tipo: 'confirmação',
    rodovia: 'SP-348',
    km: 134,
    texto: 'Confirmo',
    data: '2026-10-13T07:45:00',
    resposta:
      'Relato registrado. Na simulação nada é enviado ao CCO: a resposta está escrita no array.',
  },
  {
    id: 'i-2',
    tipo: 'relato',
    rodovia: 'SP-348',
    km: 134,
    texto:
      'Km 134 sentido capital, carro parado no acostamento com pneu furado, sem vítima, vai precisar de guincho',
    data: '2026-10-13T07:44:00',
    resposta:
      'Entendi: veículo parado na SP-348, km 134, sentido capital, no acostamento, pneu furado, sem vítimas, apoio necessário: guincho. Confirma o registro?',
  },
  {
    id: 'i-1',
    tipo: 'encerramento',
    rodovia: 'RJ-124',
    km: 33,
    texto: 'Encerrar minha atuação no km 33 da Rodovia dos Lagos, pista liberada',
    data: '2026-10-12T17:40:00',
    resposta:
      'Resumo: pista liberada na RJ-124, km 33, sentido Região dos Lagos. Confirma o encerramento da sua atuação?',
  },
]
