import CabecalhoPagina from '../components/CabecalhoPagina.jsx'
import PainelGraficos from '../components/PainelGraficos.jsx'

export default function Dashboard() {
  // Ponto de extensão: um gráfico novo entra em PainelGraficos, com outro
  // objeto em src/data/resumoDashboard.js e uma linha no README.
  return (
    <section>
      <CabecalhoPagina titulo="Dashboard">
        Os mesmos gráficos do Início, isolados. Eles leem um recorte simulado de 31
        relatos feitos em outubro, que não é a contagem dos trechos da Consulta.
      </CabecalhoPagina>
      <PainelGraficos />
    </section>
  )
}
