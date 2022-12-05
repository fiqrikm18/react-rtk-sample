import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../service/Network";

const initialState = {
  latestMovie: {},
};

export const fetchLatestMovie = createAsyncThunk(
  "movies/fetchLatestMovie",
  async () => {
    try {
      const response = await axios.get("/movie/latest");
      return response;
    } catch (err) {
      console.log(err);
    }
  }
);

const movieSlice = createSlice({
  name: "movies",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchLatestMovie.fulfilled, (state, action) => {
      state.latestMovie = action.payload;
    });
  },
});

export default movieSlice.reducer;
export const {} = movieSlice.actions;
