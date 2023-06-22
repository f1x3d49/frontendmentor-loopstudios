import React from "react";

const MenuOverlay = ({ navbarOpen, setNavbarOpen }) => {
  return (
    <nav
      className={`fixed flex top-0 left-0 w-full px-10 z-10 h-screen pt-24 bg-black transform delay-100 transition-all duration-300 ${
        navbarOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"
      }`}
    >
      <ul className="w-full flex flex-col items-center justify-start mt-16">
        <li className="nav-li">
          <a
            className="nav-link"
            onClick={() => {
              setNavbarOpen(false);
            }}
            href="/"
          >
            About
          </a>
        </li>
        <li className="nav-li">
          <a
            className="nav-link"
            onClick={() => {
              setNavbarOpen(false);
            }}
            href="/"
          >
            Careers
          </a>
        </li>
        <li className="nav-li">
          <a
            className="nav-link"
            onClick={() => {
              setNavbarOpen(false);
            }}
            href="/"
          >
            Events
          </a>
        </li>
        <li className="nav-li">
          <a
            className="nav-link"
            onClick={() => {
              setNavbarOpen(false);
            }}
            href="/"
          >
            Products
          </a>
        </li>
        <li className="nav-li">
          <a
            className="nav-link"
            onClick={() => {
              setNavbarOpen(false);
            }}
            href="/"
          >
            Support
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default MenuOverlay;
