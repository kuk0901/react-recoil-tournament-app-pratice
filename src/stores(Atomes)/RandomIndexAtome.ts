import { atom } from "recoil";
import persistAtom from "./StorageAtom";

const randomIndexValue: number[] = randomIndex();

export const randomIndexState = atom<Array<number>>({
  key: "RANDOM_INDEX_STATE",
  default: randomIndexValue,
  effects_UNSTABLE: [persistAtom]
});

function randomIndex(num: number = 16): Array<number> {
  let randomIndexArray = [];
  for (let i = 0; i < num; i++) {
    let randomNum = Math.floor(Math.random() * 23);
    if (randomIndexArray.indexOf(randomNum) === -1) {
      randomIndexArray.push(randomNum);
    } else {
      i--;
    }
  }
  return randomIndexArray;
}
