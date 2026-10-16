// Selo no formato de marco quilométrico. Recebe a rodovia e o km;
// "ate" é opcional, para quando o item é um trecho (km inicial ao final).
export default function MarcoKm({ rodovia, km, ate }) {
  const descricao = ate
    ? `${rodovia}, do km ${km} ao km ${ate}`
    : `${rodovia}, km ${km}`

  return (
    <div className="marco" role="img" aria-label={descricao}>
      <span className="marco-rodovia">{rodovia}</span>
      <span className="marco-km">{km}</span>
      {ate && <span className="marco-ate">até {ate}</span>}
    </div>
  )
}
