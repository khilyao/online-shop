import s from "./VideoPlayer.module.scss";

const VideoPlayer = () => {
  return (
    <div className={s.videoWrapper}>
      <video className={s.video} src="/video.mp4" autoPlay loop muted></video>
    </div>
  );
};

export default VideoPlayer;
