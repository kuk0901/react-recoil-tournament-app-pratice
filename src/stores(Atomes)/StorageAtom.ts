import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: "ALL_STATE",
  storage: sessionStorage
});

export default persistAtom;
