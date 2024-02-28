"use client";


import IntroSection from "@/components/IntroSection";
import { Navbar } from "@/components/Navbar";
import { ProjectSection } from "@/components/ProjectSection";
import StudySection from "@/components/StudySection";
import styled from "styled-components";

export const PageContainer = styled.div`
  display : grid;
  grid-template-columns : repeat(6,1fr);
  padding : 25px;
  column-gap : 10px;
  width : 100%;
`;

export const MainContainer = styled.main`
  display : flex;
  flex-direction : column;
  row-gap: 50px;
  grid-column : 1 / 7;
`;

export default function Home() {
  return (
    <>
      <PageContainer>
        <Navbar/>
        <MainContainer>
          <IntroSection/>
          <StudySection/>
          <ProjectSection/>
        </MainContainer>
      </PageContainer>
    </>
  );
}
