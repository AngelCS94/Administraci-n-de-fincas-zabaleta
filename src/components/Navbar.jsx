import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <h1 className="navbar-title">Introducción FullStack</h1>
      </div>
      <a
        href="https://github.com/EduardoHernandezGuzman"
        target="_blank"
        rel="noopener noreferrer"
        className="navbar-link"
      >
        <img src="/gato.png" alt="GitHub" className="navbar-image" />
      </a>
    </nav>
  );
};

export default Navbar;
