import React from "react";
import TagButton from "./TagButton";
import { setFilter, activeFilter } from "../redux/notes/notesSlice";
import { useDispatch, useSelector } from "react-redux";


function ContentNav() {
  const dispatch = useDispatch();
  const tags = ["all","personal","project","business","shopping","school","travel","home"];
  const activeTag = useSelector(activeFilter);
  return (
    <div className="w-full mt-2 overflow-x-auto wrap flex flex-row scrollbar-thin touch-auto scrollbar-track-zinc-200 scrollbar-thumb-zinc-600 select-none hover:overscroll-contain">
      {tags.map((tag) => {
        return <TagButton onClick={() => dispatch(setFilter(tag))} tagName={tag} isActive={tag.toLowerCase() === activeTag.toLowerCase() ? true : false} />;
      })}
    </div>
  );
}

export default ContentNav;
