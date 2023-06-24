import React from "react";
import CardComponent from "../components/CardComponent";
import { CreationDetails } from "../components/CreationDetails";

const CardSection = () => {
  return (
    <section className="flex flex-col items-center gap-8">
      <div className="flex justify-between gap-[640px]">
        <h1 className="text-3xl text-center font-josefin font-light uppercase">
          Our Creations
        </h1>
        <button className="text-black md:block hidden w-48 text-sm uppercase font-alata font-medium border-2 border-black py-2 px-10 tracking-widest hover:bg-black hover:text-white">
          See All
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 justify-items-center gap-4">
        {CreationDetails.map((card) => {
          return (
            <CardComponent
              key={card.name}
              title={card.name}
              mobilepic={card.mobile}
              desktoppic={card.desktop}
            />
          );
        })}
      </div>
      <button className="text-black md:hidden block w-48 text-sm uppercase font-alata font-medium border-2 border-black py-2 px-10 tracking-widest hover:bg-black hover:text-white">
        See All
      </button>
    </section>
  );
};

export default CardSection;
