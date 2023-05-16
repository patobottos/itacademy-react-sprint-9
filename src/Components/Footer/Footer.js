import { FooterStyled } from "./Footer.styled";

const Footer = () => {
  return (
    <FooterStyled>
      <p>
        Patricio Bottos for IT Academy | 
        
        <span className="mentor">
        Mentoring: 
          <a
            target="_blank"
            rel="noreferrer"
            href="https://pablomonteserin.com/"
          >
            Pablo Monteserín
          </a>
        </span>
        | <span className="city">Barcelona | 2023 </span>
      </p>
    </FooterStyled>
  );
};

export default Footer;
