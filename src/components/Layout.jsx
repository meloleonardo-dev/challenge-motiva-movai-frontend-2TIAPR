import Header from './Header.jsx'
import Nav from './Nav.jsx'
import { plataforma } from '../data/plataforma.js'

export default function Layout({ children, paginaAtual, onNavegar }) {
  return (
    <div className="casca">
      <aside className="lateral">
        <Header
          marca={plataforma.marca}
          complemento={plataforma.complemento}
          curso={plataforma.curso}
        />
        <Nav paginaAtual={paginaAtual} onNavegar={onNavegar} />
        <p className="lateral-nota">
          Sprint 1: os dados são simulados e o agente de voz ainda não existe.
        </p>
      </aside>
      <main className="miolo">{children}</main>
    </div>
  )
}
