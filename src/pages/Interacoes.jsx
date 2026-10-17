import CabecalhoPagina from '../components/CabecalhoPagina.jsx'
import CardInteracao from '../components/CardInteracao.jsx'

export default function Interacoes({ interacoes }) {
  return (
    <section>
      <CabecalhoPagina titulo="Interações">
        Histórico simulado do que o agente de inspeção teria falado ao agente de voz,
        do mais recente para o mais antigo. Cada item mostra o comando, a data e uma
        resposta fixa. Ninguém está ouvindo o microfone.
      </CabecalhoPagina>

      {interacoes.length === 0 ? (
        <p className="vazio">Nenhuma interação simulada.</p>
      ) : (
        <ul className="lista">
          {interacoes.map((interacao) => (
            <li key={interacao.id}>
              <CardInteracao interacao={interacao} />
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
