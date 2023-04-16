import { atom } from "recoil";
const timerData = atom({
  key: "time",
  default: 0
});

const activeState = atom({
  key: "activation",
  default: false
});

const userName = atom({
  key: "username",
  default: "Homo Sapiens"
});
export default timerData;
export { activeState, userName };
