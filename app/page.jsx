"use client";

import IntroSection from "@/components/IntroSection";
import { Navbar } from "@/components/Navbar";
import { Opquast } from "@/components/Opquast";
import { ProgressBar } from "@/components/ProgressBar";
import { ProjectSection } from "@/components/ProjectSection";
import StudySection from "@/components/StudySection";
import styled from "styled-components";

export const PageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  padding: 25px;
  column-gap: 10px;
  width: 100%;
  max-width: 768px;
  margin: 0 auto;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(10, 1fr);
    max-width: 100%;
    padding: 50px;
  }
`;

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  row-gap: 50px;
  grid-column: 1 / 7;

  @media (min-width: 1024px) {
    grid-column: 5 / 11;
  }
`;

export default function Home() {
  return (
    <>
      <PageContainer>
        <Navbar />
        <MainContainer className="mainContentGSAP">
          <IntroSection />
          <StudySection />
          <Opquast />
          <ProjectSection />
        </MainContainer>
      </PageContainer>
      <ProgressBar />
    </>
  );
}
