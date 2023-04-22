import React, { useEffect } from "react";
import Note from "./Note";
import { useSelector, useDispatch } from "react-redux";
import {
  selectFilteredItems,
  getNotesAsync,
} from "../redux/notes/notesSlice";


function Content() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNotesAsync());
  }, [dispatch]);

  // const handleDestroy = async (id) => {
  //   if (window.confirm("Are you sure?")) {
  //     await dispatch(deleteTodoAsync({id}));
  //   }
  // };
  const filteredItems = useSelector(selectFilteredItems);


  return (
    <div className="flex w-full flex-wrap justify-center md:justify-start">
      {filteredItems.map((value) => {
        return (
          <Note
            id={value.id}
            title={value.title}
            description={value.description}
            created_at={value.created_at}
            tag={value.tag}
            key={value.id}
            bgColor={value.color}
          />
        );
      })}
    </div>
  );
}

export default Content;
