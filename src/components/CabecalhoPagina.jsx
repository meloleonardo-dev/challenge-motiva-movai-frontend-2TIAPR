// Título e texto de abertura de cada tela. children é o parágrafo.
export default function CabecalhoPagina({ titulo, children }) {
  return (
    <div className="cabecalho-pagina">
      <h2>{titulo}</h2>
      <p className="intro">{children}</p>
    </div>
  )
}
