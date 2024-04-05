import React from 'react'
import vid from "../../Components/Video/vid.mp4";
import ShowVideo from '../ShowVideo/ShowVideo';
function ShowVideoList({videoId}) {
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
  return (
    
    <div className='container_ShowVideoGrid'>
    {
        vids?.filter(q=>q.id===videoId).map(
          vi=>{
            return(
              <div key={vi.id} className='video_box_app'>
              <ShowVideo vid={vi}/>
              
              </div>
            )
          }
        )
    }
      
    </div>
  )
}

export default ShowVideoList

