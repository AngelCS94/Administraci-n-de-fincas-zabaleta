import React from "react";
import "../../styles/home.css";
import { Navbar } from "../component/Nabvar.jsx";
import Header from "../component/header.jsx";
import InfoSection from "../component/infoSection.jsx";
import Contact from "../component/contact.jsx";
import { Footer } from "../component/footer.jsx";

const Home = () => {
return (
  <>
    <Navbar />
    <Header />
    <section className="section-bg-gray">
      <div className="content-wrapper">
        <InfoSection />
      </div>
    </section>
    <section className="section-bg-white">
      <div className="content-wrapper">
        <Contact />
      </div>
    </section>
    <Footer />
  </>
);
};

export default Home;