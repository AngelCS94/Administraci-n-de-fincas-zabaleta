import React, { useState, useRef } from "react";
import "../../styles/contact.css";
import emailjs from "@emailjs/browser";

// IDs reales de EmailJS
const SERVICE_ID = "service_5ayij3f";
const TEMPLATE_ID = "template_di0qg0e";
const PUBLIC_KEY = "-3hnOIXD-wFGqS8Ua";  // ← tu public key

const Contact = () => {
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        setStatus("success");
        if (formRef.current) formRef.current.reset();
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        setStatus("error");
        setErrorMessage(
          "Hubo un error enviando el mensaje. Inténtalo de nuevo en unos minutos."
        );
      });
  };

  return (
    <section id="contact" className="contact-section container">
      <div className="contact-card">
        <div className="card-grid">
          {/* IZQUIERDA: texto + formulario */}
          <div className="card-content">
            <h2 className="fw-bold mb-2">Solicita presupuesto</h2>
            <p className="lead text-muted mb-3">
              Solicita tu presupuesto personalizado en Madrid sin compromiso.
            </p>

            {/* Canales rápidos */}
            <div className="quick-row">
              <a
                href="https://wa.me/34629465714"
                className="quick-item"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-whatsapp"></i>
                <span>WhatsApp</span>
              </a>
              <a href="tel:+34623168467" className="quick-item">
                <i className="bi bi-telephone"></i>
                <span>(+34) 623 168 467</span>
              </a>
              <a href="mailto:info@admzabaleta.com" className="quick-item">
                <i className="bi bi-envelope"></i>
                <span>info@admzabaleta.com</span>
              </a>
            </div>

            {/* FORMULARIO */}
            <form ref={formRef} className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <div className="field">
                  <label htmlFor="name">Nombre completo</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                  />
                </div>
                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="field">
                  <label htmlFor="phone">Teléfono</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    inputMode="tel"
                    pattern="[0-9 +()-]*"
                    autoComplete="tel"
                    required
                  />
                </div>
                <div className="field">
                  <label htmlFor="subject">Asunto</label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="Solicitud de administración de comunidad"
                  />
                </div>
              </div>

              <div className="field">
                <label htmlFor="message">Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Cuéntanos brevemente qué necesita tu comunidad"
                  required
                />
              </div>

              <div className="submit-row">
                <button
                  type="submit"
                  className="btn btn-warning fw-bold w-100"
                  disabled={status === "loading"}
                >
                  {status === "loading" ? "Enviando..." : "Enviar solicitud"}
                </button>
              </div>

              {status === "success" && (
                <p className="mt-2 text-success" style={{ fontSize: "0.9rem" }}>
                  Hemos recibido tu mensaje. Te contactaremos lo antes posible.
                </p>
              )}

              {status === "error" && (
                <p className="mt-2 text-danger" style={{ fontSize: "0.9rem" }}>
                  {errorMessage}
                </p>
              )}
            </form>
          </div>

          {/* DERECHA: imagen */}
          <figure className="card-media">
            <div className="media-inner">
              <img
                src="https://images.unsplash.com/photo-1579389083078-4e7018379f7e?q=80&w=1600&auto=format&fit=crop"
                alt="Atención y asesoría para tu comunidad"
                className="card-img"
                loading="lazy"
                decoding="async"
              />
              <span className="media-overlay" aria-hidden="true"></span>
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Contact;
