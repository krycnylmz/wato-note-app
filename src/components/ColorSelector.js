import React from "react";
import ColorBadge from "./ColorBadge";
import { selectedColor, setSelectedColor } from "../redux/notes/notesSlice";
import { useSelector, useDispatch } from "react-redux";


function ColorSelector() {
  const selectColor = useSelector(selectedColor);
  const dispatch = useDispatch();

  //create a colors object
  const colors = [
    { name: "bg-zinc-200" },
    { name: "bg-fuchsia-300" },
    { name: "bg-green-300" },
    { name: "bg-amber-300" },
    { name: "bg-purple-300" },
  ];
  return (
    <div>
      <label>Color</label>
      <div className="flex">
        {colors.map((color) => {
          return (
            <ColorBadge
              onClick={() => dispatch(setSelectedColor(color.name))}
              color={color.name}
              isSelected={color.name === selectColor ? true : false}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ColorSelector;
