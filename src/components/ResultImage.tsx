import React from "react";
import { useRecoilValue, useResetRecoilState } from "recoil";
import { resultIndexState } from "../stores(Atomes)/ResultIndexAtom";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { randomIndexState } from "../stores(Atomes)/RandomIndexAtome";
import { selectedIndexState } from "../stores(Atomes)/SelectedIndexAtom";
import { progressState } from "../stores(Atomes)/ProgressAtom";

const ResultImage = (): JSX.Element => {
  const resultIndex = useRecoilValue(resultIndexState);

  const navigate = useNavigate();

  const resetRandomIndex = useResetRecoilState(randomIndexState);
  const resetSelectedIndex = useResetRecoilState(selectedIndexState);
  const resetResultIndex = useResetRecoilState(resultIndexState);
  const resetProgress = useResetRecoilState(progressState);

  const [index] = resultIndex;

  return (
    <>
      <Image
        key={`../image/ex${index}`}
        style={{ backgroundImage: `url("../image/ex${index}.png")` }}
      />
      <HomeButton
        onClick={() => {
          navigate("/");
          resetRandomIndex();
          resetSelectedIndex();
          resetResultIndex();
          resetProgress();
        }}
      >
        처음으로!
      </HomeButton>
    </>
  );
};

export default ResultImage;

const Image = styled.div`
  width: 400px;
  height: 600px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border: 2px solid ${({ theme }) => theme.colors.borderColor};
  margin: auto;

  @media (min-width: 480px) and (max-width: 767px) {
    width: 340px;
    height: 540px;
  }

  @media (max-width: 479px) {
    width: 290px;
    height: 460px;
  }
`;

const HomeButton = styled.button`
  display: block;
  width: 130px;
  height: 40px;
  font-size: 23px;
  font-weight: 800;
  border-radius: 7px;
  color: ${({ theme }) => theme.colors.homeButtonColor};
  background-color: ${({ theme }) => theme.colors.headerColor};
  margin: 20px auto;

  @media (min-width: 480px) and (max-width: 767px) {
    width: 115px;
    height: 36.5px;
    font-size: 21.5px;
    margin: 30px auto;
  }

  @media (max-width: 479px) {
    width: 100px;
    height: 33px;
    font-size: 20px;
    margin: 40px auto;
  }
`;
