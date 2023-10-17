import { CallW } from "../wrappers/CallW";

/* img */
import Hero from "../assets/heropng.png";
import ContactButton from "./ContactButton";

const Call = () => {
  return (
    <CallW>
      <div className="text-container">
        <p>
          Advogada Previdenciária atuando na área cível, criminal e
          previdênciária, Dra. Suziele Paulino é uma profissional altamente
          qualificada, com abordagem comprometida e conhecimento aprofundado a
          tornam a escolha ideal para quem busca assistência jurídica em
          assuntos complexos.
        </p>
        <p className="title">Áreas de atuação</p>
        <p className="title2">CÍVEL</p>
        <ul>
          <li>Indenizações por Danos Materiais, Morais e Estéticos;</li>
          <li>
            Ações Possessórias: reintegração de posse, imissão na posse,
            interdito proibitório e manutenção na posse
          </li>
          <li>Ações de Despejo;</li>
          <li>Regularização de propriedade imobiliária;</li>
          <li>Usucapião;</li>
          <li>Nunciação de obra nova;</li>
          <li>Ações de Responsabilidade civil;</li>
          <li>
            Ações relacionadas a obrigação de fazer, não fazer, pagar, dar;
          </li>
          <li>
            Elaboração e análise de contratos em geral: compra e venda,
            prestações de serviços, locação, comodato, entre outros; rescisão de
            contratos;
          </li>
          <li>Elaboração de notificações;</li>
        </ul>
        <p className="title2">FAMÍLIA E SUCESSÕES</p>
        <ul>
          <li>Inventário Judicial</li>
          <li>Inventário Extrajudicial – em cartório</li>
          <li>Alimentos, Revisional, Execução e Exoneração</li>
          <li>Orientação e elaboração de Testamentos</li>
          <li>Planejamento e Proteção de Bens Sucessórios.</li>
          <li>Regulamentação de visitas</li>
          <li>Guarda e Tutela de menores</li>
          <li>Curatela</li>
          <li>Interdição</li>
          <li>Investigação de Paternidade</li>
          <li>Reconhecimento e Dissolução de Sociedade de Fato</li>
          <li>Divórcio Judicial</li>
          <li>Divórcio extrajudicial</li>
          <li>Alteração de Regime de Bens</li>
          <li>Partilha de Bens</li>
        </ul>
        <p className="title2">PREVIDENCIÁRIA</p>
        <ul>
          <li>
            Auxílio ao cliente no acompanhamento e propositura de pedidos
            previdenciários e acidentários junto aos Institutos de Previdência;
          </li>
          <li>
            Propositura de ação judicial de concessão de:
            <ul>
              <li>Aposentadoria por idade</li>
              <li>Aposentadoria por invalidez</li>
              <li>Aposentadoria por tempo de contribuição</li>
              <li>Pensão por morte</li>
              <li>Auxílio-doença</li>
              <li>Auxílio-acidente</li>
              <li>Revisão de benefício</li>
            </ul>
          </li>
          <li>
            Orientação em relação aos valores de recolhimento das contribuições
            previdenciárias no plano de previdência pública;
          </li>
          <li>
            Realização de planejamento previdenciário, com elaboração de cálculo
            e simulações de valores dos benefícios nos planos de previdência
            pública.
          </li>
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
