import React from "react";

function ColorBadge(props) {
  return (
    <button {...props} type="button">
      <div className={`h-10 w-10 rounded-full m-1 ${props.color} ${props.isSelected ? 'border-4' : ""} hover:border-4 transition-all duration-75 ease-in-out`}></div>
    </button>
  );
}

export default ColorBadge;
