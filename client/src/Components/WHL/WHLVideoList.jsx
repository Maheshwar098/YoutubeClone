import React from "react";
import ShowVideoList from "../ShowVideoList/ShowVideoList";

function WHLVideoList({ page, videoList }) {
  return (
    <>
      {videoList.map((m) => {
        return (
        
         <>
          <ShowVideoList videoId={m.id} key={m.id}/>
          
         </>
        );
      })}
    </>
  );
}

export default WHLVideoList;
