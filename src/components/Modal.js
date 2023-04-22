import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ColorSelector from "./ColorSelector";
import {
  addNewNoteModelOpen,
  addNoteAsync,
  selectedColor,
  setSelectedColor,
} from "../redux/notes/notesSlice";
import useKeyPress from "../customHooks/useKeyPress";

function Modal() {
  const dispatch = useDispatch();

  const inputRef = useRef(null);

  const handleModalOpen = () => {
    dispatch(addNewNoteModelOpen(true));
    setTimeout(() => {
      inputRef.current.focus();
    }, 0);
  };

  useKeyPress(['Escape'], () => dispatch(addNewNoteModelOpen(false)));
  useKeyPress(['Shift','+'], () => {handleModalOpen()});


  const toggleModal = useSelector((state) => state.notes.addNewNoteModelIsOpen);
  const handleModalToggle = (e) => {
    if (e.id === "modalClose") {
      dispatch(addNewNoteModelOpen(false));
    }
  };

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [tag, setTag] = useState("Personal");

  const selectColor = useSelector(selectedColor);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title.trim() === "") {
      setTitle("");
      return;
    }

    const data = {
      title,
      description: desc,
      selectColor,
      tag,
    };
    await dispatch(addNoteAsync({ data }));
    setTitle("");
    setDesc("");
    dispatch(setSelectedColor("bg-zinc-200"));
  };
  return (
    <div
      onClick={(e) => handleModalToggle(e.target)}
      id="modalClose"
      className={`flex bg-opacity-70 bg-zinc-900 w-full h-screen fixed z-50 bg-blur ${
        toggleModal ? "block" : "hidden"
      }`}
    >
      <form
        onSubmit={handleSubmit}
        className={`w-96  p-4  rounded-md m-auto flex flex-col ${
          selectColor || "bg-zinc-400"
        } `}
      >
        <div className="flex flex-col mt-4">
          <label for="title">Title of the note</label>
          <input
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            name="title"
            required
            placeholder="Title"
            className="rounded p-2 mt-2"
            ref={inputRef}
            autoFocus
          />
        </div>
        <div className="flex flex-col mt-4">
          <label for="description">Description of the note</label>
          <textarea
            onChange={(e) => setDesc(e.target.value)}
            name="description"
            placeholder="Description"
            className="rounded p-2 mt-2"
            rows={6}
            value={desc}
          />
        </div>
        <div>
          <label for="tag">Tag:</label>
          {/* Select */}
          <select
            value={tag}
            onChange={(e) => setTag(e.target.value)}
            name="tag"
            className="rounded ml-4 p-2 mt-2"
          >
            <option value="personal">Personal</option>
            <option value="project">Project</option>
            <option value="business">Business</option>
            <option value="shopping">Shopping</option>
            <option value="school">School</option>
            <option value="travel">Travel</option>
            <option value="home">Home</option>
          </select>
        </div>
        <div className="mt-2">
          <ColorSelector />
        </div>
        <div className="flex flex-row justify-end">
          <p className="m-auto text-xs">You can open it with 'Shift' and '+' keys and also you can close it with 'ESC' key!</p>
          <button
            className="p-2 px-4 bg-black text-zinc-200 rounded-md"
            type="submit"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default Modal;
