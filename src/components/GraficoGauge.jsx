import { Doughnut } from 'react-chartjs-2'
import { registrarCharts } from '../utils/charts.js'

registrarCharts()

// Velocímetro: meia rosca. valor / maximo preenche o arco.
// Um índice novo é um objeto em velocimetros, não um desenho aqui dentro.
export default function GraficoGauge({ titulo, valor, maximo, detalhe, cor = '#3a4148' }) {
  const resto = Math.max(maximo - valor, 0)

  const dados = {
    datasets: [
      {
        data: [valor, resto],
        backgroundColor: [cor, '#e2e5e0'],
        borderWidth: 0,
      },
    ],
  }

  const opcoes = {
    responsive: true,
    maintainAspectRatio: false,
    rotation: -90,
    circumference: 180,
    cutout: '74%',
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },
  }

  return (
    <figure className="gauge">
      <div className="gauge-arco">
        <Doughnut data={dados} options={opcoes} />
        <p className="gauge-valor">
          {valor}
          <span> de {maximo}</span>
        </p>
      </div>
      <figcaption>
        <strong>{titulo}</strong>
        <span>{detalhe}</span>
      </figcaption>
    </figure>
  )
}
