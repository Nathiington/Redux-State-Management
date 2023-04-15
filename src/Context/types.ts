export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
//defining the type of the state
//RootState contains the state of the user, any errors and other elements that can be added to the state.
//User contains the email and image of the user
export interface RootState {
    user: User
    error: string | null,
}

export interface User {
  email: string;
  image: File | null;
}

export interface FetchDataSuccessAction {
  type: typeof FETCH_DATA_SUCCESS;
  payload: any[];
}

export type RootAction = FetchDataSuccessAction  // other action types

