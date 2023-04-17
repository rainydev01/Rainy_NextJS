import ReactPlayer from "react-player";

const VideoPlayer = ({ url, poster }) => {
  console.log(poster);
  return (
    <div className="player-wrapper" style={{ margin: "auto" }}>
      <ReactPlayer
        url={url}
        className="react-player"
        width="100%"
        height="100%"
        controls={true}
        autoPlay={true}
        poster={poster}
      />
    </div>
  );
};

export default VideoPlayer;
