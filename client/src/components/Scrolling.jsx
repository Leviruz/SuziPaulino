import { ScrollingW } from "../wrappers/Scrolling";
import header from "../assets/Banner.jpg";

const Scrolling = () => {
  return (
    <ScrollingW>
      <div className="parallax-container">
        <div className="parallax-image">
          <img className="img_header" src={header} alt="h" />
        </div>
      </div>
    </ScrollingW>
  );
};

export default Scrolling;
