import Slider from "../utils/Slider";
/* import Banner from "../Banner.jsx"; */
import IG from "../utils/IG.jsx";

const Home = () => {
  return (
    <div style={{paddingTop: "53px"}}>
      {/* <Banner /> */}
      <Slider />
      <br/>
      <h1 className="Title my-[100px]">Welcome to HKUST CAS!</h1>
      
      <IG />
    </div>
  );
};

export default Home;
