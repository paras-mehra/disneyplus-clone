// whole global state of My Disney Movies and then its providing all the data in to every single state => is called category:

import { configureStore } from "@reduxjs/toolkit";
import MovieReducer from "../Reducer/MovieReducer";
import UserReducer from "../Reducer/UserReducer";

export const store = configureStore({
  reducer: {
    movie: MovieReducer,
    user: UserReducer
  },
});
