import React from "react";
import IconButton from "./IconButton";
import { useDispatch } from "react-redux";
import {addNewNoteModelOpen} from "../redux/notes/notesSlice";



function AddNewNote() {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-row flex-auto w-22 sm:w-64 m-auto text-zinc-200">
      <IconButton onClick={() => dispatch(addNewNoteModelOpen(true))}/>
    </div>
  );
}

export default AddNewNote;
