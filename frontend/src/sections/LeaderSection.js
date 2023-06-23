import React from "react";
import interactivem from "../images/mobile/image-interactive.jpg";
import interactived from "../images/desktop/image-interactive.jpg";

const LeaderSection = () => {
  return (
    <section className="md:about-section grid px-8 py-20 gap-8">
      <picture className="about-img">
        <source media="(min-width: 400px)" srcSet={interactived} />
        <source media="(min-width: 280px)" srcSet={interactivem} />
        <img src={interactivem} alt="interactive" />
      </picture>
      <div className="about-content">
        <h1 className="text-3xl uppercase font-josefin font-light">
          The leader in interactive vr
        </h1>
        <p className="text-[15px] font-alata text-dgray">
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed business trough digital
          experiences that bind to their brand.
        </p>
      </div>
    </section>
  );
};

export default LeaderSection;
