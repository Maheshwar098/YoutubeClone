import React from 'react'
import second from './SearchList.css';
import { FaSearch } from "react-icons/fa";
function SearchList({TitleArray,setSearchQuery}) {
  return (
    <>
      <div className="Container_SearchList">
      {
        TitleArray.map(m=>{
          return
           <p key={m} 
           onClick={e=>setSearchQuery(m)}
           className='titleItem'>
           
        <FaSearch/>
          {m}
        </p>
        })
      }
      {/* <p> <FaSearch/> Item1</p>
      <p>  <FaSearch/>Item2</p> */}
        
      
      </div>
    </>
  )
}

export default SearchList
