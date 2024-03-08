import React from "react";
import styled from "styled-components";

const SkillListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  row-gap: 5px;

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    grid-column: span 2;
    row-gap: 10px;
  }
`;

const H3 = styled.h3`
  grid-column: 1 / 4;
`;

const BlackLine = styled.div`
  grid-column: 1 / 4;
  background-color: black;
  width: 100%;
  height: 1px;
`;

const Ul = styled.ul`
  grid-column: 1 / 4;
  padding-left: 20px;
`;

const Li = styled.li`
  font-size: 14px;
  font-weight: 200;

  @media (min-width: 1024px) {
    font-size: 20px;
  }
`;

export const SkillList = (props) => {
  return (
    <>
      <SkillListContainer>
        <H3>{props.title}</H3>
        <BlackLine></BlackLine>
        <Ul>
          {props.skills.map((skill, index) => (
            <Li key={index}>{skill}</Li>
          ))}
        </Ul>
      </SkillListContainer>
    </>
  );
};
