import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getNotesAsync = createAsyncThunk(
  "notes/getNotesAsync",
  async () => {
    const response = await axios(
      `${process.env.REACT_APP_API_BASE_ENDPOINT}notes`
    );

    return response.data;
  }
);

export const addNoteAsync = createAsyncThunk(
  "notes/addNoteAsync",
  async (data) => {
    // console.log(`panda ${data}`);
    const res = await axios.post(
      `${process.env.REACT_APP_API_BASE_ENDPOINT}notes`,
      data
    );
    return res.data;
  }
);

export const toggleNoteAsync = createAsyncThunk(
  "notes/toggleNoteAsync",
  async ({ id, data }) => {
    const res = await axios.patch(
      `${process.env.REACT_APP_API_BASE_ENDPOINT}notes/${id}`,
      data
    );
    return res.data;
  }
);

export const deleteNoteAsync = createAsyncThunk(
  "notes/deleteNoteAsync",
  async ({ id }) => {
    const res = await axios.delete(
      `${process.env.REACT_APP_API_BASE_ENDPOINT}notes/${id}`
    );
    return res.data;
  }
);

export const notesSlice = createSlice({
  name: "notes",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    activeFilter: "All",
    addNewTodoIsLoading: false,
    addNewTodoError: null,
    addNewNoteModelIsOpen: false,
    selectedColor: "bg-zinc-200",
    searchBarValue: null,
  },
  reducers: {
    // addTodo: {
    //   reducer: (state, action) => {
    //     state.items.push(action.payload);
    //   },
    //   prepare: ({ text }) => {
    //     return {
    //       payload: {
    //         id: nanoid(),
    //         completed: false,
    //         text,
    //       },
    //     };
    //   },
    // },
    // toogle: (state, action) => {
    //   const item = state.items.find((item) => item.id === action.payload.id);
    //   item.completed = !item.completed;
    // },
    // destroy: (state, action) => {
    //   const index = state.items.findIndex(
    //     (item) => item.id === action.payload.id
    //   );
    //   state.items.splice(index, 1);
    // },
    addNewNoteModelOpen: (state, action) => {
      state.addNewNoteModelIsOpen = action.payload;
    },
    setFilter: (state, action) => {
      state.activeFilter = action.payload;
    },
    setSearchBarValue: (state, action) => {
      state.searchBarValue = action.payload;
    },
    clearCompleted: (state) => {
      state.items = state.items.filter((item) => !item.completed);
    },
    setSelectedColor: (state, action) => {
      state.selectedColor = action.payload;
    },
  },
  extraReducers: {
    //Get note
    [getNotesAsync.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getNotesAsync.fulfilled]: (state, action) => {
      state.items = action.payload.sort(
        (a, b) => new Date(b.created_at) - new Date(a.created_at)
      );
      state.isLoading = false;
    },
    [getNotesAsync.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    },
    //Add note
    [addNoteAsync.pending]: (state, action) => {
      state.addNewNoteIsLoading = true;
    },
    [addNoteAsync.fulfilled]: (state, action) => {
      state.items.unshift(action.payload);
      state.addNewNoteIsLoading = false;
    },
    [addNoteAsync.rejected]: (state, action) => {
      state.addNewNoteError = action.error.message;
      state.addNewNoteIsLoading = false;
    },
    // Toggle note
    [toggleNoteAsync.fulfilled]: (state, action) => {
      const { id, completed } = action.payload;
      const index = state.items.findIndex((item) => item.id === id);
      state.items[index].completed = completed;
    },
    // Delete note
    [deleteNoteAsync.fulfilled]: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const toggleModal = (state) => state.notes.addNewNoteModelIsOpen;
export const activeFilter = (state) => state.notes.activeFilter;
export const selectItems = (state) => state.notes.items;
export const selectedColor = (state) => state.notes.selectedColor;
export const isLoading = (state) => state.notes.isLoading;

export const selectFilteredItems = (state) => {
  if (state.notes.activeFilter.toLowerCase() === "all") {
    return state.notes.items.filter(
      (note) =>
        note.title
          .toLowerCase()
          .includes(state.notes.searchBarValue.toLowerCase(), 0) ||
        note.description
          .toLowerCase()
          .includes(state.notes.searchBarValue.toLowerCase(), 0)
    );
  }
  const filteredNotes = state.notes.items.filter(
    (note) => note.tag.toLowerCase() === state.notes.activeFilter.toLowerCase()
  );
  return filteredNotes.filter(
    (note) =>
      note.title
        .toLowerCase()
        .includes(state.notes.searchBarValue.toLowerCase(), 0) ||
      note.description
        .toLowerCase()
        .includes(state.notes.searchBarValue.toLowerCase(), 0)
  );
};

export const {
  addNewNoteModelOpen,
  setFilter,
  clearCompleted,
  setSelectedColor,
  setSearchBarValue,
} = notesSlice.actions;
export default notesSlice.reducer;
