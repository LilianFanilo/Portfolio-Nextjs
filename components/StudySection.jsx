import React from "react";
import styled from "styled-components";
import { Opquast } from "./Opquast";

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

const StudySection = () => {
  return (
    <>
      <TextContainer>
        <h2>Formations</h2>
        <p>
          2021 &gt; 2024:
          <br />
          3ème année de BUT MMI (Métiers du Multimédia et de l’Internet) à l’IUT
          de Champs-sur-Marne – Parcours Développement web et Dispositifs
          interactifs. Formation pluridisciplinaire (Programmation,
          développement web, production audiovisuelle, infographie,
          communication, expression artistique, marketing, gestion de projet
          etc.) sur 3 ans, comprenant des stages et 600 heures de projets
          tutorés.
          <br />
          <br />
          2021:
          <br />
          Baccalauréat général spécialité Mathématiques et Arts Plastiques –
          mention Bien, Lycée Jean Renoir Bondy.
        </p>
        <Opquast />
      </TextContainer>
    </>
  );
};

export default StudySection;
