import { useState } from "react";
import style from "./pomodoro.module.css";
import Timer from "./Timer/Timer";
import { useRecoilValue, useSetRecoilState } from "recoil";
import timerData, { activeState, userName } from "../Data";

export default function Pomodoro() {
  const [activeTab, setActiveTab] = useState(null);
  const setTime = useSetRecoilState(timerData);
  const setIsActive = useSetRecoilState(activeState);
  const username = useRecoilValue(userName);

  function handleTabClick(index) {
    setActiveTab(index);
    setIsActive(false);
    if (index === 0) {
      setTime(1500);
    } else if (index === 1) {
      setTime(300);
    } else {
      setTime(900);
    }
  }
  return (
    <>
      <h1>Pomodoro App</h1>
      <h3>Hello {localStorage.getItem("username")}</h3>

      <div className={style.mainContainer}>
        <div className={style.tagContainer}>
          {["Work", "Short Break", "Long Break"].map((elem, index) => (
            <button
              activeTab={activeTab === index}
              onClick={() => handleTabClick(index)}
              className={activeTab === index ? style.tabClicked : style.tabs}
              key={index}
            >
              {elem}
            </button>
          ))}
        </div>
        <div className={style.timerContainer}>
          <Timer />
        </div>
      </div>
    </>
  );
}

// ${({activeTab})=>
// activeTab &&
// css`
//  background: ${(props)=> };
// `}
// `;
