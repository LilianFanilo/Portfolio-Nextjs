import React from "react";
import styled from "styled-components";

const ProgressBarGsap = styled.progress`
  position: absolute;
  top: 50%;
  right: -3.5%;
  transform: rotate(90deg);
  -webkit-appearance: none;
  appearance: none;
  height: 10px;
  border: 1px solid var(--color-black);

  &::-webkit-progress-bar {
    background: transparent;
  }

  &::-webkit-progress-value {
    background-color: var(--color-black);
    border: 1px solid white;
    // background-attachment: fixed;
  }
`;

export const ProgressBar = () => {
  return <ProgressBarGsap max="100" value="0"></ProgressBarGsap>;
};
