# MOV.AI | Challenge Motiva, Sprint 1

Base da plataforma web do grupo **MOV.AI** (turma 2TIAPR, FIAP) para o desafio da **Motiva**. Feita em React + Vite, com dados fixos. Nesta sprint a plataforma só consulta: o agente de voz ainda não existe e as interações são simuladas.

## Problema escolhido

O **Agente de Inspeção de Tráfego** precisa registrar e manter atualizada uma ocorrência enquanto está na rodovia. Hoje isso exige digitação e navegação por telas justamente quando a atenção deveria estar no trânsito. O resultado são registros incompletos, informação que demora a chegar ao CCO e risco de perder o relato quando o sinal cai.

A proposta do grupo é um agente de voz que transforma o relato falado em registro estruturado, pergunta o que faltou e pede confirmação antes de gravar ou enviar. O primeiro recorte é o ciclo de uma ocorrência em campo:

| Passo | O que o agente faz por voz | User Stories da Motiva |
|---|---|---|
| Relatar | Diz o que aconteceu, onde, em que sentido e em que condições | US1 e US3 |
| Atualizar | Avisa a mudança de status durante o atendimento | US5 |
| Encerrar | Descreve as providências e confirma o fim da atuação | US8 |

Fontes: documento de User Stories da Motiva (Persona 1), apresentação da Motiva de 14/09/2026 e o Blueprint do grupo.

## Usuário da plataforma

Agente de Inspeção de Tráfego da Motiva. Patrulha a rodovia, identifica situações, inicia registros e acompanha a evolução do atendimento no local, na viatura ou à beira da via, com ruído, atenção dividida e sinal instável.

## Como rodar

Requisitos: Node.js 20.19+ ou 22.12+ (exigência do Vite 8) e npm.

```bash
npm install
npm run dev
```

Abra a URL que o terminal mostrar (padrão `http://localhost:5173/`).

Outros scripts: `npm run build` (gera a versão de produção em `dist/`) e `npm run lint` (Oxlint).

## Telas

| Tela | O que mostra |
|---|---|
| Início | O problema, o usuário, o ciclo escolhido, quatro indicadores, os gráficos e a leitura rápida dos trechos |
| Consultas | Lista de trechos acompanhados vinda de `src/data/trechos.js` |
| Interações | Histórico simulado de comandos de voz: comando, data e resposta fixa, de `src/data/interacoes.js` |
| Dashboard | Os mesmos gráficos do Início, isolados (estrutura da aula de 07/10) |

A navegação é feita com `useState` no `App.jsx`, sem React Router. F5 volta para o Início, o que é esperado nesta sprint.

## Estrutura

```
src/
  components/   peças reutilizáveis (recebem dados por props)
  pages/        as quatro telas
  data/         arrays e objetos fixos com os dados simulados
  utils/        funções sem JSX (formatar data, somar, registrar o Chart.js)
  App.jsx       guarda a tela atual e repassa os arrays às telas
  main.jsx      monta o React no #root
  index.css     reset e paleta
  App.css       layout e componentes
```

### Componentes

| Componente | Props | Onde é usado |
|---|---|---|
| `Header` | `marca`, `complemento`, `curso` | `Layout` |
| `Nav` | `paginaAtual`, `onNavegar` | `Layout` |
| `Layout` | `children`, `paginaAtual`, `onNavegar` | `App` |
| `CabecalhoPagina` | `titulo`, `children` | Consultas, Interações, Dashboard |
| `Indicador` | `rotulo`, `valor`, `detalhe`, `destaque` | Início (via `map`) |
| `MarcoKm` | `rodovia`, `km`, `ate` | `CardTrecho` e `CardInteracao` |
| `CardTrecho` | `trecho` | Consultas (via `map`) |
| `CardInteracao` | `interacao` | Interações (via `map`) |
| `GraficoBarras`, `GraficoPizza`, `GraficoGauge` | `titulo`, `labels`/`valores` ou `valor`/`maximo` | `PainelGraficos` |
| `PainelGraficos` | nenhuma (lê `resumoDashboard.js`) | Início e Dashboard |
| `TabelaTrechos` | `trechos` | Início |

Todas as listas usam `map` com `key` estável (`id` do item), nunca o índice.

## Dados e de onde vem cada número

Todos os dados são **simulados** para a Sprint 1. As rodovias aparecem na apresentação da Motiva, mas quilômetros, situações e quantidades foram escritos pelo grupo e não são boletim oficial.

- `src/data/plataforma.js`: textos do problema, do usuário e do ciclo.
- `src/data/trechos.js`: 5 trechos (SP-348, SP-330, BR-116 e RJ-124). `atencao: true` marca os que têm ocorrência em andamento.
- `src/data/interacoes.js`: 8 comandos simulados, do mais recente ao mais antigo. Cada um tem `texto`, `data` e `resposta`, além de `tipo`, `rodovia` e `km`, que o grupo acrescentou para o selo de quilômetro e a etiqueta do tipo. Todo comando cita um trecho que aparece em Consultas. As respostas seguem o comportamento proposto no Blueprint: o agente repete o que entendeu e pede confirmação, pergunta o que faltou ou pede para repetir quando não entende.
- `src/data/resumoDashboard.js`: recorte simulado de 31 relatos feitos em outubro. **Não é a contagem dos 5 trechos da Consulta.**

### Indicadores do Início

| Indicador | Cálculo |
|---|---|
| Trechos acompanhados | `trechos.length` |
| Em atenção | `trechos.filter((t) => t.atencao).length` |
| Comandos simulados | `interacoes.length` |
| Relatos no recorte | `somar(relatosPorTipo.valores)`, a soma do recorte de outubro |

### O que cada gráfico mede

| Gráfico | Pergunta que responde | Dados |
|---|---|---|
| Barras: relatos por tipo de ocorrência | Que tipo de situação o agente mais relata? | 12 + 7 + 5 + 4 + 3 = 31 |
| Rosca: relatos por rodovia | Onde esses relatos se concentram? | 13 + 9 + 6 + 3 = 31, o mesmo recorte partido por rodovia |
| Velocímetro: relatos que exigiram digitação | Quanto do trabalho ainda depende de digitar em campo (o problema) | 24 de 31 |
| Velocímetro: completos na primeira tentativa | Quantos relatos já chegaram com rodovia, km, sentido e condições | 19 de 31 |
| Velocímetro: feitos sem sinal | Quantos relatos precisariam ficar guardados até o envio | 5 de 31 |

Barras e rosca contam o mesmo recorte (31). Os velocímetros usam esse total como máximo.

## Identidade visual

O layout é próprio do grupo e diferente do exemplo da aula. O grupo pesquisou referências de dashboards de frota e logística e escolheu combinar duas direções: a organização de painel com navegação lateral e blocos claros para os dados, e o clima de sala de operação, com a navegação em grafite escuro.

| Elemento | Escolha |
|---|---|
| Navegação | Lateral em grafite no computador; barra inferior com botões grandes no celular, ao alcance do polegar |
| Paleta | Asfalto `#23272b`, concreto `#eef0ec`, branco, amarelo de sinalização `#e8a700` (atenção) e verde de placa `#0e6b4e` |
| Tipografia | Barlow e Barlow Condensed (números e quilômetros), família inspirada em sinalização viária |
| Elemento próprio | `MarcoKm`, selo no formato de marco quilométrico que identifica cada trecho e cada comando |

As cores ficam em variáveis no `:root` de `src/index.css`.

## O que entrou além do pedido

- Tela **Dashboard** e gráficos (Chart.js e react-chartjs-2), seguindo a base da aula de 07/10.
- Componentes `MarcoKm`, `Indicador` e `CabecalhoPagina`.
- Campos `tipo`, `rodovia` e `km` nas interações.

## Fica para a Sprint 2

Os comentários `TODO Sprint 2` no código marcam o lugar: dados no estado do `App.jsx`, cadastro de trechos e ocorrências, filtro, status, `analisarTrecho` em `src/utils/` e persistência em `localStorage`. O agente de voz continua fora até a sprint que tratar dele.

## Integrantes

| Integrante | RM |
|---|---|
| Leonardo Melo | 567097 |
| Luna Oliveira | 564215 |
| Mario Antônio Oliveira (Scrum Master) | 567713 |
| Vinicius Augusto Silva | 566830 |

## Divisão de tarefas

- **Leonardo Melo — Desenvolvimento das Telas e Interface:** implementação das telas Início, Consultas e Interações, desenvolvimento do layout visual e aplicação dos estilos CSS.
- **Mario Antônio Oliveira — Scrum Master e Organização do Projeto:** acompanhamento das atividades da Sprint, organização das tarefas, alinhamento entre os integrantes, acompanhamento do progresso e apoio na resolução de impedimentos.
- **Luna Oliveira — Componentização e Integração:** desenvolvimento de componentes reutilizáveis, integração dos componentes às páginas e implementação da navegação entre as telas utilizando `useState`.
- **Vinicius Augusto Silva — Dados Simulados e Qualidade:** organização dos dados operacionais e do histórico de interações em `src/data/`, integração dos dados às telas utilizando props e listas com `map` e `key`, além de testes de funcionamento e revisão dos requisitos.

**Responsabilidade compartilhada:** todos os integrantes devem contribuir para a revisão do código, a validação final da aplicação e a evolução do repositório GitHub.

## Tecnologias

React 19, Vite 8, JavaScript (JSX), CSS, Chart.js e react-chartjs-2, Oxlint.
