import { createSlice, createAsyncThunk, current } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { PopularMovies, searchMovies } from '../../api';

export const searchMovieByWord = createAsyncThunk<PopularMovies[], string>(
  'movies/search',
  async (query: string) => {
    const response = await searchMovies(query);
    return response;

    // We could also use `as` to coerce its type
    // as in the RTK docs.
  },
);

// export const searchMovieByKeyword = createAsyncThunk('musicSearch', async (query: string) => {
//   const res = await searchMovies(query);
//   return res;
// });

interface MovieState {
  movies: PopularMovies[];
}

const initialState: MovieState = {
  movies: [],
};

export const movieSlice = createSlice({
  name: 'movieResults',
  initialState,
  reducers: {
    addMovies: (state, action: PayloadAction) => {
      console.log(action);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(searchMovieByWord.fulfilled, (state, action) => {
      //       console.log(state, action);
      //       console.log('action ', action);

      state.movies = action.payload;
      //       console.log(current(state));
      // state.movies === action.payload
    });
  },
});

export const { addMovies } = movieSlice.actions;
export default movieSlice.reducer;
