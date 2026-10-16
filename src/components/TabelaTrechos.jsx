import { formatarData } from '../utils/formatar.js'

export default function TabelaTrechos({ trechos }) {
  return (
    <section className="leitura" aria-labelledby="titulo-leitura">
      <h3 id="titulo-leitura">Leitura rápida dos trechos</h3>
      {trechos.length === 0 ? (
        <p className="vazio">Nenhum trecho para consultar.</p>
      ) : (
        <div className="tabela-rolagem">
          <table className="tabela">
            <thead>
              <tr>
                <th scope="col">Rodovia</th>
                <th scope="col">Trecho</th>
                <th scope="col">Sentido</th>
                <th scope="col">Situação</th>
                <th scope="col">Atualizado</th>
              </tr>
            </thead>
            <tbody>
              {trechos.map((trecho) => (
                <tr key={trecho.id}>
                  <td>
                    <strong>{trecho.rodovia}</strong>
                    <span className="tabela-nome">{trecho.nome}</span>
                  </td>
                  <td className="tabela-km">
                    km {trecho.kmInicial} ao {trecho.kmFinal}
                  </td>
                  <td>{trecho.sentido}</td>
                  <td className={trecho.atencao ? 'celula-atencao' : undefined}>
                    {trecho.situacao}
                  </td>
                  <td className="tabela-data">{formatarData(trecho.atualizadoEm)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  )
}
