import {  createSlice } from '@reduxjs/toolkit';


const initialState = {
  comments: [],
  commentsButtonsDisplay: 'Show Comments',
  selectedComments: '/r/pics/comments/15kmbif/this_is_my_latest_pencil_drawing_this/',
  selectedCommentsTitle: ''
};

export const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    setSelectedComments: (state, action) => {
      state.selectedComments = action.payload;
    },
    setButtons: (state, action) => {
      state.commentsButtonsDisplay = action.payload
    },
    setComments: (state, action) => {
      state.comments = action.payload; // Replace the state with the new posts data received from the API.
    },
    setSelectedCommentsTitle: (state, action) => {
      state.selectedCommentsTitle =action.payload;   
    }
  }
})

export const { setSelectedComments, setComments, setButtons, setSelectedCommentsTitle } = commentsSlice.actions;
export default commentsSlice.reducer;


