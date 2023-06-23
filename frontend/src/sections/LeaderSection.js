import React from "react";
import interactivem from "../images/mobile/image-interactive.jpg";
import interactived from "../images/desktop/image-interactive.jpg";

const LeaderSection = () => {
  return (
    <section className="w-full h-auto px-8 py-20">
      <picture>
        <source media="(min-width: 400px)" srcSet={interactived} />
        <source media="(min-width: 280px)" srcSet={interactivem} />
        <img src={interactivem} alt="interactive" />
      </picture>
      <h1>The leader in interactive vr</h1>
      <p>
        Founded in 2011, Loopstudios has been producing world-class virtual
        reality projects for some of the best companies around the globe. Our
        award-winning creations have transformed business trough digital
        experiences that bind to their brand.
      </p>
    </section>
  );
};

export default LeaderSection;
