import React from 'react'

function TagButton(props) {
  return (
    <button {...props} className={`select-none mx-1 my-2 py-2 px-4 rounded hover:bg-zinc-800 hover:text-zinc-100 ${props.isActive ? 'bg-zinc-800 text-zinc-100' : ''} relative`}>
      {props.tagName.toUpperCase()}
      {/* <div className="rounded-full absolute -top-1 -right-1 w-4 h-4 text-zinc-800 text-xs bg-lime-400"></div> */}
    </button>
  )
}

export default TagButton