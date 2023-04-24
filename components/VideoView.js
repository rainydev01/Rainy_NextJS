import VideoPlayer from "./VideoPlayer";

const ViedoView = () => {
  const videos = [
    {
      url: "../static/videos/product video.mp4",
      poster: "../static/images/blogs/ancientVsModernPictures/ancVsMod1.jpg",
    },
  ];

  return (
    <div>
      {videos.map(({ url, poster }) => (
        <VideoPlayer key={url} url={url} poster={poster} />
      ))}
    </div>
  );
};

export default ViedoView;
