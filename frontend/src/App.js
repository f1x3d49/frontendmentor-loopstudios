import AboutSection from "./sections/AboutSection.js";
import CardSection from "./sections/CardSection.js";
import Intro from "./sections/Intro.js";
import LeaderSection from "./sections/LeaderSection.js";

function App() {
  return (
    <div className="w-full min-h-screen bg-white">
      <Intro />
      <LeaderSection />
      <CardSection />
      <AboutSection />
    </div>
  );
}

export default App;
