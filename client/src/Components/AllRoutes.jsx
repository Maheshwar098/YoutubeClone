import React from "react";
import Home from "../Pages/Home/Home";
import Library from "../Pages/Library/Library";
import LikedVideo from "../Pages/LikedVideo/LikedVideo";
import WatchLater from "../Pages/WatchLater/WatchLater";
import WatchHistory from "../Pages/WatchHistory/WatchHistory";
import YourVideos from "../Pages/YourVideos/YourVideos";
import { Routes, Route, Link } from "react-router-dom";
import VideoPage from "../Pages/VideoPage/VideoPage";

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/library" element={<Library />} />
        <Route path="/likedvideos" element={<LikedVideo />} />
        <Route path="/watchlater" element={<WatchLater />} />
        <Route path="/watchHistory" element={<WatchHistory />} />
        <Route path="/yourvideos" element={<YourVideos />} />
        <Route path="/videopage/:vid" element={<VideoPage />} />
      </Routes>
    </div>
  );
}

export default AllRoutes;
