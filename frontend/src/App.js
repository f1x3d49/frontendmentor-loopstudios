import CardSection from "./sections/CardSection.js";
import Intro from "./sections/Intro.js";
import LeaderSection from "./sections/LeaderSection.js";

function App() {
  return (
    <div className="w-full min-h-screen bg-white">
      <Intro />
      <LeaderSection />
      <CardSection />
    </div>
  );
}

export default App;
