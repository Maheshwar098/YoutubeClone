import React from "react";
import { Link } from "react-router-dom";
import "./ShowVideo.css";
function ShowVideo({ vid }) {
  return (
    <>
      <Link to={`/videopage/${vid?.id}`}>
        <video src={`${vid?.video_src}`} className="video_ShowVideo"></video>
      </Link>
      <div className="video_description">
        <div className="Channel_logo_App">
          <div className="fstChar_logo_App">
            <>{vid?.uploader?.charAt(0).toUpperCase()}</>
          </div>
        </div>
        <div className="video_details">
          <p className="title_vid_ShowVideo">Title</p>
          <pre className="vid_view_UploadTime">1-1-2001</pre>
          <pre className="vid_view_UploadTime">
            5 views <div className="dot"></div> video uploaded 1 year ago
          </pre>
        </div>
      </div>
    </>
  );
}

export default ShowVideo;
