import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/footer.css";

export const Footer = ({
  // Si tu app scrollea en un contenedor, pásalo aquí. Si no, window.
  scrollContainerSelector = null,
  threshold = 80, // píxeles antes del final para mostrar
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const container = scrollContainerSelector
      ? document.querySelector(scrollContainerSelector)
      : null;
    const scroller = document.scrollingElement || document.documentElement;
    const target = container || window;

    const getMetrics = () => {
      if (container) {
        return {
          st: container.scrollTop,
          vh: container.clientHeight,
          sh: container.scrollHeight,
        };
      }
      return {
        st: scroller.scrollTop,
        vh: window.innerHeight,
        sh: scroller.scrollHeight,
      };
    };

    const update = () => {
      const { st, vh, sh } = getMetrics();
      const hasScroll = sh > vh + 1;
      const nearBottom = st + vh >= sh - threshold;
      setIsVisible(hasScroll && nearBottom);
    };

    target.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();

    return () => {
      target.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [scrollContainerSelector, threshold]);

  useEffect(() => {
    document.body.classList.toggle("has-sticky-footer", isVisible);
    return () => document.body.classList.remove("has-sticky-footer");
  }, [isVisible]);

  return (
    <footer
      className={`footer ${isVisible ? "show" : ""}`}
      aria-hidden={!isVisible}
    >
      <nav className="navbar bg-dark">
        <div className="container-fluid footer-inner">
          {/* IZQUIERDA: texto + logo CAF pegado */}
          <div className="footer-left">
            <p className="text ms-1 mt-1 mb-1">
              <i className="bi bi-c-circle"></i>{" "}
              Administración de Fincas Zabaleta 2025
            </p>

            <img
              src="/logo-caf.png"
              alt="CAF Madrid"
              className="caf-footer-logo"
            />
          </div>

          {/* CENTRO: iconos RRSS */}
          <div className="footer-center">
            <div className="icon">
              <a
                href="https://wa.me/34666666666"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <i className="bi bi-whatsapp text me-3"></i>
              </a>
              <a
                href="https://www.facebook.com/4geeksacademy"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <i className="bi bi-facebook text me-3"></i>
              </a>
              <a
                href="https://www.instagram.com/4geeksacademy/"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <i className="bi bi-instagram text me-0"></i>
              </a>
            </div>
          </div>

          {/* DERECHA: firma */}
          <small className="signature me-2">
            Diseño web · <span>ACS</span>
          </small>
        </div>
      </nav>
    </footer>
  );
};
