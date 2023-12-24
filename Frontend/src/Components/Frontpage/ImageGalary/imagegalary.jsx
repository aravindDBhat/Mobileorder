import vivo from "./Images/vivo.jpg";
import apple from "./Images/apple.jpg";
import samsung from "./Images/Running_Samsung_Mobile.png";
import asus from "./Images/asus.jpg";
import blackberry from "./Images/blackberry.jpg";
import redme from "./Images/redme.jpg";
import motorola from "./Images/motorola.jpg";
import realme from "./Images/poco.jpg";
function ImageGalary() {
  return (
    <div className="marquee">
      <div>
        <div className="marquee-content">
          <div className="marquee-item">
            <img src={vivo}></img>
          </div>

          <div className="marquee-item">
            <img src={realme} alt="" />
          </div>

          <div className="marquee-item">
            <img src={apple} alt="" height="80%" width={100} />
          </div>

          <div className="marquee-item">
            <img src={redme} alt="" height="80%" />
          </div>

          <div className="marquee-item">
            <img src={samsung} alt="" />
          </div>

          <div className="marquee-item">
            <img src={blackberry} alt="" />
          </div>

          <div className="marquee-item">
            <img src={asus} alt="" />
          </div>

          <div className="marquee-item">
            <img src={motorola} alt="" />
          </div>

          <div className="marquee-item">
            <img src={vivo}></img>
          </div>

          <div className="marquee-item">
            <img src={realme} alt="" />
          </div>

          <div className="marquee-item">
            <img src={apple} alt="" height="80%" />
          </div>

          <div className="marquee-item">
            <img src={redme} alt="" height="80%" />
          </div>

          <div className="marquee-item">
            <img src={samsung} alt="" />
          </div>

          <div className="marquee-item">
            <img src={blackberry} alt="" />
          </div>

          <div className="marquee-item">
            <img src={asus} alt="" />
          </div>

          <div className="marquee-item">
            <img src={motorola} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default ImageGalary;
