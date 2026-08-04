export default function Header() {
  return (
    <header className="header">
      <div className="wrap header-inner">
        <a className="wordmark" href="#main" aria-label="Haven, back to top">
          Haven
        </a>
        <nav className="nav" aria-label="Sections">
          <a href="#proof">Proof</a>
          <a href="#process">Process</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  )
}
