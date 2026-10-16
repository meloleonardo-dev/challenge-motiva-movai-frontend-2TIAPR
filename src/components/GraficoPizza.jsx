import { Doughnut } from 'react-chartjs-2'
import { registrarCharts } from '../utils/charts.js'
import { somar } from '../utils/formatar.js'

registrarCharts()

const CORES = ['#23272b', '#e8a700', '#0e6b4e', '#a7afab']

// Parte de um todo, desenhada como rosca para o total caber no meio.
// O total sai da soma dos valores, não de um número escrito à parte.
export default function GraficoPizza({ titulo, labels, valores }) {
  const total = somar(valores)

  const dados = {
    labels,
    datasets: [
      {
        data: valores,
        backgroundColor: labels.map((_, indice) => CORES[indice % CORES.length]),
        borderWidth: 2,
        borderColor: '#ffffff',
      },
    ],
  }

  const opcoes = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '62%',
    plugins: {
      legend: {
        position: 'bottom',
        labels: { boxWidth: 10, boxHeight: 10, padding: 14, color: '#1d2125' },
      },
    },
  }

  return (
    <figure className="grafico">
      <figcaption>{titulo}</figcaption>
      <div className="grafico-area grafico-area-rosca">
        <Doughnut data={dados} options={opcoes} />
        <p className="rosca-total">
          {total}
          <span>relatos</span>
        </p>
      </div>
    </figure>
  )
}
