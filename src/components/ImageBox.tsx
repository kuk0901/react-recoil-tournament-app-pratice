import React, { useCallback, useEffect, useState } from "react";
// import { ValueIndex } from "./ImageContainer";
import styled from "styled-components";
import { useRecoilState, useSetRecoilState } from "recoil";
import { randomIndexState } from "../stores(Atomes)/RandomIndexAtome";
import { selectedIndexState } from "../stores(Atomes)/SelectedIndexAtom";
import { resultIndexState } from "../stores(Atomes)/ResultIndexAtom";
import { useNavigate } from "react-router-dom";
import { progressState } from "../stores(Atomes)/ProgressAtom";

export interface ValueIndex {
  value: { first: number; last: number };
}

// & 토너먼트 페이지 주요 로직
const ImageBox = (): JSX.Element => {
  // * UI 구조를 보여줄 때 사용할 전체 randomIndex state
  const [randomIndex, setRandomIndex] =
    useRecoilState<Array<number>>(randomIndexState);

  // * 선택된 이미지를 모아두는 용도의 selectedIndex state
  const [selectedIndex, setSelectedIndex] =
    useRecoilState<Array<number>>(selectedIndexState);

  // * 진행도를 보여주는 UI 구조의 값
  const setProgress = useSetRecoilState(progressState);

  const setResultIndex = useSetRecoilState(resultIndexState);
  const navigate = useNavigate();

  // * 전체 randomIndex state에서 UI에 사용할 인덱스 번호만 추출하기 위한 getter, setter
  const [valueIndex, setValueIndex] = useState<ValueIndex["value"]>({
    first: randomIndex.at(0) as number,
    last: randomIndex.at(-1) as number
  });

  const [progressBarLength, setProgressBarLength] = useState(
    randomIndex.length
  );

  const { first, last } = valueIndex;

  // * 사용한 인덱스 번호 제거로 전체 randomIndex를 변경
  const changeRandomIndex = () => {
    setRandomIndex([...randomIndex.slice(1, randomIndex.length - 1)]);
  };

  // * UI 구조에서 보여지는 사진을 위한 인덱스 번호를 바꾸는 함수
  const changeTupleIndex = useCallback(() => {
    setValueIndex({
      first: randomIndex.at(0) as number,
      last: randomIndex.at(-1) as number
    });
  }, [randomIndex]);

  useEffect(() => {
    // & 최종 결과를 보여줌
    if (randomIndex.length === 0 && selectedIndex.length === 1) {
      setResultIndex([...selectedIndex]);
      navigate("/result");
    }
    // & 선택된 인덱스를 갖고 다음 토너먼트 진행
    else if (randomIndex.length === 0 && selectedIndex.length > 1) {
      setRandomIndex(selectedIndex);
      setProgressBarLength(selectedIndex.length);
      setSelectedIndex([]);
    }
    // & 현재 토너먼트 진행
    else {
      changeTupleIndex();
      setProgress({
        barLength: progressBarLength,
        barValue: selectedIndex.length
      });
    }
  }, [
    changeTupleIndex,
    randomIndex.length,
    selectedIndex.length,
    setRandomIndex,
    selectedIndex,
    setSelectedIndex,
    setResultIndex,
    navigate,
    setProgress,
    progressBarLength
  ]);

  return (
    <>
      <Image
        key={`../image/ex${first}`}
        style={{ backgroundImage: `url("../image/ex${first}.png")` }}
        onClick={() => {
          changeRandomIndex();
          changeTupleIndex();
          setSelectedIndex([...selectedIndex, first]);
        }}
      />
      <Image
        key={`../image/ex${last}`}
        style={{ backgroundImage: `url("../image/ex${last}.png")` }}
        onClick={() => {
          changeRandomIndex();
          changeTupleIndex();
          setSelectedIndex([...selectedIndex, last]);
        }}
      />
    </>
  );
};

export default ImageBox;

const Image = styled.div`
  width: 450px;
  height: 550px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  transition: transform 0.2s;

  &:hover {
    z-index: 3;
    border: 2px solid ${({ theme }) => theme.colors.borderColor};
    transform: scale(1.07);
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    width: 300px;
    height: 500px;
  }

  @media (min-width: 480px) and (max-width: 767px) {
    width: 260px;
    height: 460px;
  }

  @media (max-width: 479px) {
    width: 220px;
    height: 420px;
  }
`;
