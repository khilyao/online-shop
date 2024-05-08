import s from "./VideoPlayer.module.scss";

const VideoPlayer = () => {
  return (
    <div className={s.videoWrapper}>
      <video className={s.video} src="/video.mp4" autoPlay loop muted></video>
      <p className={s.tempText}>Coming soon</p>
      <button className={s.modalBtn}>
        <span className={s.accentLetter}>C</span>lout
        <span className={s.disclaimer}>Disclaimer</span>
      </button>
    </div>
  );
};

export default VideoPlayer;
