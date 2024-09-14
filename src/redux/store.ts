import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { genresSlice } from "./slices/genresSlice";
import { moviesSlice } from "./slices/moviesSlice";
import { settingsSlice } from "./slices/settingsSlice";
import { userSlice } from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    moviesSlice: moviesSlice.reducer,
    settingsSlice: settingsSlice.reducer,
    genresSlice: genresSlice.reducer,
    userSlice: userSlice.reducer,
  },
});

export const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>();
export const useAppSelector =
  useSelector.withTypes<ReturnType<typeof store.getState>>();
