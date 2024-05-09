import { useState } from "react";
import s from "./VideoPlayer.module.scss";
import Modal from "../Modal";

const VideoPlayer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className={s.videoWrapper}>
        <video className={s.video} src="/video.mp4" autoPlay loop muted></video>
        <p className={s.tempText}>Coming soon</p>
        <button onClick={openModal} className={s.modalBtn}>
          <span className={s.accentLetter}>C</span>lout
          <span className={s.disclaimer}>Disclaimer</span>
        </button>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default VideoPlayer;
