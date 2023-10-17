import { HeaderW } from "../wrappers/HeaderW";
import Logo from "../assets/logoSuzi.png"
const Header = () => {
  return (
    <HeaderW>
      <div className="container">
      <img src={Logo} alt="Logo Suzi adv" className="logo" />
      <p className="gradient"> Adv. Suziele Paulino </p>
      </div>
    </HeaderW>
  );
};
export default Header;
