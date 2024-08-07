import facebookIcon from "./assets/facebook.png";
import instagramIcon from "./assets/instagram.png";
import Scrollup from "./assets/icons8-up-50.png";
function Footer() {
  return (
    <div className="footer !z-[999]">
      <footer
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <h5>
          &copy; {new Date().getFullYear()} 香港科技大學學生會動漫畫學會 Comics
          and Animation Society, HKUSTSU
        </h5>
        <div className="media-icons">
          <a href="https://www.instagram.com/hkustsucas/" target="_blank">
            <img src={instagramIcon} alt="Instagram" />
          </a>

          <a href="https://www.facebook.com/hkustsucas/" target="_blank">
            <img src={facebookIcon} alt="Facebook" />
          </a>
        </div>
        <a href="#" id="scrollup">
          <img src={Scrollup}></img>
        </a>
      </footer>
    </div>
  );
}
export default Footer;
