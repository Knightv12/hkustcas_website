import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Slider from "../utils/Slider";
import IG from "../utils/IG.jsx";
import Banner from "../assets/Banner.jpg";
import { BackgroundBeams } from "../components/ui/background-beams.jsx";

const ParallaxPages = () => {
  return (
    <Parallax pages={2} className="parallax-container h-full">
      <ParallaxLayer offset={0} speed={0} factor={3} style={{ top: "0", left: "0" }}>
        <div className=" w-full h-full p-32 text-white" id="starrysky">
          <p>AQUALUX</p>
          {/* <BackgroundBeams /> */}
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={0.3} speed={-0.3}>
        <div className=" w-full h-full bg-transparent" id="recent_activities">
          <Slider className="absolute" />
          {/* <br/>
          <h1 className="Title my-[100px] bg-gray-800 text-white">Welcome to HKUST CAS!
          </h1> */}
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={0.7} speed={1}>
        <div className="">
          <IG />
        </div>
      </ParallaxLayer>
    </Parallax>
  );
};

export default ParallaxPages;
