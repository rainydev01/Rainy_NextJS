import VideoPlayer from "../components/VideoPlayer";

const ViedoView = () => {
  const videoUrl = "../static/videos/product video.mp4";

  return (
    <div>
      <VideoPlayer url={videoUrl} />
    </div>
  );
};

export default ViedoView;
