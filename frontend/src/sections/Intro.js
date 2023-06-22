import React, { useState } from "react";
import Navbar from "../components/Navbar";
import MenuOverlay from "../components/MenuOverlay";

const Intro = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <section className="w-full h-screen bg-fixed bg-no-repeat bg-cover bg-bgHeroMobile md:bg-bgHeroDesktop">
      <Navbar navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
      <MenuOverlay navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
    </section>
  );
};

export default Intro;
