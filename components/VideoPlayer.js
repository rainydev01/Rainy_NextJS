import ReactPlayer from "react-player";

const VideoPlayer = ({ url }) => {
  return (
    <div className="player-wrapper" style={{ margin: "auto" }}>
      <ReactPlayer
        url={url}
        className="react-player"
        width="60%"
        height="100%"
        controls={true}
      />
    </div>
  );
};

export default VideoPlayer;
