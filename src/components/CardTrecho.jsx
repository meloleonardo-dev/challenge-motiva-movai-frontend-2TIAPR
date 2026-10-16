import MarcoKm from './MarcoKm.jsx'
import { formatarData } from '../utils/formatar.js'

export default function CardTrecho({ trecho }) {
  return (
    <article className="cartao cartao-trecho">
      <MarcoKm rodovia={trecho.rodovia} km={trecho.kmInicial} ate={trecho.kmFinal} />
      <div>
        <p className="cartao-titulo">{trecho.nome}</p>
        <p className="cartao-meta">
          Sentido {trecho.sentido}, km {trecho.kmInicial} ao {trecho.kmFinal}
        </p>
      </div>
      <p className={trecho.atencao ? 'situacao situacao-atencao' : 'situacao'}>
        {trecho.atencao && <span className="situacao-rotulo">Em atenção</span>}
        {trecho.situacao}
      </p>
      <p className="cartao-meta cartao-data">
        Atualizado em {formatarData(trecho.atualizadoEm)}
      </p>
    </article>
  )
}
