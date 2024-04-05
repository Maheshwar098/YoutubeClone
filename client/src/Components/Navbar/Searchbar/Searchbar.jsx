import React from "react";
import "./Searchbar.css";
import { BsMicFill } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import SearchList from "./SearchList";
import { useState } from "react";
function Searchbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchListA, setSearchList] = useState(false);
  const TitleArray = ["video1", "video2", "Animation Video", "Movies"].filter(
    (q) => q.toUpperCase().includes(searchQuery)
  );

  return (
    <div className="Searchbar_Container">
      <div className="Searchbar_Container2">
        <div className="search_div">
          <input
            type="text"
            className="iBox_SearchBar"
            placeholder="Search"
            onChange={(e) => setSearchQuery(e.target.value)}
            value={searchQuery}
            onClick={(e) => setSearchList(true)}
          />
          <FaSearch
            className="searchIcon_SearchBar"
            onClick={(e) => setSearchList(false)}
          />
          <BsMicFill className="Mic_Searchbar" />
          {searchQuery && searchListA && (
            <SearchList
              setSearchQuery={setSearchQuery}
              TitleArray={TitleArray}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Searchbar;
