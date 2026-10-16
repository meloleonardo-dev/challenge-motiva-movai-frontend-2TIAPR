import { Bar } from 'react-chartjs-2'
import { registrarCharts } from '../utils/charts.js'

registrarCharts()

// Barras deitadas: os rótulos de tipo de ocorrência são longos e ficam
// legíveis no eixo vertical. Outro recorte é outro uso deste componente.
export default function GraficoBarras({ titulo, labels, valores, cor = '#3a4148' }) {
  const dados = {
    labels,
    datasets: [
      {
        label: 'Relatos',
        data: valores,
        backgroundColor: cor,
        borderRadius: 3,
        maxBarThickness: 26,
      },
    ],
  }

  const opcoes = {
    indexAxis: 'y',
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
    },
    scales: {
      x: {
        beginAtZero: true,
        ticks: { precision: 0 },
        grid: { color: '#e2e5e0' },
        border: { display: false },
      },
      y: {
        grid: { display: false },
        ticks: { color: '#1d2125' },
      },
    },
  }

  return (
    <figure className="grafico">
      <figcaption>{titulo}</figcaption>
      <div className="grafico-area">
        <Bar data={dados} options={opcoes} />
      </div>
    </figure>
  )
}
