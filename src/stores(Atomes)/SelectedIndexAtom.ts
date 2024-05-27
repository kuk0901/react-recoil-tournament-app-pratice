import { atom } from "recoil";
import persistAtom from "./StorageAtom";

const selectedIndex: number[] = [];

export const selectedIndexState = atom<Array<number>>({
  key: "SELECTED_INDEX_STATE",
  default: selectedIndex,
  effects_UNSTABLE: [persistAtom]
});
