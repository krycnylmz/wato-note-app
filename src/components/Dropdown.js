import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteNoteAsync } from '../redux/notes/notesSlice';

// import ColorSelector from './ColorSelector';
function Dropdown(props) {
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    console.log(`${id}`);
    dispatch(deleteNoteAsync({id}))
  }
  return (
    <div {...props}>
      <div className="w-44">
        <h4 className=" border-b-2 mb-2">Setting</h4>
        <div>
          <button onClick={() => handleDelete(props.id)} className="bg-red-800 py-2 px-4 rounded-md font-medium hover:bg-red-900 transition-all duration-300">Delete</button>
        </div>
        <div>
          {/* <ColorSelector /> */}
        </div>
      </div>
    </div>
  )
}

export default Dropdown