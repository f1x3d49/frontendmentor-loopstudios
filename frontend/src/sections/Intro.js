import React, { useState } from "react";
import Navbar from "../components/Navbar";
import MenuOverlay from "../components/MenuOverlay";

const Intro = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <section className="w-full h-screen flex flex-col md:gap-16 gap-44 md:items-start items-center bg-fixed bg-no-repeat bg-cover bg-bgHeroMobile md:bg-bgHeroDesktop">
      <Navbar navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
      <MenuOverlay navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
      <h1 className="text-4xl h-[32%] md:text-8xl font-josefin text-left opacity-90 md:px-10 md:py-8 px-8 md:h-auto md:w-[50%] md:ml-36 py-16 border-2 border-white mx-8 text-white uppercase">
        Immersive Experiences that Deliver
      </h1>
    </section>
  );
};

export default Intro;
