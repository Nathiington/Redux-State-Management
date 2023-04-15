import React, { useEffect } from "react";
import HomePage from "./Pages/HomePage";
import { useDispatch, useSelector } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { RootAction, RootState } from "./Context/types";
// import { fetchData } from "./Context/actions";

export default function App() {
  
  // const dispatch : ThunkDispatch<RootState, null, RootAction> = useDispatch();
  const data = useSelector((state: RootState) => state.user);

  // useEffect(() => {

  //   dispatch(fetchData());

  // }, [dispatch]);

  return (
    <>
      <HomePage data={data} />
    </>
  );
}
