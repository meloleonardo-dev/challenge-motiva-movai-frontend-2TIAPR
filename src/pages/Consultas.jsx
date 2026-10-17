import CabecalhoPagina from '../components/CabecalhoPagina.jsx'
import CardTrecho from '../components/CardTrecho.jsx'

export default function Consultas({ trechos }) {
  // TODO Sprint 2: a consulta deixa de ser só esta lista fixa.
  // O agente escolhe o trecho atual e vê as ocorrências daquele trecho,
  // com filtro. Não implementar o filtro nesta sprint.
  return (
    <section>
      <CabecalhoPagina titulo="Consultas">
        Trechos acompanhados e a situação de cada um. Nesta sprint a lista vem de um
        array fixo com dados simulados. Nada é cadastrado pelo usuário.
      </CabecalhoPagina>

      {trechos.length === 0 ? (
        <p className="vazio">Nenhum trecho para consultar.</p>
      ) : (
        <ul className="lista">
          {trechos.map((trecho) => (
            <li key={trecho.id}>
              <CardTrecho trecho={trecho} />
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
