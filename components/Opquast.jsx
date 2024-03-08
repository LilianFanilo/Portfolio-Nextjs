import React from "react";
import styled from "styled-components";

export const OpquastContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  column-gap: 20px;
`;

export const OpquastImg = styled.img`
  grid-column: 1 / 3;
`;

export const OpquastTextContainer = styled.div`
  grid-column: 3 / 7;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

export const Opquast = () => {
  return (
    <OpquastContainer>
      <OpquastImg src="./images/study/opquast.svg" alt="" />
      <OpquastTextContainer>
        <p>
          Grâce à ma formation, j’ai pu aborder les problématiques de
          l’accessibilité, de l’ergonomie et de l’éco-conception et ainsi
          acquérir la certification <strong>Opquast</strong> de{" "}
          <strong>niveau avancé </strong>
          avec un score de <strong>820/1000</strong>. Acquérir ces compétences
          me donne la possibilité de concevoir des sites dans une optique de
          qualité et d’accessibilité à tous.
        </p>
        <a href="https://directory.opquast.com/fr/certificat/LSD581/">
          <strong>Certificat LSD581</strong>
        </a>
      </OpquastTextContainer>
    </OpquastContainer>
  );
};
