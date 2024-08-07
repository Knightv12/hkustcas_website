import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import Background from "../assets/background.webp";
import emag from "../assets/Design&Promo/_IGpost&Poster_/1.png";
import oday from "../assets/Design&Promo/_IGpost&Poster_/2024_6_[3]_oday_helper.png";
import karaoke from "../assets/Design&Promo/_IGpost&Poster_/2024_6_[2]_karaoke.png";
/* import update from 'update-js';
// Default theme */
import "@splidejs/react-splide/css";
import "./Slider.css";

const SliderImage = ({ src }) => {
  return (
    <div className="w-full h-full relative flex items-center overflow-hidden">
      <img src={src} className="z-[900] p-10 slider-image" />
      <div className="absolute left-0 w-full h-full z-[-1] opacity-80">
        <img src={src} className="w-full object-contain obj" />
      </div>
    </div>
  );
};

const Slider = () => {
  return (
    <Splide
      aria-label="Posts"
      options={{
        type: "loop",
        perPage: 1,
        autoplay: true,
        interval: 4000,
        speed: 1000,
        pagination: true,
        rewind: true,
        arrows: true,
        start: 0,
      }}
    >
      
      <SplideSlide className="slide-background">
        <SliderImage src={emag} />
      </SplideSlide>
      <SplideSlide className="slide-background">
        <SliderImage src={oday} />
      </SplideSlide>
      <SplideSlide className="slide-background">
        <SliderImage src={karaoke} />
      </SplideSlide>
      <SplideSlide className="slide-background">
        <SliderImage src={Background} />
      </SplideSlide>
    </Splide>
  );
};

export default Slider;
