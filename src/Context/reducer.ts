import { RootState, RootAction, FETCH_DATA_SUCCESS } from "./types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const initialState: RootState = {
  user: {
    email: "",
    image: null,
    },
  error: null,
};

export const rootReducer = (
  state = initialState,
  action: RootAction
): RootState => {
  switch (action.type) {
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        error: null,
    
      };
    default:
      return state;
  }
};

const userSlice = createSlice({
  // Name of the slice
  name: "user",
  initialState,
  //   Reducers/Functions- Things to change in state.
  //   Reducers are functions that take the current state and an action as arguments, and return a new state result.
  reducers: {
    updateEmail: (state, action: PayloadAction<string>) => {
      state.user.email = action.payload;
    },
    updateImage: (state, action: PayloadAction<File>) => {
      state.user.image = action.payload;
    },
  },
});

export const { updateEmail, updateImage } = userSlice.actions;
export default userSlice.reducer;
