import React, { useState } from "react";
import NoteHeader from "./NoteHeader";
import NoteTag from "./NoteTag";
import Dropdown from "./Dropdown";

function Note({id, title, description, created_at, tag, bgColor }) {
  const [isOpen, setIsOpen] = useState(false);
  const HandleIsOpen = () => {
    setIsOpen(!isOpen);
    console.log(`panda isOpen${isOpen}`);
  }
  return (
    <div
      className={`h-auto w-full md:w-1/2 lg:w-1/3 xl:w-1/4 flex flex-col relative`}
    >
      <div className={`rounded-lg p-4 m-2 h-full ${
        bgColor || "bg-zinc-200"
      }`}>
        <NoteHeader onClick={() => {HandleIsOpen()}} isOpen={isOpen} created_at={created_at} />
        <h3 className="mt-1 text-lg font-medium ">{title}</h3>
        <p className=" min-h-24 mt-2">{description}</p>
        <div className="h-8 relative grow justify-end flex flex-col">
          <NoteTag tag={tag} />
        </div>
      </div>
        <Dropdown id={id}  className={`absolute p-4 w-full z-30 bg-zinc-800 text-zinc-50 h-full rounded-2xl  ${isOpen ? "block" : "hidden"}`}/>
    </div>
  );
}

export default Note;
