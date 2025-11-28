import React from "react";
import "../../styles/header.css";

const Header = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* HERO */}
      <div className="header">
        <img
          src="https://images.unsplash.com/photo-1534298261662-f8fdd25317db?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="img-fluid-header"
          alt="Administración de fincas en Madrid"
        />

        <div className="titleheader">
          {/* Logo CAF pequeño, sutil, sobre el título */}
          <div className="caf-hero-badge">
            <img
              src="/logo-caf.png"
              alt="Colegio Profesional de Administradores de Fincas de Madrid"
              className="caf-hero-logo"
            />
          </div>

          <h1 className="display-1 fw-bold">
            ADMINISTRACIÓN DE FINCAS ZABALETA
          </h1>
          <h3>Tu administrador de fincas en Madrid</h3>
          <button
            className="btn btn-warning fw-bold"
            onClick={() => scrollToSection("contact")}
          >
            Contacta con nosotros
          </button>
        </div>
      </div>

      {/* TARJETAS */}
      <div className="info-card-container">
        <div className="info-card-wrapper">
          <div className="container-fluid">
            <div className="row gy-4">
              {/* Instagram */}
              <div className="col-lg-3 col-md-6 col-12">
                <div className="info-card h-100">
                  <i className="fa-brands fa-instagram info-card-icon"></i>
                  <h5 className="info-card-title">INSTAGRAM</h5>
                  <a
                    href="https://instagram.com/admfincaszabaleta"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="info-card-text"
                  >
                    @admfincaszabaleta
                  </a>
                </div>
              </div>

              {/* Teléfono */}
              <div className="col-lg-3 col-md-6 col-12">
                <div className="info-card h-100">
                  <i className="fa-solid fa-phone-volume info-card-icon"></i>
                  <h5 className="info-card-title">TELÉFONO</h5>
                  <a href="tel:+34623168467" className="info-card-text">
                    +34 623 168 467
                  </a>
                </div>
              </div>

              {/* Horario */}
              <div className="col-lg-3 col-md-6 col-12">
                <div className="info-card h-100">
                  <i className="fa-solid fa-clock info-card-icon"></i>
                  <h5 className="info-card-title">HORARIO</h5>
                  <p className="info-card-text">Lunes a Jueves: 10:00 - 14:00 / 16:00 - 18:00</p>
                  <p className="info-card-text">Viernes: 9:00 - 14:00</p>
                </div>
              </div>

              {/* Email */}
              <div className="col-lg-3 col-md-6 col-12">
                <div className="info-card h-100">
                  <i className="fa-solid fa-envelope info-card-icon"></i>
                  <h5 className="info-card-title">EMAIL</h5>
                  <a
                    href="mailto:info@admzabaleta.com"
                    className="info-card-text"
                  >
                    info@admzabaleta.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
