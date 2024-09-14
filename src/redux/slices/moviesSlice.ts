import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { IMovie } from "../../models/IMovie";
import { IMoviesListItem } from "../../models/IMoviesListItem";
import { apiService } from "../../services/api.service";
import { store } from "../store";

type MoviesSliceType = {
  movies: IMoviesListItem[];
  movie: IMovie | null;
  page: number;
  totalPages: number | null;
  totalResults: number | null;
  selectedGenres: number[];
  searchPhrase: string;
};

const moviesInitialState: MoviesSliceType = {
  movies: [],
  movie: null,
  page: -1,
  totalPages: null,
  totalResults: null,
  selectedGenres: [],
  searchPhrase: "",
};

const loadMovies = createAsyncThunk(
  "moviesSlice/loadMovies",
  async (_, thunkAPI) => {
    const { moviesSlice: state } = thunkAPI.getState() as ReturnType<
      typeof store.getState
    >;

    let query = "";
    if (state.page != 1) {
      query += `page=${state.page}`;
    }
    if (state.searchPhrase) {
      if (query) {
        query = query + "&";
      }
      query += `query=${state.searchPhrase}`;
    }
    if (state.selectedGenres) {
      if (query) {
        query = query + "&";
      }
      const genresString = JSON.stringify(state.selectedGenres);
      query += `with_genres=${genresString.substring(
        1,
        genresString.length - 1
      )}`;
    }
    if (query) {
      query = "?" + query;
    }

    try {
      const moviesResponse = state.searchPhrase
        ? await apiService.searchMoviesList({ query })
        : await apiService.getMoviesList({ query });
      return thunkAPI.fulfillWithValue(moviesResponse.data);
    } catch (e) {
      const error = e as AxiosError;
      return thunkAPI.rejectWithValue(error.response?.data);
    }
  }
);

const loadMovie = createAsyncThunk(
  "moviesSlice/loadMovie",
  async (id: number | string, thunkApi) => {
    const movieResponse = await apiService.getMovieDetails({ id });
    return thunkApi.fulfillWithValue(movieResponse.data);
  }
);

export const moviesSlice = createSlice({
  name: "moviesSlice",
  initialState: moviesInitialState,
  reducers: {
    chageSelectedGenres: (state, action) => {
      state.selectedGenres = action.payload;
    },
    changePage: (state, action) => {
      state.page = action.payload;
    },
    changeSearchPhrase: (state, action) => {
      state.searchPhrase = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(loadMovies.fulfilled, (state, action) => {
      state.totalPages =
        action.payload?.total_pages && action.payload?.total_pages > 500
          ? 500
          : action.payload?.total_pages || null;
      state.totalResults = action.payload?.total_results || null;
      state.movies = action.payload?.results || [];
    });
    builder.addCase(loadMovie.fulfilled, (state, action) => {
      state.movie = action.payload || null;
    });
    // builder.addCase(loadPosts.rejected, (state) => {
    //   state.posts = [];
    // });
    // builder.addCase(loadPostById.fulfilled, (state, action) => {
    //   state.post = action.payload;
    // });
    // builder.addCase(loadPostById.rejected, (state) => {
    //   state.post = null;
    // });
    // builder.addMatcher(isFulfilled(loadPostById, loadPosts), (state) => {
    //   state.isLoaded = true;
    // });
  },
});

export const moviesActions = {
  ...moviesSlice.actions,
  loadMovies,
  loadMovie,
  // loadPostById,
};
