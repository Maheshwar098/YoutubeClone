import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { MdPlaylistAddCheck } from "react-icons/md";
import {
  RiHeartAddFill,
  RiPlayListAddFill,
  RiShareForwardLine,
} from "react-icons/ri";
import {
  AiFillDislike,
  AiFillLike,
  AiOutlineDislike,
  AiOutlineLike,
} from "react-icons/ai";
import "./LikeWatchLaterSaveBtns.css";
function LikeWatchLaterSaveBtns() {
  const [savevideo, setsavevideo] = useState(true);
  const [DislikeBtn, setDislikeBtn] = useState(false);
  const [LikeBtn, setLikeBtn] = useState(false);
  const toggleSavedVideo = () => {
    if (savevideo) {
      setsavevideo(false);
    } else {
      setsavevideo(true);
    }
  };
  const toggleLikeBtn = () => {
    if (LikeBtn) {
      setLikeBtn(false);
    } else {
      setLikeBtn(true);
    }
  };
  const toggleDislikeBtn = () => {
    if (DislikeBtn) setDislikeBtn(false);
    else setDislikeBtn(true);
  };
  return (
    <div className="btns_cont_videoPage">
      <div className="btn_VideoPage">
        <BsThreeDots />
      </div>
      <div className="btn_VideoPage">
        <div className="like_videoPage" onClick={() => toggleLikeBtn()}>
          {LikeBtn ? (
            <>
              <AiFillLike size={22} className="btns_videoPage" />
            </>
          ) : (
            <>
              <AiOutlineLike size={22} className="btns_videoPage" />
            </>
          )}
          <b>1</b>
        </div>

        <div className="like_videoPage" onClick={() => toggleDislikeBtn()}>
          {DislikeBtn ? (
            <>
              <AiFillDislike size={22} className="btns_videoPage" />
              <b>Dislike</b>
            </>
          ) : (
            <>
              <AiOutlineDislike size={22} className="btns_videoPage" />
              <b>Dislike</b>
            </>
          )}
        </div>
        <div className="like_videoPage" onClick={() => toggleSavedVideo()}>
          {savevideo ? (
            <>
              <RiPlayListAddFill size={22} className="btns_videoPage" />
              <b>Save</b>
            </>
          ) : (
            <>
              <MdPlaylistAddCheck size={22} className="btns_videoPage" />
              <b>Saved</b>
            </>
          )}
        </div>
        <div className="like_videoPage">
          <>
            <RiHeartAddFill size={22} className="btns_videoPage" />
            <b>Thanks</b>
          </>
        </div>
        <div className="like_videoPage" onClick={() => toggleSavedVideo()}>
          <>
            <RiShareForwardLine size={22} className="btns_videoPage" />
            <b>Share</b>
          </>
        </div>
      </div>
    </div>
  );
}

export default LikeWatchLaterSaveBtns;
