import React from "react";
import { ReactComponent as Logo } from "../images/logo.svg";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between w-full py-16 px-36">
      <Logo />
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
    </nav>
  );
};

export default Navbar;
