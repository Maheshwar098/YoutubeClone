import React from 'react'
import ShowVideo from '../ShowVideo/ShowVideo'
import './ShowVideoGrid.css';

function ShowVideoGrid({vids}) {
  return (
    <div className='container_ShowVideoGrid'>
    {
        vids?.map(
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

export default ShowVideoGrid
