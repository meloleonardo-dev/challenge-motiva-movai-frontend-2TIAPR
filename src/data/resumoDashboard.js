// Recorte simulado de outubro: relatos feitos por Agentes de Inspeção.
// Não é a contagem dos cinco trechos da Consulta. Os números são de exemplo
// e o README explica o que cada gráfico mede.
//
// Ponto de extensão: um objeto por gráfico novo, com uma linha no README
// dizendo de onde saiu o número.

export const relatosPorTipo = {
  titulo: 'Relatos por tipo de ocorrência',
  labels: ['Veículo parado', 'Objeto na pista', 'Acidente sem vítima', 'Animal na pista', 'Sinalização'],
  valores: [12, 7, 5, 4, 3],
}

export const relatosPorRodovia = {
  titulo: 'Relatos por rodovia',
  labels: ['SP-348', 'SP-330', 'BR-116', 'RJ-124'],
  valores: [13, 9, 6, 3],
}

// valor / maximo preenche o arco. Os três usam o total do recorte (31).
export const velocimetros = [
  {
    id: 'digitados',
    titulo: 'Relatos que exigiram digitação',
    valor: 24,
    maximo: 31,
    detalhe: 'o esforço que a voz quer tirar do agente',
    cor: '#c98f00',
  },
  {
    id: 'completos',
    titulo: 'Completos na primeira tentativa',
    valor: 19,
    maximo: 31,
    detalhe: 'com rodovia, km, sentido e condições',
    cor: '#0e6b4e',
  },
  {
    id: 'sem-sinal',
    titulo: 'Feitos sem sinal',
    valor: 5,
    maximo: 31,
    detalhe: 'precisariam ficar guardados até o envio',
    cor: '#3a4148',
  },
]
