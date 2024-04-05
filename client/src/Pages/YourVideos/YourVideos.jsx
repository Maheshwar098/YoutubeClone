import React from "react";
import LeftSidebar from "../../Components/LeftSidebar/LeftSidebar";
import ShowVideoGrid from "../../Components/ShowVideoGrid/ShowVideoGrid";
import vid from "../../Components/Video/vid.mp4";
import "./YourVideos.css";
function YourVideos() {
  const vids = [
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
  const NavList = [
    "All",
    "Java",
    "Python",
    "CPP",
    "Movies",
    "Science",
    "Animation",
    "Gaming",
    "Comedy",
    "Java",
    "Python",
  ];
  return (
    <div className="container_Pages_App">
      <LeftSidebar />

      <div className="container2_Pages_App">
        <div className="container_yourvideo">
          <h1>Your Video</h1>
          <ShowVideoGrid vids={vids} />
        </div>
      </div>
    </div>
  );
}

export default YourVideos;
