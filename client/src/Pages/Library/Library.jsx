import React from "react";
import LeftSidebar from "../../Components/LeftSidebar/LeftSidebar";
import "./Library.css";
import vid from "../../Components/Video/vid.mp4";
import { FaHistory } from "react-icons/fa";
import WHLVideoList from "../../Components/WHL/WHLVideoList";
import { MdOutlineWatchLater } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
function Library() {
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
    // {
    //   id: 3,
    //   video_src: vid,
    //   channel: "a",
    //   title: "Video3",
    //   uploader: "abcd",
    //   description: "Description of video 3",
    // },
  ];
  return (
    <div className="container_Pages_App">
      <LeftSidebar />
      <div className="container2_Pages_App">
        <div className="container_libraryPage">
          <h1 className="title_container_libraryPage">
            <b>
              <FaHistory />
            </b>
            <b>History</b>
          </h1>
          <div className="container_videoList_libraryPage">
            <WHLVideoList page={"History"} videoList={vids} />
          </div>
        </div>
        <div className="container_libraryPage">
          <h1 className="title_container_libraryPage">
            <b>
              <MdOutlineWatchLater />
            </b>
            <b>Watch Later</b>
          </h1>
          <div className="container_videoList_libraryPage">
            <WHLVideoList page={"Watch Later"} videoList={vids} />
          </div>
        </div>
        <div className="container_libraryPage">
          <h1 className="title_container_libraryPage">
            <b>
              <AiOutlineLike />
            </b>
            <b>Liked Videos</b>
          </h1>
          <div className="container_videoList_libraryPage">
            <WHLVideoList page={"Watch Later"} videoList={vids} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Library;
