import { createSlice } from "@reduxjs/toolkit";
import Post from "../models/Post";
import { insertPost, getPosts } from "../db";

const initialState = {
  posts: [],
};


const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {
      addPost: (state, action) => {
        const newPost = new Post(
          action.payload.id.toString(),
          action.payload.title,
          action.payload.image
        );
        state.posts.push(newPost);
      },
      setPosts: (state, action) => {
        state.posts = action.payload;
      }
    },
  });
  
  export const { addPost, setPosts } = postSlice.actions;


  export const savePost = (title, image) => {
    return async (dispatch) => {

      try {
  
        const result = await insertPost(title, image);
        dispatch(addPost({ id: result.insertId, title, image}));
      } catch (error) {
        console.log("error", error);
        throw error;
      }
    };
  };
  

  export const loadPosts = () => {
    return async (dispatch) => {
      try {
        const result = await getPosts();
        console.warn(result?.rows?._array)
        dispatch(setPosts(result?.rows?._array));
      } catch (error) {
        console.log("error", error);
        throw error;
      }
    };


  }




  export default postSlice.reducer;
