import { RootState } from "./types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const initialState: RootState = {
  user: {
    email: "",
    name: "",
  },
  data: {
    color: "",
    colorHistory: [],
  },
};

const userSlice = createSlice({
  // Name of the slice based on the area of the app it is related to.
  name: "user",
  initialState,
  //   Reducers/Functions- Things to change in state.
  //   Reducers are functions that take the current state and an action as arguments, and return a new  updated state as a result.
  reducers: {
    updateEmail: (state, action: PayloadAction<string>) => {
      state.user.email = action.payload;
    },
    updateName: (state, action: PayloadAction<string>) => {
      state.user.name = action.payload;
    },
    updateColor: (state, action: PayloadAction<string>) => {
      state.data.color = action.payload;
      state.data.colorHistory.push(action.payload);
    },
    undoColor: (state) => {
      state.data.colorHistory.pop();
      state.data.color = state.data.colorHistory[state.data.colorHistory.length - 1];
    },
    clearState: () => {
      return initialState;
    }

  },
});


export const { updateEmail, updateName,updateColor,undoColor,clearState } = userSlice.actions;
export default userSlice.reducer;
