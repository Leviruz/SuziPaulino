import { ContactButtonStyle } from "../wrappers/ContactButton";
import { BsWhatsapp } from "react-icons/bs";
const ContactButton = () => {
  return (
    <ContactButtonStyle>
      <a href="https://wa.me/558881703845?text=Olá!+Estamos+a+disposição+para+ajudá-los.">
        <BsWhatsapp style={{ marginRight: "15px", fontSize: "20px" }} /> FALE
        AGORA CONOSCO
      </a>
    </ContactButtonStyle>
  );
};

export default ContactButton;
