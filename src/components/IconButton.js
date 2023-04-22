import React from "react";

function IconButton(props) {

  return (
    <button {...props} className="relative m-auto ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 sm:absolute relative m-auto mx-4 sm:mx-0"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <div className="pl-8 hidden sm:inline ">Add new note!</div>
    </button>
  );
}

export default IconButton;
