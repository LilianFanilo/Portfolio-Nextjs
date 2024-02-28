import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

export const ProjectCartContainer = styled.div`
    display : flex;
    flex-direction : column;
    row-gap : 5px
`;

export const BlackLine = styled.div`
    background-color : black;
    width : 100%;
    height : 1px;
`;

export const ProjectCart = () => {
  return (
    <>
        <Link>
            <ProjectCartContainer>
                <div>
                    <span>Campagne Institutionnelle</span>
                    <span>Design</span>
                    <span>2023</span>
                </div>
                <BlackLine></BlackLine>
                <img src="" alt="" />
            </ProjectCartContainer>
        </Link>
    </>
  )
}
