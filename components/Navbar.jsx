import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  grid-column: 1/7;

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: sticky;
    top: 50px;
    grid-column: 1/5;
    width: 100%;
    height: calc(100vh - 100px);
  }
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 60px;
`;

const H1 = styled.h1`
  display: flex;
  flex-direction: column;
`;

const H1_Subtitle = styled.span`
  font-size: 16px;
  font-weight: 200;

  @media (min-width: 1024px) {
    font-size: 24px;
  }
`;

const NavLink = styled.li`
  position: relative;
  width: fit-content;
  list-style: none;
  font-size: 16px;
  font-weight: bold;
  font-style: italic;
  transition: all ease 0.3s;
  cursor: pointer;

  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: -10px;
    height: 0;
    width: 1px;
    background-color: green;
    transition: all ease 0.3s;
  }

  &:hover {
    color: green;
    transform: translateX(10px);

    &::after {
      height: 100%;
      width: 1px;
    }
  }
`;

export const Navbar = () => {
  return (
    <>
      <Nav>
        <TitleContainer>
          <H1>
            Lilian Peuron
            <H1_Subtitle>Développeur web</H1_Subtitle>
          </H1>
          <ul>
            <NavLink>Qui suis-je ?</NavLink>
            <NavLink>Formations</NavLink>
            <NavLink>Expériences & Projets</NavLink>
          </ul>
        </TitleContainer>
        <div>
          <ul>
            <NavLink>CV</NavLink>
            <NavLink>Email</NavLink>
            <NavLink>LinkedIn</NavLink>
            <NavLink>Github</NavLink>
          </ul>
        </div>
      </Nav>
    </>
  );
};
