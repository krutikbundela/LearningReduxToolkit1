import { configureStore } from "@reduxjs/toolkit";
import usersSlice  from "./slices/UserSlices";

const store = configureStore({
  //if this is a single function ,
  // it will be directly used as the root reducer for the store.
  reducer: {
    users: usersSlice,
  },
  /*
  if it is an object of slice reducers , like
  { users: usersSlice.reducer,  posts: postSlice.reducer,},
  configureStore will automatically create the root reducer by passing this object
  to the reduc combine Reducer utility
  */
});

export default store;