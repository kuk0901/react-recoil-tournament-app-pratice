import { atom } from "recoil";
import persistAtom from "./StorageAtom";

const index: number[] = [];

export const resultIndexState = atom<Array<number>>({
  key: "RESULT_INDEX_STATE",
  default: index,
  effects_UNSTABLE: [persistAtom]
});
