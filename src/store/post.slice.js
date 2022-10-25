import { createSlice } from "@reduxjs/toolkit";
import Post from "../models/Post";

const initialState = {
  posts: [],
  id: 0
};


const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {
      addPost: (state, action) => {
        state.id = state.id + 1;
        const newPost = new Post(
          state.id,
          action.payload.title,
          action.payload.image
        );
        state.posts.push(newPost);
      }
    },
  });
  
  export const { addPost } = postSlice.actions;

  export default postSlice.reducer;
