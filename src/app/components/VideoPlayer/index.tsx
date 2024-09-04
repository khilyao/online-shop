import { useContext } from "react";
import s from "./VideoPlayer.module.scss";
import Modal from "../Modal";
import Close from "@assets/closeBtn.svg";
import { storeContext } from "@context/context";

const VideoPlayer = () => {
  const { isModalOpen, setIsModalOpen } = useContext(storeContext);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  function focusAndBlurButton() {
    const buttonElement = document.getElementById("modalBtn");
    buttonElement && buttonElement.blur();
  }

  return (
    <>
      <div className={s.videoWrapper}>
        <video
          className={s.video}
          src="yadin.mp4"
          autoPlay
          playsInline
          loop
          muted
        ></video>
        <p className={s.tempText}>Coming soon</p>
        <button
          id="modalBtn"
          onClick={() => {
            focusAndBlurButton();
            toggleModal();
          }}
          className={s.modalBtn}
        >
          {isModalOpen ? (
            <Close className={s.closeBtn} />
          ) : (
            <p>
              <span className={s.accentLetter}>C</span>
              lout
            </p>
          )}
          <span
            style={{ left: isModalOpen ? "105px" : "" }}
            className={`${s.disclaimer} ${isModalOpen && s.disclaimerOpen}`}
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
