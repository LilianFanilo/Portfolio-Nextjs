import React from "react";
import styled from "styled-components";
import Projects from "@/data/projectData";

export const ProjectCartList = (props) => {
  return (
    <>
      <ul>
        {Projects.map((project, index) => (
          <li key={index}>
            <ProjectCart
              projectName={project.projectName}
              projectTag={project.projectTag}
              projectDate={project.projectDate}
              projectImg={project.projectImg}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export const ProjectCartContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
`;

export const ProjectInfos = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const BlackLine = styled.div`
  background-color: black;
  width: 100%;
  height: 1px;
`;

export const ProjectCart = (props) => {
  return (
    <>
      {/* <Link href={props.projectLink}> */}
      <ProjectCartContainer>
        <ProjectInfos>
          <span>{props.projectName}</span>
          <span>{props.projectTag}</span>
          <span>{props.projectDate}</span>
        </ProjectInfos>
        <BlackLine></BlackLine>
        <img src={props.projectImg} alt="" />
      </ProjectCartContainer>
      {/* </Link> */}
    </>
  );
};
