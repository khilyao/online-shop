import { useState } from "react";
import s from "./VideoPlayer.module.scss";
import Modal from "../Modal";
import Close from "@assets/closeBtn.svg";

const VideoPlayer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <div className={s.videoWrapper}>
        <video className={s.video} src="/video.mp4" autoPlay loop muted></video>
        <p className={s.tempText}>Coming soon</p>
        <button onClick={toggleModal} className={s.modalBtn}>
          {isModalOpen ? (
            <Close className={s.closeBtn} />
          ) : (
            <p>
              <span className={s.accentLetter}>C</span>
              lout
            </p>
          )}
          <span
            style={{ left: isModalOpen ? "102px" : "" }}
            className={`${s.disclaimer} ${isModalOpen ? s.disclaimerOpen : ""}`}
          >
            {isModalOpen ? "Close" : "Disclaimer"}
          </span>
        </button>
      </div>
      <Modal isOpen={isModalOpen} onClose={toggleModal} />
    </>
  );
};

export default VideoPlayer;
