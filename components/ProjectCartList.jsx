import React from "react";
import styled from "styled-components";
import Projects from "@/data/projectData";
import Link from "next/link";

const ProjectCartListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Li = styled.li`
  list-style: none;
`;

export const ProjectCartList = () => {
  return (
    <>
      <ProjectCartListContainer>
        {Projects.map((project, index) => (
          <Li key={index}>
            <ProjectCart
              projectName={project.projectName}
              projectTag={project.projectTag}
              projectDate={project.projectDate}
              projectImg={project.projectImg}
              projectLink={project.projectLink}
            />
          </Li>
        ))}
      </ProjectCartListContainer>
    </>
  );
};

const ProjectCartContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
  width: 340px;
`;

const ProjectInfos = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProjectName = styled.span`
  font-size: 15px;
  font-weight: 500;
`;

const ProjectTag = styled.span`
  font-size: 14px;
  font-weight: 200;
`;

const ProjectDate = styled.span`
  font-size: 15px;
  font-weight: 500;
`;

const BlackLine = styled.div`
  background-color: black;
  width: 100%;
  height: 1px;
`;

const ImgContainer = styled.div`
  width: 100%;
  height: 170px;
  overflow: hidden;
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0) 100%
  );
`;

const ProjectImg = styled.img`
  position: relative;
  z-index: -1;
  width: 100%;
  transform: translateY(-25%);
`;

export const ProjectCart = (props) => {
  return (
    <>
      <Link href={props.projectLink}>
        <ProjectCartContainer>
          <ProjectInfos>
            <ProjectName>{props.projectName}</ProjectName>
            <ProjectTag>{props.projectTag}</ProjectTag>
            <ProjectDate>{props.projectDate}</ProjectDate>
          </ProjectInfos>
          <BlackLine></BlackLine>
          <ImgContainer>
            <ProjectImg src={props.projectImg} />
          </ImgContainer>
        </ProjectCartContainer>
      </Link>
    </>
  );
};
