export default function Header({ marca, complemento, curso }) {
  return (
    <header className="topo">
      <div className="marca">
        <svg className="marca-icone" viewBox="0 0 32 40" aria-hidden="true">
          <path d="M4 12a12 12 0 0 1 24 0v24H4z" />
          <rect x="9" y="18" width="14" height="3" rx="1" />
          <rect x="9" y="25" width="14" height="3" rx="1" />
        </svg>
        <div>
          <strong className="marca-nome">{marca}</strong>
          <p className="marca-complemento">{complemento}</p>
        </div>
      </div>
      <p className="topo-curso">{curso}</p>
    </header>
  )
}
