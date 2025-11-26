import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/footer.css";

export const Footer = ({
  scrollContainerSelector = null,
  threshold = 80
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const container = scrollContainerSelector ? document.querySelector(scrollContainerSelector) : null;
    const scroller = document.scrollingElement || document.documentElement;
    const target = container || window;

    const getMetrics = () => {
      if (container) {
        return {
          st: container.scrollTop,
          vh: container.clientHeight,
          sh: container.scrollHeight
        };
      }
      return {
        st: scroller.scrollTop,
        vh: window.innerHeight,
        sh: scroller.scrollHeight
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
    <footer className={`footer ${isVisible ? "show" : ""}`} aria-hidden={!isVisible}>
      <nav className="navbar bg-dark">
        <div className="container-fluid footer-row">

          {/* IZQUIERDA */}
          <span className="footer-left text">
            <i className="bi bi-c-circle"></i> Administración de Fincas Zabaleta 2025
          </span>

          {/* CENTRO - ICONOS */}
          <div className="footer-icons">
            <a href="#" aria-label="WhatsApp"><i className="bi bi-whatsapp"></i></a>
            <a href="#" aria-label="Facebook"><i className="bi bi-facebook"></i></a>
            <a href="#" aria-label="Instagram"><i className="bi bi-instagram"></i></a>
          </div>

          {/* DERECHA - FIRMA */}
          <span className="acs-signature">Diseño web · ACS</span>

        </div>
      </nav>
    </footer>
  );
};
