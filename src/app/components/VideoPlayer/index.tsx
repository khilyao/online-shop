import s from "./VideoPlayer.module.scss";

const VideoPlayer = () => {
  return (
    <div className={s.videoWrapper}>
      <video className={s.video} src="/video.mp4" autoPlay loop muted></video>
      <p className={s.tempText}>Coming soon</p>
    </div>
  );
};

export default VideoPlayer;
