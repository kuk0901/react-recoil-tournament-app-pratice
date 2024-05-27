import React from "react";
import styled from "styled-components";
import ImageBox from "./ImageBox";
import ProgressBar from "./ProgressBar";

export interface ValueIndex {
  value: { first: number; last: number };
}

// & 단순한 컨테이너 용도의 컴포넌트
const ImageContainer = (): JSX.Element => {
  return (
    <>
      <ProgressBar />
      <Box>
        <ImageBox />
      </Box>
    </>
  );
};

export default ImageContainer;

const Box = styled.div`
  width: 700px;
  height: 550px;
  margin: auto;
  border: 2px solid ${({ theme }) => theme.colors.borderColor};
  display: flex;

  @media (min-width: 768px) and (max-width: 1023px) {
    width: 600px;
    height: 500px;
  }

  @media (min-width: 480px) and (max-width: 767px) {
    width: 520px;
    height: 460px;
  }

  @media (max-width: 479px) {
    width: 440px;
    height: 420px;
  }
`;
