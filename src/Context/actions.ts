import { ThunkAction,ThunkDispatch } from "redux-thunk";
import { RootState, RootAction, FETCH_DATA_SUCCESS } from "./types";

export const fetchData =(): ThunkAction<void, RootState, unknown, RootAction> =>
  async (
    dispatch: ThunkDispatch<RootState, unknown, RootAction>
  ) => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      dispatch({
        type: FETCH_DATA_SUCCESS,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
