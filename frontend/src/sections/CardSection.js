import React from "react";
import CardComponent from "../components/CardComponent";

const CardSection = () => {
  return (
    <section className="grid grid-cols-1 gap-8 items-center">
      <h1 className="text-3xl text-center font-josefin font-light uppercase">
        Our Creations
      </h1>
      <CardComponent />
      <button className="text-black w-48 text-sm uppercase font-alata font-medium border-2 border-black py-2 px-10 tracking-widest hover:bg-black hover:text-white">
        See All
      </button>
    </section>
  );
};

export default CardSection;
