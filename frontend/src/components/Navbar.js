import React from "react";
import { ReactComponent as Logo } from "../images/logo.svg";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between w-full py-12 px-24">
      <Logo />
      <ul>
        <li>About</li>
        <li>Careers</li>
        <li>Events</li>
        <li>Products</li>
        <li>Support</li>
      </ul>
    </nav>
  );
};

export default Navbar;
