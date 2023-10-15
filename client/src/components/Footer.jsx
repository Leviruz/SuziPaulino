import { FooterW } from "../wrappers/FooterW"
import ContactButton from "./ContactButton"

const Footer = () => {
  return (
    <FooterW>
      <div className="telefones">
        <h3>CEL: (88) 8170-3845 </h3>
        <h3>CEL: (88) 8137-4589 </h3>
        <p>Temos o melhor atendimento<br/>online para todo o Brasil</p>
      </div>

      <div className="horario">
        <p>Agende Seu horário</p>
        <ContactButton />
      </div>
    </FooterW>
  );
}

export default Footer