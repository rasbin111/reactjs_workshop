import { useRef, useState } from "react";

const VideoPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  function handleVideoPlay() {
    const playing = !isPlaying;
    setIsPlaying(playing);

    if (playing) {
      videoRef?.current?.play();
    } else {
      videoRef?.current?.pause();
    }
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        alignItems: "center",
        margin: "1rem",
      }}
    >
      <button onClick={handleVideoPlay}>{isPlaying ? "Pause" : "Play"}</button>
      <video
        width={"80%"}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        ref={videoRef}
      >
        <source src="./flower.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoPlayer;
