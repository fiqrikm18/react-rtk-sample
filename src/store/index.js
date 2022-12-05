import { configureStore } from "@reduxjs/toolkit";

import movieReducer from "../features/movies/movieSlice";
import appReducer from "../features/app/appSlice";

const store = configureStore({
  reducer: {
    app: appReducer,
    movie: movieReducer,
  },
});

export default store;
