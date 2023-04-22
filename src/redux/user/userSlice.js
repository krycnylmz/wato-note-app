import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


  export const getUserAsync = createAsyncThunk(
    "user/getUserAsync",
    async (data) => {
      console.log(`panda getUserAsync SLice ${data}`);
      const res = await axios.post(
        `${process.env.REACT_APP_API_BASE_ENDPOINT}user`,
        data
        );
      return res.data;
    }
  );


export const userSlice = createSlice({
  name: "user",
  initialState: {
    items: [],
    user:{},
    isLoginSuccess:false,
    isLoading:false,
    userError:"",
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

  },
  extraReducers: {
    //Get user
    [getUserAsync.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getUserAsync.fulfilled]: (state, action) => {
      // state.user = action.payload;
      let user = {
        id: action.payload.id,
        email: action.payload.email,
        created_at: action.payload.created_at
      }
      sessionStorage.setItem('user', JSON.stringify(user));
      state.isLoginSuccess = true;
      state.isLoading = false;
    },
    [getUserAsync.rejected]: (state, action) => {
      state.isLoading = false;
      state.isLoginSuccess = false;
      state.userError = action.error.message;
    },
  },
});

export const userError = (state) => state.user.userError;
export const user = (state) => state.user.user;
export const isLogedIn = (state) => state.user.isLoginSuccess;

export const {
  // addNewNoteModelOpen,
  // setFilter,
  // clearCompleted,
  // setSelectedColor,
  // setSearchBarValue,
} = userSlice.actions;
export default userSlice.reducer;
