import Bosco from "../assets/Introelements/Bosco.png";
import Bosconame from "../assets/Introelements/1.png";
import Boscobg from "../assets/Introelements/3.png";
import Boscodialog from "../assets/Introelements/2.png";

import Timothy from "../assets/Introelements/Timothy.png";
import Timothyname from "../assets/Introelements/4.png";
import Timothybg from "../assets/Introelements/6.png";
import Timothydialog from "../assets/Introelements/5.png";

import Emi from "../assets/Introelements/Emi.png";
import Eminame from "../assets/Introelements/7.png";
import Emibg from "../assets/Introelements/9.png";
import Emidialog from "../assets/Introelements/8.png";

import Amber from "../assets/Introelements/Amber.png";
import Ambername from "../assets/Introelements/10.png";
import Amberbg from "../assets/Introelements/12.png";
import Amberdialog from "../assets/Introelements/11.png";

import Stephen from "../assets/Introelements/Stephen.png";
import Stephenname from "../assets/Introelements/13.png";
import Stephenbg from "../assets/Introelements/15.png";
import Stephendialog from "../assets/Introelements/14.png";

import Louz from "../assets/Introelements/Louz.png";
import Louzname from "../assets/Introelements/16.png";
import Louzbg from "../assets/Introelements/18.png";
import Louzdialog from "../assets/Introelements/17.png";

import Rocco from "../assets/Introelements/Rocco.png";
import Rocconame from "../assets/Introelements/19.png";
import Roccobg from "../assets/Introelements/21.png";
import Roccodialog from "../assets/Introelements/20.png";

import Carson from "../assets/Introelements/Carson.png";
import Carsonname from "../assets/Introelements/22.png";
import Carsonbg from "../assets/Introelements/24.png";
import Carsondialog from "../assets/Introelements/23.png";

import Windy from "../assets/Introelements/Windy.png";
import Windyname from "../assets/Introelements/25.png";
import Windybg from "../assets/Introelements/27.png";
import Windydialog from "../assets/Introelements/26.png";

import Namgor from "../assets/Introelements/Namgor.png";
import Namgorname from "../assets/Introelements/28.png";
import Namgorbg from "../assets/Introelements/30.png";
import Namgordialog from "../assets/Introelements/29.png";

import Dicky from "../assets/Introelements/Dicky.png";
import Dickyname from "../assets/Introelements/31.png";
import Dickybg from "../assets/Introelements/33.png";
import Dickydialog from "../assets/Introelements/32.png";

import Stresser from "../assets/Introelements/Stresser.png";
import Stressername from "../assets/Introelements/34.png";
import Stresserbg from "../assets/Introelements/36.png";
import Stresserdialog from "../assets/Introelements/35.png";

import Jenny from "../assets/Introelements/Jenny.png";
import Jennyname from "../assets/Introelements/37.png";
import Jennybg from "../assets/Introelements/39.png";
import Jennydialog from "../assets/Introelements/38.png";

import Elvis from "../assets/Introelements/Elvis.png";
import Elvisname from "../assets/Introelements/40.png";
import Elvisbg from "../assets/Introelements/42.png";
import Elvisdialog from "../assets/Introelements/41.png";

import Amesei from "../assets/Introelements/Amesei.png";
import Ameseiname from "../assets/Introelements/43.png";
import Ameseibg from "../assets/Introelements/45.png";
import Ameseidialog from "../assets/Introelements/44.png";

import React, { useState, useEffect } from "react";
import Bg from "/src/Bg.jsx";

const UpdateImg = ({ src, delay = 0, zIndex }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <img
      src={src}
      alt=""
      className="intro fadeIn-from-b top-0 absolute max-w-full max-h-full z-[99] "
      style={{ animationDelay: `${delay}s`, zIndex: zIndex }}
      onLoad={() => setLoaded(true)}
    />
  );
};

const IntroBox = ({ dialog, character, name, bg }) => {
  return (
    <div className="intro-box-container flex items-center justify-center ">
      <div className="introbox fadeIn w-[50%] mt-28 flex relative max-w-full justify-center overflow-hidden h-[80dvh] ">
        <UpdateImg src={dialog} zIndex={99} />

        <UpdateImg src={character} zIndex={98} delay={0.25} />

        <UpdateImg src={name} zIndex={97} delay={0.5} />

        <img
          src={bg}
          className="intro fadeIn-from-b absolute max-w-full top-0 max-h-full z-[10] bg-white"
          style={{ animationDelay: "0.55s" }}
        />
      </div>
    </div>
  );
};

const Intro = () => {
  useEffect(() => {
    const handleInView = () => {
      const intro = document.querySelectorAll(".intro");
      const windowHeight = window.innerHeight;
      intro.forEach((element,index) => {
        const rect = element.getBoundingClientRect();
        index == 0 && console.log(rect.top, windowHeight);
        if (rect.top < windowHeight && rect.bottom > 0) {
          element.style.animationPlayState = "running";
        } else {
          element.style.animationPlayState = "paused";
        }
      });
    };
    handleInView();
    window.addEventListener("scroll", handleInView);
    return () => {
      window.removeEventListener("scroll", handleInView);
    };
  }, []);

  return (
    <div className="Intro-container">
      <Bg />

      <div className="Introduction bg-slate-900 w-full h-full">
        {/* <IntroBox dialog={dialog} character={Mio} name={name} bg={bg} /> */}

        <IntroBox
          dialog={Boscodialog}
          character={Bosco}
          name={Bosconame}
          bg={Boscobg}
        />
        <IntroBox
          dialog={Timothydialog}
          character={Timothy}
          name={Timothyname}
          bg={Timothybg}
        />
        <IntroBox
          dialog={Emidialog}
          character={Emi}
          name={Eminame}
          bg={Emibg}
        />
        <IntroBox
          dialog={Amberdialog}
          character={Amber}
          name={Ambername}
          bg={Amberbg}
        />
        <IntroBox
          dialog={Stephendialog}
          character={Stephen}
          name={Stephenname}
          bg={Stephenbg}
        />
        <IntroBox
          dialog={Louzdialog}
          character={Louz}
          name={Louzname}
          bg={Louzbg}
        />
        <IntroBox
          dialog={Roccodialog}
          character={Rocco}
          name={Rocconame}
          bg={Roccobg}
        />
        <IntroBox
          dialog={Carsondialog}
          character={Carson}
          name={Carsonname}
          bg={Carsonbg}
        />
        <IntroBox
          dialog={Windydialog}
          character={Windy}
          name={Windyname}
          bg={Windybg}
        />
        <IntroBox
          dialog={Namgordialog}
          character={Namgor}
          name={Namgorname}
          bg={Namgorbg}
        />
        <IntroBox
          dialog={Dickydialog}
          character={Dicky}
          name={Dickyname}
          bg={Dickybg}
        />
        <IntroBox
          dialog={Stresserdialog}
          character={Stresser}
          name={Stressername}
          bg={Stresserbg}
        />
        <IntroBox
          dialog={Jennydialog}
          character={Jenny}
          name={Jennyname}
          bg={Jennybg}
        />
        <IntroBox
          dialog={Elvisdialog}
          character={Elvis}
          name={Elvisname}
          bg={Elvisbg}
        />
        <IntroBox
          dialog={Ameseidialog}
          character={Amesei}
          name={Ameseiname}
          bg={Ameseibg}
        />
      </div>
    </div>
  );
};

export default Intro;
