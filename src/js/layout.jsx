import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";  // Aquí se importa el componente Home que muestra Servicios
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

import { Login } from "./pages/Login";

import "../styles/home.css";
// Aquí se crean las rutas principales, incluida la que apunta a la sección de servicios
const Layout = () => {
const basename = process.env.BASENAME || "";

return (
  <div className="contenedor-page" id="app-root">
    <BrowserRouter basename={basename}>
      <ScrollToTop>
        <Navbar />

        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Login />} path="/login" />
          <Route element={<Demo />} path="/demo" />
          <Route element={<Single />} path="/single/:theid" />
          <Route element={<h1>Not found!</h1>} path="*" />
        </Routes>

        {/* Sentinela para que el Footer aparezca al acercarse al final */}
        <div id="footer-sentinel" style={{ height: 1 }} aria-hidden="true" />

        {/* Footer que observa el sentinela */}
        <Footer sentinelSelector="#footer-sentinel" />
      </ScrollToTop>
    </BrowserRouter>
  </div>
);
};

export default injectContext(Layout);
