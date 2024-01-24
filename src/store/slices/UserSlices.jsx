import {createSlice} from "@reduxjs/toolkit";
import { deleteAllUsers } from "../action";

/*

A function that accepts a 
1. "Slice Name"
2. an Initial State
3. Object Of Reducer Functions, 
4. Automatiicaly Generates Action Creators and 
    Action Types that correspond to the reduers and state

*/

const usersSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
    },
    removeUser(state, action) {
      state.splice(action.payload, 1);
    },
    // deleteAllUsers(state, action) {
    //   return [];
    // },
  },

  //if some subreducer is common in different part like in admin , user so we define it
  // in extra reducer so we don't have to write it many times

  //drawback
  //if we delete uppr subreducer (usersSlice.actions.deleteUsers) then it will not be usable because
  //from source we are delteing ........
//   extraReducers(builder) {
//     builder.addCase(usersSlice.actions.deleteUsers, () => {
//       return [];
//     });
//   },

//to removeDraw back
//we have made action name
//and we will define here so now the extrareducer has become Independant
  extraReducers(builder) {
    builder.addCase(deleteAllUsers, () => {
      return [];
    });
  },

  // if action is supposed to be handeled by one reducer , use reducers.
  //if action is supposed to be handled by multiple reducer , then  use extraReducer.
});

export default usersSlice.reducer;

export const { addUser, removeUser, } = usersSlice.actions;