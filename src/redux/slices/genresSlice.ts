import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { IGenre } from "../../models/IGenre";
import { apiService } from "../../services/api.service";

type GenresSliceType = {
  genres: IGenre[];
  genresById: { [name: string]: number };
};

const genresInitialState: GenresSliceType = {
  genres: [],
  genresById: {},
};

const loadGenres = createAsyncThunk(
  "genresSlice/getGenres",
  async (_, thunkAPI) => {
    try {
      const genresResponse = await apiService.getGenresList();
      return thunkAPI.fulfillWithValue(genresResponse.data.genres);
    } catch (e) {
      const error = e as AxiosError;
      return thunkAPI.rejectWithValue(error.response?.data);
    }
  }
);

export const genresSlice = createSlice({
  name: "genresSlice",
  initialState: genresInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadGenres.fulfilled, (state, action) => {
      state.genres = action.payload;
      const genresById = {};
      for (const key in action.payload) {
        genresById[action.payload[key].id] = action.payload[key].name;
      }
      state.genresById = genresById;
    });
  },
});

export const genresActions = {
  ...genresSlice.actions,
  loadGenres,
};
