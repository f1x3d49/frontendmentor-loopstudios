import React from "react";
import { ReactComponent as Logo } from "../images/logo.svg";
import { ReactComponent as Close } from "../images/icon-close.svg";
import { ReactComponent as Hamburger } from "../images/icon-hamburger.svg";

const Navbar = ({ navbarOpen, setNavbarOpen }) => {
  return (
    <nav className="flex items-center justify-between w-full py-12 px-8 md:py-16 md:px-36">
      <Logo className="relative z-20" />
      <ul className="hidden md:flex text-lg font-alata text-white font-normal">
        <li className="p-4 relative hover:cursor-pointer nav">
          <a href="/">About</a>
        </li>
        <li className="p-4 relative hover:cursor-pointer nav">
          <a href="/">Careers</a>
        </li>
        <li className="p-4 relative hover:cursor-pointer nav">
          <a href="/">Events</a>
        </li>
        <li className="p-4 relative hover:cursor-pointer nav">
          <a href="/">Products</a>
        </li>
        <li className="p-4 relative hover:cursor-pointer nav">
          <a href="/">Support</a>
        </li>
      </ul>
      <button
        className="flex md:hidden transition ease-in-out delay-100 duration-500 z-20 relative"
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        {navbarOpen ? <Close /> : <Hamburger />}
      </button>
    </nav>
  );
};

export default Navbar;
