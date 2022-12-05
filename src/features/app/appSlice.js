import { createSlice } from "@reduxjs/toolkit";
import { fetchLatestMovie } from "../movies/movieSlice";

const initialState = {
  loading: false,
};

const AppSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchLatestMovie.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchLatestMovie.fulfilled, (state) => {
      state.loading = false;
    });

    builder.addCase(fetchLatestMovie.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default AppSlice.reducer;
export const { setLoading } = AppSlice.actions;
