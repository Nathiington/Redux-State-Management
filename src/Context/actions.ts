interface updateName{
  type: typeof UPDATE_NAME,
  payload: string
};

interface updateEmail{
  type: typeof UPDATE_EMAIL,
  payload: string
};

interface updateColor{
  type: typeof UPDATE_COLOR,
  payload: string
};



export const UPDATE_NAME = "UPDATE_NAME";
export const UPDATE_EMAIL = "UPDATE_EMAIL";
export const UPDATE_COLOR = "UPDATE_COLOR";

export type FormActionTypes = updateName | updateEmail | updateColor ;


  // async (dispatch: ThunkDispatch<RootState, unknown, RootAction>) => {
  //   try {
  //     const response = await fetch(
  //       "https://jsonplaceholder.typicode.com/posts"
  //     );
  //     const data = await response.json();
  //     dispatch({
  //       type: FETCH_DATA_SUCCESS,
  //       payload: data,
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // export const fetchData = () => {
  //   return (dispatch: any) => {
  //     // Simulating a fetch request that returns a user object
  //     const user: RootState["user"] = {
  //       email: "example@example.com",
  //       name: "John Doe",
  //     };

  //     dispatch(fetchDataSuccess(user));
  //   };
  // };
