import React from "react";
import CardComponent from "../components/CardComponent";
import { CreationDetails } from "../components/CreationDetails";

const CardSection = () => {
  return (
    <section className="grid grid-cols-1 gap-4 items-center">
      <h1 className="text-3xl text-center font-josefin font-light uppercase">
        Our Creations
      </h1>
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
      <button className="text-black w-48 text-sm uppercase font-alata font-medium border-2 border-black py-2 px-10 tracking-widest hover:bg-black hover:text-white">
        See All
      </button>
    </section>
  );
};

export default CardSection;
