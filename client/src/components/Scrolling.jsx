import { ImgBanner, ScrollingW } from "../wrappers/Scrolling";
import header from "../assets/Banner2.png";

const Scrolling = () => {
  return (
    <ScrollingW>
      <div className="parallax-container">
        <div className="parallax-image">
          <ImgBanner src={header} alt="Image 01" />
        </div>
      </div>
    </ScrollingW>
  );
};

export default Scrolling;
