import Indicador from '../components/Indicador.jsx'
import PainelGraficos from '../components/PainelGraficos.jsx'
import TabelaTrechos from '../components/TabelaTrechos.jsx'
import { cicloOcorrencia, plataforma } from '../data/plataforma.js'
import { relatosPorTipo } from '../data/resumoDashboard.js'
import { somar } from '../utils/formatar.js'

export default function Home({ trechos, interacoes, onNavegar }) {
  const emAtencao = trechos.filter((trecho) => trecho.atencao).length
  const relatosRecorte = somar(relatosPorTipo.valores)

  // Os números saem dos arrays, não ficam escritos soltos na tela.
  const indicadores = [
    { id: 'trechos', rotulo: 'Trechos acompanhados', valor: trechos.length, detalhe: 'na tela de Consultas' },
    { id: 'atencao', rotulo: 'Em atenção', valor: emAtencao, detalhe: 'com ocorrência em andamento', destaque: true },
    { id: 'comandos', rotulo: 'Comandos simulados', valor: interacoes.length, detalhe: 'no histórico de Interações' },
    { id: 'recorte', rotulo: 'Relatos no recorte', valor: relatosRecorte, detalhe: 'outubro, dados simulados' },
  ]

  return (
    <section className="painel">
      <div className="abertura">
        <div className="problema">
          <h2>{plataforma.problemaTitulo}</h2>
          <p className="lead">{plataforma.problemaTexto}</p>
          <p className="proposta">{plataforma.proposta}</p>

          <div className="usuario">
            <h3>Quem usa a plataforma</h3>
            <p>
              <strong>{plataforma.usuario}.</strong> {plataforma.usuarioTexto}
            </p>
          </div>

          <p className="acoes">
            <button type="button" className="botao" onClick={() => onNavegar('consultas')}>
              Consultar trechos
            </button>
            <button
              type="button"
              className="botao botao-secundario"
              onClick={() => onNavegar('interacoes')}
            >
              Ver interações
            </button>
          </p>
        </div>

        <div className="ciclo">
          <h3>Por onde o grupo começa</h3>
          <p className="ciclo-intro">O ciclo de uma ocorrência em campo, com confirmação em cada passo.</p>
          <ol className="ciclo-passos">
            {cicloOcorrencia.map((passo) => (
              <li key={passo.id}>
                <strong>{passo.titulo}</strong>
                <span>{passo.texto}</span>
                <small>{passo.historias}</small>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <dl className="indicadores">
        {indicadores.map((item) => (
          <Indicador
            key={item.id}
            rotulo={item.rotulo}
            valor={item.valor}
            detalhe={item.detalhe}
            destaque={item.destaque}
          />
        ))}
      </dl>

      <PainelGraficos />
      <TabelaTrechos trechos={trechos} />
    </section>
  )
}
