import MarcoKm from './MarcoKm.jsx'
import { formatarData } from '../utils/formatar.js'

// O tipo vem escrito em português no array. Aqui ele só escolhe a cor.
const classePorTipo = {
  relato: 'tipo-relato',
  'confirmação': 'tipo-confirmacao',
  'atualização': 'tipo-atualizacao',
  encerramento: 'tipo-encerramento',
  'falha de entendimento': 'tipo-falha',
}

export default function CardInteracao({ interacao }) {
  return (
    <article className="cartao cartao-interacao">
      <MarcoKm rodovia={interacao.rodovia} km={interacao.km} />
      <div className="conversa">
        <p className="conversa-topo">
          <span className={`tipo ${classePorTipo[interacao.tipo] ?? ''}`}>
            {interacao.tipo}
          </span>
          <time dateTime={interacao.data}>{formatarData(interacao.data)}</time>
        </p>
        <p className="fala">
          <span className="quem">Fala do agente de inspeção</span>
          {interacao.texto}
        </p>
        <p className="resposta">
          <span className="quem">Resposta simulada</span>
          {interacao.resposta}
        </p>
      </div>
    </article>
  )
}
