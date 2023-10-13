import { CallW } from "../wrappers/CallW";

/* img */
import Hero from "../assets/heropng.png";
import ContactButton from "./ContactButton";

const Call = () => {
  return (
    <CallW>
      <div className="text-container">
        <p>
          Advogado Previdenciária atuando em todo território nacional, Dra. Suziele Paulino tem conhecimento, experiência e equipe para garantir os
          direitos fundamentais dos cidadãos em relação à assistência social e à
          previdência social. Com agilidade e qualidade no serviço prestado.
        </p>
        <ul>
          <li>Aposentadoria (invalidez, idade, rural, etc);</li>
          <li>Auxílio doença;</li>
          <li>Pensão por morte;</li>
          <li>Auxílio reclusão;</li>
          <li>Revisão de benefícios;</li>
        </ul>
        <div className="align">
          <h3>Posso te ajudar?</h3>
          <ContactButton />
        </div>
      </div>
      <div className="image-container">
        <img src={Hero} alt="Suziele Paulino" className="img_hero" />
      </div>
    </CallW>
  );
};

export default Call;
