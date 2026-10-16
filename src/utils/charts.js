import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Tooltip,
} from 'chart.js'

let registrado = false

// O Chart.js só desenha as peças registradas. Um arquivo faz isso para
// barras, pizza e velocímetro não repetirem a lista.
export function registrarCharts() {
  if (registrado) return

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement,
    Tooltip,
    Legend,
  )

  ChartJS.defaults.font.family = "'Barlow', 'Segoe UI', sans-serif"
  ChartJS.defaults.font.size = 13
  ChartJS.defaults.color = '#5e666d'
  ChartJS.defaults.borderColor = '#e2e5e0'

  registrado = true
}
