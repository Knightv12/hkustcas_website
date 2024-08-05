import bannerimg from "./assets/Banner.jpg";
function Banner(){
    return(
        
      <div className="banner">
        <img
          src={bannerimg}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            objectPosition: "left",
          }}
          alt=""
        />
      </div>

    );
}
export default Banner;