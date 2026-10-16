import GraficoBarras from './GraficoBarras.jsx'
import GraficoPizza from './GraficoPizza.jsx'
import GraficoGauge from './GraficoGauge.jsx'
import {
  relatosPorRodovia,
  relatosPorTipo,
  velocimetros,
} from '../data/resumoDashboard.js'

// Início e Dashboard usam a mesma peça, para o gráfico não existir
// em dois lugares com números diferentes.
export default function PainelGraficos() {
  return (
    <div className="grade-graficos">
      <GraficoBarras
        titulo={relatosPorTipo.titulo}
        labels={relatosPorTipo.labels}
        valores={relatosPorTipo.valores}
      />
      <GraficoPizza
        titulo={relatosPorRodovia.titulo}
        labels={relatosPorRodovia.labels}
        valores={relatosPorRodovia.valores}
      />
      <div className="faixa-gauges">
        {velocimetros.map((item) => (
          <GraficoGauge
            key={item.id}
            titulo={item.titulo}
            valor={item.valor}
            maximo={item.maximo}
            detalhe={item.detalhe}
            cor={item.cor}
          />
        ))}
      </div>
    </div>
  )
}
