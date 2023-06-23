import React from "react";
import earth from "../images/mobile/image-deep-earth.jpg";

const CardComponent = () => {
  return (
    <div className="w-full h-28 px-4 relative">
      <img
        src={earth}
        alt="eart"
        className="w-full h-full object-center object-cover"
      />
      <h1 className="text-3xl uppercase font-josefin absolute inset-0 flex items-center left-6 text-white">
        Deep Earth
      </h1>
    </div>
  );
};

export default CardComponent;
