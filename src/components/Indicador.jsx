// Um número da faixa de indicadores. "destaque" muda o fundo do bloco
// quando o número pede atenção.
export default function Indicador({ rotulo, valor, detalhe, destaque = false }) {
  return (
    <div className={destaque ? 'ind ind-destaque' : 'ind'}>
      <dt>{rotulo}</dt>
      <dd>
        <span className="ind-valor">{valor}</span>
        <span className="ind-detalhe">{detalhe}</span>
      </dd>
    </div>
  )
}
