import style from "./settings.module.css";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import timerData, { userName } from "../../Data";

export default function Settings({ isOpen, onClose }) {
  const [isModalOpen, setIsModalOpen] = useState(isOpen);

  const setUserName = useSetRecoilState(userName);
  let newUsername;
  const closeModal = () => {
    setIsModalOpen(false);
    onClose();
  };

  function handleUserName(e) {
    newUsername = e.target.value;
  }
  function handleSubmit() {
    setUserName(newUsername);
    localStorage.setItem("username", newUsername);

    setIsModalOpen(false);
    onClose();
  }
  return (
    <div className={style.Modal}>
      <div className={style.ModalHeader}>
        <h3>Settings</h3>
      </div>
      <div className={style.ModalBody}>
        <p>Set a username</p>
        <input
          type="text"
          placeholder="Enter a new Username"
          onChange={handleUserName}
        />
      </div>
      <div className={style.ModalFooter}>
        <button className={style.closeBtn} onClick={closeModal}>
          Close
        </button>
        <button className={style.closeBtn} onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
}
