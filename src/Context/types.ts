//defining the type of the state
//RootState contains the state of the user, any errors and other elements that can be added to the state.
//User contains the email and image of the user
export interface RootState {
    user: User
    data: Data,
}

export interface User {
  email: string;
  name: string;
}

export interface Data {
  color: string;
  colorHistory: string[];
}


