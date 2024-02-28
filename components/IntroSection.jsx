import React from 'react'
import styled from 'styled-components';
import { SkillList } from './SkillList';

export const TextContainer = styled.div`
    display : flex;
    flex-direction : column;
    row-gap : 10px;
`;

export const ListsContainer = styled.div`
    display : flex;
    flex-direction : column;
    row-gap : 35px;
`;

const IntroSection = () => {

    const DevList = [
        "React.js",
        "Next.js",
        "PHP",
        "WordPress",
        "Git"
    ]

    const DesignList = [
        "React.js",
        "Next.js"
    ]

    const OfficeList = [
        "React.js",
        "Next.js"
    ]

  return (
    <>
        <section>
            <TextContainer>
                <h2>Qui Suis-je ?</h2>
                <p>20 ans - À la recherche d’un contrat d’alternance pour 2023-2024. Mon stage de développeur web chez Peexeo m’a permis de renforcer mes compétences en programmation, de participer à des projets clients et d'acquérir une expérience concrète dans le domaine du développement web, mais aussi de partager des idées et d'échanger au sein d'une équipe.</p>  
            </TextContainer>
            <ListsContainer>
                <SkillList title="Développement web" skills={DevList} />
                <SkillList title="Design" skills={DesignList} />
                <SkillList title="Bureautique" skills={OfficeList} />
            </ListsContainer>
        </section>
    </>
  )
}

export default IntroSection