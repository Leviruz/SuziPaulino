import { ContactButtonStyle } from "../wrappers/ContactButton";
import { BsWhatsapp } from "react-icons/bs";
const ContactButton = () => {
  return (
    <ContactButtonStyle>
      <a href="https://api.whatsapp.com/send?558881703845&text=Ol%C3%A1.%20Seja%20bem%20vindo,%20digite%20o%20seu%20problema.">
        <BsWhatsapp style={{marginRight:"15px",fontSize:"20px"}}/> FALE AGORA CONOSCO
      </a>
    </ContactButtonStyle>
  );
};

export default ContactButton;
