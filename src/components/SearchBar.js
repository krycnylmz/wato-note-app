import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchBarValue } from "../redux/notes/notesSlice";

function SearchBar() {
  const [searchValue, setSearchValue] = useState("")
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(setSearchBarValue(searchValue));
  }, [searchValue ,dispatch])
  
  // setSearchBarValue
  return (
    <div className="flex grow w-full">
      <input
        onChange={(e) => setSearchValue(e.target.value)}
        value={searchValue}
        name=""
        className="accent-zinc-200 caret-pink-500 bg-zinc-200 relative pl-10 w-full h-10 rounded "
        placeholder="Search in notes"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="black"
        className="w-6 h-6 absolute m-2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>
    </div>
  );
}

export default SearchBar;
