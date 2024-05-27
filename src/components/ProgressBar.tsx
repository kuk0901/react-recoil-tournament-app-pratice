import React from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { progressState } from "../stores(Atomes)/ProgressAtom";

const ProgressBar = (): JSX.Element => {
  const { barLength, barValue } = useRecoilValue(progressState);

  return (
    <Progress>
      {barValue} / {barLength / 2}
    </Progress>
  );
};

export default ProgressBar;

const Progress = styled.div`
  width: 100px;
  height: 45px;
  border: 2px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.homeButtonColor};
  font-size: 30px;
  text-align: center;
  margin: 0 auto 30px;

  @media (min-width: 480px) and (max-width: 767px) {
    height: 40px;
    font-size: 28px;
  }

  @media (max-width: 479px) {
    height: 35px;
    font-size: 25px;
  }
`;
