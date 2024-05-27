import { atom } from "recoil";
import persistAtom from "./StorageAtom";

export enum ThemeFlag {
  light,
  dark
}

export const themeState = atom<ThemeFlag>({
  key: "THEME_STATE",
  default: ThemeFlag.light,
  effects_UNSTABLE: [persistAtom]
});
