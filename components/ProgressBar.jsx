import React from "react";
import { useRef } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import styled from "styled-components";

gsap.registerPlugin(ScrollTrigger);

const ProgressBarGsapContainer = styled.div`
  position: fixed;
  right: 0;
  top: 50%;
`;

const ProgressBarGsap = styled.progress`
  -webkit-appearance: none;
  appearance: none;
  height: 10px;
  border: 1px solid black;

  &::-webkit-progress-bar {
    background: transparent;
  }

  &::-webkit-progress-value {
    background-color: black;
    border: 1px solid white;
    // background-attachment: fixed;
  }
`;

export const ProgressBar = () => {
  const progressbar = useRef();

  useGSAP(
    () => {
      gsap.to("progress", {
        value: 100,
        ease: "none",
        scrollTrigger: {
          scroller: ".mainContentGSAP",
          scrub: 0.3,
        },
      });
    },
    { scope: progressbar }
  );

  return (
    <ProgressBarGsapContainer ref={progressbar}>
      <ProgressBarGsap max="100" value="0"></ProgressBarGsap>
    </ProgressBarGsapContainer>
  );
};
