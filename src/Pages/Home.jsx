import Slider from "../utils/Slider";
/* import Banner from "../Banner.jsx"; */
import IG from "../utils/IG.jsx";

const Home = () => {
  return (
    <div className="pt-53px !z-[9999]">
      {/* <Banner /> */}
      <Slider />
      <br/>
      <h1 className="Title my-[100px] bg-gray-800 text-white">Welcome to HKUST CAS!
      </h1>
        
      <IG />
    </div>
  );
};

export default Home;
