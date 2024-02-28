import React from 'react'
import styled from 'styled-components'

export const Nav = styled.nav`
    grid-column : 1/7;
`;

export const H1 = styled.h1`
    display : flex;
    flex-direction : column;
`;

export const H1_Subtitle = styled.span`
    font-size : 16px;
    font-weight : 200;
`;

export const Navbar = () => {
  return (
    <>
        <Nav>
            <H1>
                Lilian Peuron
                <H1_Subtitle>Développeur web</H1_Subtitle>
            </H1>
            <img src="" alt="" />
        </Nav>
    </>
  )
}
