import React from "react";
import { ReactComponent as Logo } from "../images/logo.svg";
import { ReactComponent as Facebook } from "../images/icon-facebook.svg";
import { ReactComponent as Twitter } from "../images/icon-twitter.svg";
import { ReactComponent as Instagram } from "../images/icon-instagram.svg";
import { ReactComponent as Pinterest } from "../images/icon-pinterest.svg";

const AboutSection = () => {
  return (
    <section className="w-full flex flex-col md:flex-row md:justify-between items-center gap-8 md:h-48 h-[420px] bg-black mt-16 md:px-24 px-8 py-10">
      <div className="flex flex-col gap-8 md:gap-10">
        <Logo className="scale-90" />
        <ul className="flex flex-col md:flex-row gap-4 font-alata font-light text-white text-center">
          <li className="relative nav hover:cursor-pointer">About</li>
          <li className="relative nav hover:cursor-pointer">Careers</li>
          <li className="relative nav hover:cursor-pointer">Events</li>
          <li className="relative nav hover:cursor-pointer">Products</li>
          <li className="relative nav hover:cursor-pointer">Support</li>
        </ul>
      </div>
      <div className="flex flex-col gap-2 items-center md:gap-10 md:items-end">
        <ul className="flex gap-4">
          <li>
            <Facebook className="relative nav hover:cursor-pointer" />
          </li>
          <li>
            <Twitter className="relative nav hover:cursor-pointer" />
          </li>
          <li>
            <Pinterest className="relative nav hover:cursor-pointer" />
          </li>
          <li>
            <Instagram className="relative nav hover:cursor-pointer" />
          </li>
        </ul>
        <p className="text-vdgray text-sm font-alata">
          &copy; 2021 Loopstudios. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
