import React from 'react'

function NoteTag({tag}) {
  return (
    <div className={`py-1 px-2 absolute bottom-0 right-0 text-white text-xs bg-zinc-800 rounded-lg`}>
      {tag}
    </div>
  )
}

export default NoteTag