import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <h1 className="navbar-title">Repaso prework</h1>
        <h3>(SP-79)</h3>
      </div>
      <a
        href="https://github.com/EduardoHernandezGuzman"
        target="_blank"
        rel="noopener noreferrer"
        className="navbar-link"
      >
        <img src="/perfil.png" alt="GitHub" className="navbar-image" />
      </a>
    </nav>
  );
};

export default Navbar;
