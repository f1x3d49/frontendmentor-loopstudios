import React from "react";
import interactivem from "../images/mobile/image-interactive.jpg";
import interactived from "../images/desktop/image-interactive.jpg";

const LeaderSection = () => {
  return (
    <section className="flex flex-col md:flex-row text-center items-center justify-center gap-8 w-full h-auto px-8 py-20">
      <picture>
        <source media="(min-width: 400px)" srcSet={interactived} />
        <source media="(min-width: 280px)" srcSet={interactivem} />
        <img src={interactivem} alt="interactive" />
      </picture>
      <h1 className="text-3xl uppercase font-josefin font-light">
        The leader in interactive vr
      </h1>
      <p className="text-[15px] font-alata text-dgray">
        Founded in 2011, Loopstudios has been producing world-class virtual
        reality projects for some of the best companies around the globe. Our
        award-winning creations have transformed business trough digital
        experiences that bind to their brand.
      </p>
    </section>
  );
};

export default LeaderSection;
