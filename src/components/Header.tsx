import React from "react";
import { useResetRecoilState, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { ThemeFlag, themeState } from "../stores(Atomes)/ThemeAtome";
import { useNavigate } from "react-router-dom";
import { randomIndexState } from "../stores(Atomes)/RandomIndexAtome";
import { selectedIndexState } from "../stores(Atomes)/SelectedIndexAtom";
import { resultIndexState } from "../stores(Atomes)/ResultIndexAtom";
import { progressState } from "../stores(Atomes)/ProgressAtom";

const Header = (): JSX.Element => {
  const setTheme = useSetRecoilState(themeState);

  const resetRandomIndex = useResetRecoilState(randomIndexState);
  const resetSelectedIndex = useResetRecoilState(selectedIndexState);
  const resetResultIndex = useResetRecoilState(resultIndexState);
  const resetProgress = useResetRecoilState(progressState);

  const navigate = useNavigate();

  return (
    <HeaderWrapper>
      <Logo
        onClick={() => {
          navigate("/");
          resetRandomIndex();
          resetSelectedIndex();
          resetResultIndex();
          resetProgress();
        }}
      >
        JIWON-TOURNAMENT
      </Logo>
      <HomeButton
        onClick={() => {
          navigate("/");
          resetRandomIndex();
          resetSelectedIndex();
          resetResultIndex();
          resetProgress();
        }}
      >
        Home
      </HomeButton>
      <ImageSource
        href="https://www.instagram.com/xjiwonparkx/"
        target="_blank"
      >
        출처: <Source>xjiwonparkx</Source>
      </ImageSource>
      <ModeButton>
        <LightButton
          onClick={() => {
            setTheme(ThemeFlag.light);
          }}
        />
        <DarkButton
          onClick={() => {
            setTheme(ThemeFlag.dark);
          }}
        />
      </ModeButton>
    </HeaderWrapper>
  );
};

export default Header;

const Logo = styled.div`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.logoColor};
  cursor: pointer;
  margin-left: 10px;
  font-weight: bold;

  @media (min-width: 480px) and (max-width: 767px) {
    font-size: 14px;
  }

  @media (max-width: 479px) {
    font-size: 13px;
  }
`;

const HomeButton = styled.div`
  font-size: 16opx;
  color: ${({ theme }) => theme.colors.homeButtonColor};
  cursor: pointer;
  font-weight: 900;

  @media (min-width: 480px) and (max-width: 767px) {
    font-size: 14px;
  }

  @media (max-width: 479px) {
    font-size: 13px;
  }
`;

const ImageSource = styled.a`
  font-size: 16px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.sourceTextColor};
  font-weight: 600;

  &:hover {
    text-decoration: underline;
  }

  @media (min-width: 480px) and (max-width: 767px) {
    font-size: 14px;
  }

  @media (max-width: 479px) {
    font-size: 13px;
  }
`;

const Source = styled.span`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.sourceTextColor};
  font-weight: 600;
`;

const ModeButton = styled.div`
  margin-right: 10px;
  display: flex;
`;

const LightButton = styled.div`
  width: 23px;
  height: 23px;
  background-color: #fff;
  border: 1px solid #fff;
  border-radius: 50%;
  margin: 2px;
  cursor: pointer;
`;

const DarkButton = styled.div`
  width: 23px;
  height: 23px;
  background-color: #000;
  border: 1px solid #000;
  border-radius: 50%;
  margin: 2px;
  cursor: pointer;
`;

const HeaderWrapper = styled.div`
  height: 52px;
  position: fixed;
  inset: 0;
  background-color: ${({ theme }) => theme.colors.headerColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 3;

  @media (min-width: 480px) and (max-width: 767px) {
    height: 60px;
  }
  @media (max-width: 479px) {
    height: 70px;
  }
`;
