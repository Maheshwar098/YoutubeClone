import React from "react";
import WHL from "../../Components/WHL/WHL";
import vid from "../../Components/Video/vid.mp4";
function WatchLater() {
  const WatchLater = [
    {
      id: 1,
      video_src: vid,
      channel: "cdd",
      title: "Video1",
      uploader: "abc",
      description: "Description of video 1",
    },
    {
      id: 2,
      video_src: vid,
      channel: "bsg",
      title: "Video2",
      uploader: "abc",
      description: "Description of video 2",
    },
    {
      id: 3,
      video_src: vid,
      channel: "pqr",
      title: "Video3",
      uploader: "abc",
      description: "Description of video 3",
    },
  ];
  return <WHL page={"Watch Later"} videoList={WatchLater} />;
}

export default WatchLater;
