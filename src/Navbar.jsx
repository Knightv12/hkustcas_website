import logo from "./assets/LOGO(new_transparent_background).png";
import { Link } from "react-router-dom";
import speakerIcon from "./assets/speaker.png";
import muteIcon from "./assets/mute.png";
import React, { useState, useEffect, useRef } from "react";

function Navbar() {
  const [icon, setIcon] = useState(muteIcon);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio("/Grievous_Lady.wav"));

  const play_music = () => {
    const audio = audioRef.current;

    if (!isPlaying) {
      audio.play();
      setIsPlaying(true);
      setIcon(speakerIcon);
    } else {
      audio.pause();
      audio.currentTime = 0;
      setIsPlaying(false);
      setIcon(muteIcon);
    }
  };

  return (
    <nav className="navbar z-[9999]">
      <ul>
        <li className="logo-container">
          <Link to="/" style={{ padding: 0 }}>
            <img src={logo} alt="Logo" style={{ maxHeight: "50px" }} />
          </Link>
        </li>
        <li>
          <b>
            <Link to="/latestnews">最新消息</Link>
          </b>
        </li>
        <li>
          <b>
            <Link to="/about">關於我們</Link>
          </b>
          <ul className="dropdown">
            <li>
              <Link to="/about">本會簡介</Link>
            </li>
            <li>
              <Link to="/socroom">Soc房開放</Link>
            </li>
            <li>
              <Link to="/intro">幹事介紹</Link>
            </li>
          </ul>
        </li>
        <li>
          <b>
            <Link to="/membership">加入本會</Link>
          </b>
          <ul className="dropdown">
            <li>
              <Link to="/membership">會員福利</Link>
            </li>
            <li>
              <Link to="/book">借書服務</Link>
            </li>
            <li>
              <Link to="/product">學會產品</Link>
            </li>
            <li>
              <Link to="/discount">店鋪優惠</Link>
            </li>
          </ul>
        </li>
        <li>
          <b>
            <Link to="/emag">電子雜誌</Link>
          </b>
        </li>
        <li>
          <b>
            <Link to="/other">外部網頁</Link>
          </b>
          <ul className="dropdown">
            <li>
              <a
                target="_blank"
                href="https://www.instagram.com/hkustsucas/"
                title="Go to Instagram"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.facebook.com/hkustsucas/"
                title="Go to Facebook"
              >
                Facebook
              </a>
            </li>
            <li>
              <Link to="/other">友站連結</Link>
            </li>
          </ul>
        </li>
        <li>
          <b>
            <Link to="/contact">聯絡我們</Link>
          </b>
        </li>
        <li className="music flex justify-end">
          <div className="h-full w-fit grid place-items-center mr-6">
            <img
              src={icon}
              className="h-5 aspect-square"
              alt="music"
              onClick={play_music}
              style={{ maxHeight: "50px" }}
            />
          </div>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
