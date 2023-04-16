import style from "./timer.module.css";
import { AiOutlinePlayCircle, AiOutlinePauseCircle } from "react-icons/ai";
import { RiSettings3Line } from "react-icons/ri";
import { useState, useEffect } from "react";
import timerData, { activeState } from "../../Data";
import { useRecoilState } from "recoil";
import Modal from "react-modal";
import Settings from "../Settings/Settings";

export default function Timer() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [time, setTime] = useRecoilState(timerData);
  const [isActive, setIsActive] = useRecoilState(activeState);

  useEffect(() => {
    if (isActive && time > 0) {
      const interval = setInterval(() => {
        setTime((time) => time - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [time, isActive]);
  function handleActive() {
    setIsActive(!isActive);
  }
  function getTime(time) {
    const mins = Math.floor(time / 60);
    const secs = time % 60;
    return `${mins < 10 ? `0${mins}` : mins} : ${
      secs < 10 ? `0${secs}` : secs
    }`;
  }
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className={style.timer}>
      <h2 className={style.clock}>{getTime(time)}</h2>

      <button className={style.playPause} onClick={handleActive}>
        {isActive ? <AiOutlinePauseCircle /> : <AiOutlinePlayCircle />}
      </button>
      <button className={style.settingsbtn} onClick={openModal}>
        <RiSettings3Line />
      </button>
      <Modal isOpen={isModalOpen}>
        <Settings onClose={closeModal} />
      </Modal>
    </div>
  );
}
