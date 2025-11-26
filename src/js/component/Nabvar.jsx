import React, { useState, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/Navbar.css";           // 👈 IMPORTANTE: importa el CSS del navbar
import { Context } from "../store/appContext.jsx";

export const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { actions, store } = useContext(Context);

  const toggleNavbar = () => setIsExpanded(!isExpanded);

  const handleLogout = () => {
    setIsExpanded(false);
    actions.logout();
  };

  const userType = localStorage.getItem("userType");

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsExpanded(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark custom-navbar w-100">
      <div className="container-fluid px-4">

        {/* LOGO */}
        <a href="/" className="navbar-brand d-flex align-items-center">
          <img
            src="/logo-zabaleta.JPG"
            alt="Administración de Fincas Zabaleta Logo"
            className="navbar-logo"
          />
        </a>

        {/* BOTÓN MÓVIL */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
          aria-controls="navbarNav"
          aria-expanded={isExpanded}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* LINKS */}
        <div
          className={`collapse navbar-collapse justify-content-end ${
            isExpanded ? "show" : ""
          }`}
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <button
                className="nav-link btn btn-link"
                onClick={() => scrollToSection("services")}
              >
                Servicios
              </button>
            </li>

            <li className="nav-item">
              <button
                className="nav-link btn btn-link"
                onClick={() => scrollToSection("contact")}
              >
                Contacto
              </button>
            </li>

            {userType === "employee" && (
              <li className="nav-item">
                <a href="/dashboard" className="nav-link">
                  Dashboard
                </a>
              </li>
            )}

            {userType === "customer" && (
              <li className="nav-item">
                <a href="/dashboard-customer" className="nav-link">
                  Dashboard
                </a>
              </li>
            )}

            {store.auth ? (
              <li className="nav-item">
                <button
                  className="nav-link btn btn-link"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </li>
            ) : (
              <li className="nav-item">
                <a className="nav-link" href="/login">
                  Login
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};
