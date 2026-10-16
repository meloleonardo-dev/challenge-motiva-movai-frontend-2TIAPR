// Fica fora da função: não é estado. id vai para o useState do App,
// rotulo é o texto do botão.
const itens = [
  { id: 'inicio', rotulo: 'Início' },
  { id: 'consultas', rotulo: 'Consultas' },
  { id: 'interacoes', rotulo: 'Interações' },
  { id: 'dashboard', rotulo: 'Dashboard' },
]

export default function Nav({ paginaAtual, onNavegar }) {
  return (
    <nav className="nav" aria-label="Telas da plataforma">
      {itens.map((item) => (
        <button
          key={item.id}
          type="button"
          className={paginaAtual === item.id ? 'nav-item ativo' : 'nav-item'}
          aria-current={paginaAtual === item.id ? 'page' : undefined}
          onClick={() => onNavegar(item.id)}
        >
          {item.rotulo}
        </button>
      ))}
    </nav>
  )
}
