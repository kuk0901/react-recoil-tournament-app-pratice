import { atom } from "recoil";
import persistAtom from "./StorageAtom";

interface Progress {
  barLength: number;
  barValue: number;
}

export const progressState = atom<Progress>({
  key: "PROGRESS_STATE",
  default: { barLength: 0, barValue: 0 },
  effects_UNSTABLE: [persistAtom]
});
