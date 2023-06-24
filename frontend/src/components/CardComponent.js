import React from "react";

const CardComponent = ({ mobilepic, desktoppic, title }) => {
  return (
    <div className="relative cursor-pointer mx-4">
      <div>
        <img
          src={mobilepic}
          alt={title}
          className="object-cover object-center w-full h-full md:hidden"
        />
        <img
          src={desktoppic}
          alt={title}
          className="hidden object-cover object-center w-full h-full md:block"
        />
      </div>
      <div className="absolute inset-0 flex items-end bg-gradient-to-l md:bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.5)] hover:bg-[hsla(0,0%,100%,0.7)] transition duration-300 group">
        <span className="w-[55%] pb-4 pl-4 pr-4 font-josefin text-3xl text-white uppercase transition duration-300 md:text-4xl md:p-10 group-hover:text-black">
          {title}
        </span>
      </div>
    </div>
  );
};

export default CardComponent;
