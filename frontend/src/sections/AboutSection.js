import React from "react";
import { ReactComponent as Logo } from "../images/logo.svg";
import { ReactComponent as Facebook } from "../images/icon-facebook.svg";
import { ReactComponent as Twitter } from "../images/icon-twitter.svg";
import { ReactComponent as Instagram } from "../images/icon-instagram.svg";
import { ReactComponent as Pinterest } from "../images/icon-pinterest.svg";

const AboutSection = () => {
  return (
    <section className="w-full flex flex-col items-center gap-6 h-96 bg-black mt-16 px-8 py-4">
      <Logo />
      <ul className="flex flex-col md:flex-row gap-2">
        <li>About</li>
        <li>Careers</li>
        <li>Events</li>
        <li>Products</li>
        <li>Support</li>
      </ul>
      <div className="flex flex-col gap-1">
        <ul className="flex gap-1"></ul>
      </div>
    </section>
  );
};

export default AboutSection;
