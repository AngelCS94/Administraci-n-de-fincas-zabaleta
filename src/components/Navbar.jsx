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
        Mi Github
      </a>
    </nav>
  );
};

export default Navbar;
