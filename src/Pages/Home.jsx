import ParallaxPages from "../utils/Parallax.jsx";
import { BackgroundBeams } from "../components/ui/background-beams.jsx";

const Home = () => {
  return (
    <div className="!z-[9999] relative flex h-full overflow-hidden">
      <div className="flex-1 h-full w-full">
        
        <ParallaxPages />
      </div>
    </div>
  );
};

export default Home;
